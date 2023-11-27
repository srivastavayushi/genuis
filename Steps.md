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
