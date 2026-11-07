# Imagifix Pro

Imagifix Pro is a modern AI-powered image transformation and editing platform built with Next.js, Clerk, Stripe, MongoDB, and Cloudinary. The application allows authenticated users to upload images, apply AI-driven edits, save their results, browse their transformation history, and purchase additional credits to continue using premium features.

The project is designed as a polished SaaS-style product with a responsive UI, secure user authentication, payments, and an image gallery experience.

## Overview

Imagifix Pro provides a streamlined workflow for image enhancement and creative editing:

- Upload or select an image
- Choose a transformation type
- Configure the editing parameters
- Apply AI-powered changes
- Save the output to your profile/gallery
- Browse past edits and manage credit usage

This makes it suitable for content creators, digital marketers, designers, and anyone who needs quick AI-based image editing without leaving a web app.

## Main Features

### 1. AI Image Transformations
The platform supports multiple transformation workflows:

- Image Restore
- Background Remove
- Generative Fill
- Object Remove
- Object Recolor

Each transformation is configured through a dedicated form and can be applied with a single click. The app handles selected image dimensions, prompt-driven editing, aspect ratio presets, and transformation configuration updates.

### 2. User Authentication and Profiles
Authentication is powered by Clerk, allowing users to:

- Sign up and sign in securely
- Manage session-based access
- Store public user profile data
- Track transformation activity and credit balance

User data is synchronized with Clerk webhooks and stored in MongoDB.

### 3. Credit-Based Usage System
Imagifix Pro uses a simple and effective credit system:

- Users start with a credit balance
- Each transformation consumes a credit unit
- Insufficient credit states are handled gracefully
- Users can purchase more credits via Stripe checkout

This allows the application to behave like a lightweight paid SaaS product without requiring a complex subscription management system.

### 4. Stripe Payments and Credit Packages
Users can buy credits through Stripe checkout using predefined plans:

- Free plan
- Pro package
- Premium package

The application creates Stripe checkout sessions, captures product metadata, and stores transaction history in MongoDB for auditability.

### 5. Image Gallery and History
Users can:

- View recently transformed images
- Search transformed content
- Paginate across image collections
- Open detailed transformation records
- Manage previous edits from their profile

The gallery is built around a reusable Collection component and supports filtering and pagination.

### 6. Cloudinary-Based Media Management
Cloudinary is used for image hosting, transformation previews, and media processing. This enables:

- Fast asset delivery
- Cloud-based transformation rendering
- Public image IDs and secure URLs
- Optimized image rendering with Next.js integrations

### 7. Responsive, Modern UI
The UI is built with:

- Next.js App Router
- React 19
- Tailwind CSS
- shadcn/ui-inspired reusable components

This gives the app a clean, modern look that works across desktop and mobile devices.

## Technology Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components

### Backend / Data
- MongoDB
- Mongoose
- Next.js Server Actions
- Cloudinary

### Authentication and Payments
- Clerk
- Stripe
- Svix (webhook verification)

### Additional Libraries
- zod for validation
- react-hook-form for form handling
- next-cloudinary for image rendering
- lucide-react for icons

## Project Structure

```bash
imagifix-pro/
├── app/
│   ├── (auth)/
│   ├── (root)/
│   ├── api/
│   └── globals.css
├── components/
│   ├── shared/
│   └── ui/
├── constants/
├── lib/
│   ├── actions/
│   ├── database/
│   └── utils.ts
├── public/
├── types/
├── .eslintrc.json
├── components.json
├── middleware.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Core Functional Flow

### User journey
1. User signs in via Clerk.
2. User uploads an image and chooses an edit type.
3. The app previews the generated transformation configuration.
4. The user applies the transformation, which deducts one credit.
5. The edited image is saved and can be reviewed in the gallery or profile.
6. If the account runs out of credits, the user can buy additional packages via Stripe.

### Payment flow
1. User selects a package from the credits page.
2. A Stripe checkout session is created.
3. Payment succeeds and a Stripe webhook fires.
4. A transaction record is created in MongoDB.
5. The user's credit balance is updated automatically.

### User sync flow
1. Clerk sends a webhook when a user is created, updated, or deleted.
2. The app processes the event.
3. The corresponding MongoDB user document is created, updated, or deleted.

## Key Application Pages

### Home
Displays a gallery of recent transformations with search support and pagination.

### Profile
Shows user credit balance and total image manipulations performed.

### Credits
Lists pricing plans and integrates Stripe-based credit purchase.

### Transformation Editor
Provides the editing form for each transformation type and a preview section for the transformed result.

## Configuration and Environment Variables

Create a `.env.local` file in the project root with the following values:

```bash
# Next.js / App
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# MongoDB
MONGODB_URL=mongodb://localhost:27017/imagifix-pro

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
WEBHOOK_SECRET=your_clerk_webhook_secret

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create your environment file as shown above.
4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser at:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build production app
npm run start   # Start production server
npm run lint    # Run lint checks
```

## Database and Models

The project stores data in MongoDB using Mongoose models for:

- Users
- Images
- Transactions

These models support profile tracking, image history, and payment records.

## Security Features

- Clerk-based authentication
- Webhook verification using Svix
- Secure Stripe event handling
- Protected routes and authenticated user access
- MongoDB connection management with single reusable connection caching

## Notes on Current Implementation

This project is built as a full-stack SaaS demo with real integrations for authentication, digital payments, and media transformation. It focuses on a polished UX and practical business logic rather than a generic static landing page.

## Future Enhancements

Potential future improvements include:

- Multi-user team workspaces
- Advanced AI model options
- Batch image processing
- Download/export improvements
- Analytics dashboard
- Admin moderation and management tools

## License

This project is currently distributed without a formal license declaration. If you plan to use or distribute it publicly, consider adding an appropriate open-source license such as MIT.

## Conclusion

Imagifix Pro is a complete image editing and monetization platform prototype that demonstrates the integration of AI transformation tools, secure authentication, payments, and a modern web application architecture. It is an ideal foundation for building a production-ready image enhancement SaaS product.
