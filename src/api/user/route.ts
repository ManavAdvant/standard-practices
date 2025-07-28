import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log(body);

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      clerkId: body.clerkId,
    },
  });

  return NextResponse.json(
    { message: 'User created', user: newUser },
    {
      status: 200,
    },
  );
}
