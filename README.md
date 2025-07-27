# Standard Practices - Next.js Demo Project

A comprehensive demonstration of modern Next.js development patterns and industry-standard practices for trainees. This project showcases authentication, database management, component architecture, and more.

## 🚀 Features

- **🔐 Clerk Authentication** - Complete auth system with sign-in/sign-up
- **💾 Prisma ORM** - Type-safe database operations with PostgreSQL
- **🗄️ Supabase Database** - Modern PostgreSQL database with real-time features
- **⚛️ Atomic Design** - Component structure following atoms, molecules, organisms
- **🪝 Custom Hooks** - Reusable React hooks for state management
- **⏳ Loading States** - Various loader components with Tailwind CSS
- **📱 Responsive Design** - Mobile-first responsive layouts
- **🎨 Modern UI** - Clean, professional interface design
- **🔧 TypeScript** - Full type safety throughout the application
- **📋 Form Validation** - Zod schemas for robust data validation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router structure
│   ├── (branding)/         # Public pages (landing, auth, etc.)
│   │   ├── sign-in/        # Clerk sign-in page
│   │   ├── sign-up/        # Clerk sign-up page
│   │   └── layout.tsx      # Branding layout with header/footer
│   ├── api/                # API routes
│   └── app/                # Protected application routes
│       ├── overview/       # Dashboard overview
│       ├── details/        # Detailed views
│       ├── settings/       # User settings
│       └── layout.tsx      # App layout with navigation
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components (atoms)
│   │   ├── button.tsx      # Button component with variants
│   │   ├── card.tsx        # Card components
│   │   ├── input.tsx       # Input component
│   │   └── loader.tsx      # Various loader components
│   ├── branding/           # Branding-specific components
│   └── icons/              # Icon components
├── contexts/               # React context providers
│   └── auth-context.tsx    # Authentication context
├── hooks/                  # Custom React hooks
│   ├── use-local-storage.ts # Local storage hook
│   └── use-api.ts          # API call hook with loading states
├── lib/                    # Utility functions and helpers
│   ├── db.ts               # Prisma database connection
│   ├── supabase.ts         # Supabase client configuration
│   └── utils.ts            # Common utility functions
├── schemas/                # Zod validation schemas
│   ├── user.ts             # User-related schemas
│   └── task.ts             # Task-related schemas
├── services/               # API and data services
│   ├── apis/               # Axios client wrappers
│   ├── external/           # External services
│   ├── repositories/       # Data access layer
│   └── internal/           # Internal services
├── types/                  # TypeScript type definitions
│   └── supabase.ts         # Generated Supabase types
├── utils/                  # Common utilities
└── middleware.ts           # Next.js middleware for auth

supabase/                   # Supabase configuration and development
├── config.toml             # Supabase local development config
├── seed.sql                # Database seed data
├── migrations/             # Database migrations
│   └── 20240101000000_initial_schema.sql
└── functions/              # Supabase Edge Functions
    └── hello-world/        # Example edge function
        └── index.ts
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Authentication:** Clerk
- **Database:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **Validation:** Zod
- **UI Components:** Radix UI primitives
- **State Management:** React Context + Custom Hooks
- **Forms:** React Hook Form + Zod resolvers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- A Clerk account and application

### 1. Clone and Install

```bash
git clone <repository-url>
cd standard-practices
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/app/overview
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/app/overview

# Database
DATABASE_URL="postgresql://username:password@hostname:port/database"

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

#### Option A: Using Remote Supabase (Production)

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Prisma Studio
npm run db:studio
```

#### Option B: Using Local Supabase (Development)

```bash
# Start local Supabase services
npm run supabase:start

# Generate TypeScript types from your schema
npm run types:generate

# Reset and seed the database
npm run supabase:reset

# Check Supabase services status
npm run supabase:status
```

This will start:

- PostgreSQL Database on `http://localhost:54322`
- API Server on `http://localhost:54321`
- Studio (Database UI) on `http://localhost:54323`
- Inbucket (Email testing) on `http://localhost:54324`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Learning Examples

### 1. Authentication with Clerk

- **Setup:** Middleware configuration in `src/middleware.ts`
- **Components:** Pre-built sign-in/sign-up pages
- **Context:** Custom auth context wrapping Clerk hooks
- **Protection:** Route protection for `/app/*` paths

### 2. Database with Prisma + Supabase

- **Schema:** Type-safe models in `prisma/schema.prisma`
- **Connection:** Singleton pattern in `src/lib/db.ts`
- **Types:** Generated Prisma types + Supabase types
- **Validation:** Zod schemas matching Prisma models
- **Local Development:** Full Supabase CLI setup with migrations
- **Row Level Security:** Example RLS policies in `supabase/seed.sql`
- **Edge Functions:** Example serverless function in `supabase/functions/`
- **Real-time:** Configured for real-time subscriptions
- **Storage:** File upload capabilities configured

### 3. Component Architecture (Atomic Design)

**Atoms (Basic UI Elements):**

- `Button` - With variants using class-variance-authority
- `Input` - Styled input with forwardRef
- `Card` - Flexible card components

**Molecules (Combined Atoms):**

- Form fields combining Input + Label
- Loading states with different loaders

**Organisms (Complex Components):**

- Navigation with active states
- Dashboard cards with stats
- User profile sections

### 4. Custom Hooks

**`useLocalStorage`:**

```typescript
const [value, setValue] = useLocalStorage('key', defaultValue);
```

**`useApi`:**

```typescript
const { data, loading, error, execute } = useApi(apiFunction);
```

**`useAuth`:**

```typescript
const { user, isLoading, isSignedIn } = useAuth();
```

### 5. Loading States & UX

- **Spinner Loader:** For general loading states
- **Dots Loader:** For button loading states
- **Skeleton Loader:** For content placeholders
- **Progress Loader:** For progress indication
- **Loading Screen:** For full-page loading

### 6. Form Validation with Zod

```typescript
// Schema definition
const userSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
});

// Usage with React Hook Form
const form = useForm({
  resolver: zodResolver(userSchema),
});
```

## 🎯 Best Practices Demonstrated

### 1. **File Organization**

- Clear separation of concerns
- Consistent naming conventions
- Logical folder structure

### 2. **Type Safety**

- TypeScript throughout
- Zod for runtime validation
- Prisma for database types

### 3. **Component Design**

- Reusable and composable
- Proper prop interfaces
- Forward refs where appropriate

### 4. **State Management**

- Context for global state
- Custom hooks for logic
- Local state for UI

### 5. **Error Handling**

- Try-catch in async operations
- User-friendly error messages
- Loading and error states

### 6. **Performance**

- Dynamic imports where beneficial
- Optimized images
- Minimal re-renders

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

1. Build the application: `npm run build`
2. Set environment variables in your hosting platform
3. Deploy the `.next` folder

## 📝 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database (Prisma)

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

### Supabase Local Development

- `npm run supabase:start` - Start local Supabase services
- `npm run supabase:stop` - Stop local Supabase services
- `npm run supabase:status` - Check status of local services
- `npm run supabase:reset` - Reset and reseed local database
- `npm run supabase:seed` - Run seed data only
- `npm run types:generate` - Generate TypeScript types from Supabase schema

## 🤝 Contributing

This is a demo project for educational purposes. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use it as a reference for your own projects.

## 🆘 Support

If you have questions about the patterns or implementations shown in this project, please:

1. Check the code comments
2. Review the component examples
3. Refer to the official documentation of each technology used

---

**Happy coding! 🚀**
