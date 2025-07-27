'use client';

import React from 'react';
import { useAuth } from '@/contexts/auth-context';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  SpinnerLoader,
  DotsLoader,
  PulseLoader,
  SkeletonLoader,
  ProgressLoader,
} from '@/components/ui/loader';

export default function OverviewPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <SpinnerLoader size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.firstName || 'User'}!
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <div className="text-2xl">👥</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <div className="text-2xl">📊</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <div className="text-2xl">💰</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+7% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <div className="text-2xl">📈</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.5%</div>
            <p className="text-xs text-muted-foreground">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Component Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Loader Components Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Loading Components</CardTitle>
            <CardDescription>
              Various loader components built with Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Spinner Loader</h4>
              <div className="flex space-x-4 items-center">
                <SpinnerLoader size="sm" />
                <SpinnerLoader size="md" />
                <SpinnerLoader size="lg" />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Dots Loader</h4>
              <DotsLoader size="md" />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Pulse Loader</h4>
              <div className="flex space-x-4 items-center">
                <PulseLoader size="sm" />
                <PulseLoader size="md" />
                <PulseLoader size="lg" />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Progress Loader</h4>
              <ProgressLoader progress={65} />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Skeleton Loader</h4>
              <SkeletonLoader lines={3} />
            </div>
          </CardContent>
        </Card>

        {/* User Info */}
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Data from Clerk authentication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              {user?.imageUrl && (
                <img
                  src={user.imageUrl}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500">
                  Member since {user?.createdAt.toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: 'Created new project',
                time: '2 hours ago',
                icon: '📝',
              },
              {
                action: 'Updated user profile',
                time: '5 hours ago',
                icon: '👤',
              },
              {
                action: 'Completed task review',
                time: '1 day ago',
                icon: '✅',
              },
              { action: 'Joined team meeting', time: '2 days ago', icon: '🎥' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
