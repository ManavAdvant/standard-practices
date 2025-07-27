import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  const features = [
    {
      title: 'Clerk Authentication',
      description:
        'Complete authentication system with sign-in, sign-up, and user management.',
      icon: '🔐',
    },
    {
      title: 'Prisma ORM',
      description:
        'Type-safe database operations with schema management and migrations.',
      icon: '💾',
    },
    {
      title: 'Supabase Database',
      description:
        'PostgreSQL database with real-time subscriptions and edge functions.',
      icon: '🗄️',
    },
    {
      title: 'Atomic Design',
      description:
        'Component structure following atoms, molecules, and organisms pattern.',
      icon: '⚛️',
    },
    {
      title: 'Custom Hooks',
      description:
        'Reusable React hooks for state management and API interactions.',
      icon: '🪝',
    },
    {
      title: 'Loading States',
      description:
        'Various loader components and loading state management patterns.',
      icon: '⏳',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Standard Practices
            <span className="text-blue-600"> Demo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive demonstration of modern Next.js development
            patterns, showcasing industry-standard practices for authentication,
            database management, and component architecture.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What You&apos;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Next.js 15',
              'TypeScript',
              'Tailwind CSS',
              'Clerk Auth',
              'Prisma ORM',
              'Supabase',
              'Zod Validation',
              'React Hooks',
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border"
              >
                <p className="font-medium text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
