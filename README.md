# Calm Care Landing Page

A beautiful, conversion-optimized landing page for the Calm Care voice-powered parenting assistant app with integrated Stripe payments.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 💳 Stripe payment integration for $4.99 one-time purchase
- 📱 Mobile-optimized layout
- ✨ Smooth animations and hover effects
- 🔒 Secure payment processing
- 📧 Customer email collection
- 🎯 Conversion-focused design with testimonials and features

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Stripe

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the Stripe Dashboard
3. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Add your Stripe keys to `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_your_actual_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

### 3. Update App Store Links

In `src/app/success/page.tsx`, update the download links:

```typescript
const downloadLinks = {
  ios: 'https://apps.apple.com/app/calm-care/id123456789', // Your actual App Store link
  android: 'https://play.google.com/store/apps/details?id=com.calmcarevoice.app', // Your actual Play Store link
};
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Colors and Branding
- Update colors in `tailwind.config.js`
- Replace the microphone icon with your app logo
- Modify the color scheme in the landing page components

### Content
- Update testimonials in `src/app/page.tsx`
- Modify features and descriptions
- Change pricing and product details

### Payment Flow
- Customize success page messaging
- Add email automation (consider using services like SendGrid)
- Implement analytics tracking

## Important Notes

- Make sure to use your production Stripe keys for live payments
- Test payments thoroughly before going live
- Set up proper error handling and logging
- Consider adding analytics (Google Analytics, Mixpanel, etc.)
- Implement proper SEO optimization
- Add a privacy policy and terms of service

## Support

For questions about the landing page setup, create an issue in this repository.

For Stripe-related questions, refer to the [Stripe documentation](https://stripe.com/docs).

## License

This project is licensed under the MIT License.
