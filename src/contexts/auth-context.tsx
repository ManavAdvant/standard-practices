'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { User } from '@/schemas/user';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isSignedIn: boolean;
  clerkUser: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded) return;

      setIsLoading(true);

      if (isSignedIn && clerkUser) {
        try {
          // Sync user with database
          const userData: User = {
            id: clerkUser.id,
            clerkId: clerkUser.id,
            email: clerkUser.emailAddresses[0]?.emailAddress || '',
            firstName: clerkUser.firstName || undefined,
            lastName: clerkUser.lastName || undefined,
            imageUrl: clerkUser.imageUrl || undefined,
            createdAt: new Date(clerkUser.createdAt!),
            updatedAt: new Date(clerkUser.updatedAt!),
          };

          setUser(userData);
        } catch (error) {
          console.error('Error syncing user:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }

      setIsLoading(false);
    };

    syncUser();
  }, [clerkUser, isLoaded, isSignedIn]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isSignedIn: !!isSignedIn,
        clerkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
