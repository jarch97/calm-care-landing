import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia',
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json(
      { error: 'Session ID is required' },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    return NextResponse.json({
      customer_email: session.customer_details?.email,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
    });
  } catch (err: unknown) {
    console.error('Error fetching session:', err);
    return NextResponse.json(
      { error: 'Error fetching session details' },
      { status: 500 }
    );
  }
}
