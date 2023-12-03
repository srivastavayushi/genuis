# Steps

### 1. Environment Setup

- Setup project using [shadcn.ui](https://ui.shadcn.com/docs/installation/next) instructions.
- Reason behind using shadcn : Shadcn installs UI components code inside @components/ui folder which gives us ownership to change variants and other properties related. This feature is not found in other libraries like Material UI or Chakra UI.

### 2. Folder Setup

- (dashboard) (routes) : All routes for our platform such as : image generation, code generation, video generation, dashboard and settings
- (landing) : Landing Page route (unprotected)

### 3. Clerk Authentication

- Login on [Clerk Dashboard](https://dashboard.clerk.com/)
- `</ClerkProvider>` : This makes the active session and user context accessible anywhere within the app.

### 4. Sidebar

- cn : especially made library which uses tailwind merge and clsx to ensure there is a proper way to additional dynamic classnames to tailwind elements, means its going to override them if they already exist

### 10. Stripe Integration

Steps :

1. Create a stripe account and then a new business
2. Copy `API keys for developers` and paste it in .env file
3. Run `npm i stripe` on terminal
4. Make a stripe function inside lib/stripe.ts with apiVersion
5. Make a prisma model for userSubscription -> npx prisma generate -> npx prisma db push
6. Create a route inside app/api/stripe that is going to create subscriptions
7. Create an absoluteUrl path util : stripe API route is going to take a return URL and it cannot just be /settings or /dashboard (relative URLs), it needs to be an absolute URL because stripe does not know what application you are running or where its hosted.
8. Find current user subscription
