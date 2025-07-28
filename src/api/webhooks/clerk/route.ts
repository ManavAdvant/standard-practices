import { prisma } from '@/lib/prisma';
import { WebhookEvent } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Webhook } from 'svix';

// Your webhook secret from Clerk Dashboard
const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(request: Request) {
  try {
    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new NextResponse('Error occured -- no svix headers', {
        status: 400,
      });
    }

    // Get the body
    const payload = await request.json();
    const wh = new Webhook(WEBHOOK_SECRET || '');
    const evt = (await wh.verify(JSON.stringify(payload), {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })) as WebhookEvent;

    // Handle the webhook
    const eventType = evt.type;

    if (eventType === 'user.created' || eventType === 'user.updated') {
      await handleUserCreated(evt.data);
    }

    return NextResponse.json({ message: 'Webhook processed' });
  } catch (error: unknown) {
    return new NextResponse(
      error instanceof Error ? error.message : 'Unknown error',
      {
        status: 400,
      },
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleUserCreated(data: any) {
  const { id, email_addresses, first_name, last_name } = data;
  const primaryEmail = email_addresses?.[0]?.email_address;

  console.log('User created or updated:', { id });

  // Create or update user in database
  const user = await prisma.user.upsert({
    where: { clerkId: id },
    update: { email: primaryEmail, firstName: first_name, lastName: last_name },
    create: {
      email: primaryEmail,
      firstName: first_name,
      lastName: last_name,
      clerkId: id,
    },
  });

  return user;
}
