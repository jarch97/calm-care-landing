'use client';

import { useState } from 'react';
import { Mic, Baby, Clock, Heart, Check, Star, ArrowRight } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const features = [
  {
    icon: Mic,
    title: "Voice Commands",
    description: "Log feedings, diaper changes, and sleep times hands-free with natural voice commands."
  },
  {
    icon: Baby,
    title: "Smart Tracking",
    description: "Automatically tracks patterns and provides insights into your baby's daily routine."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant feedback and see your baby's status at a glance with live updates."
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Never forget important caregiving details with reliable, automatic logging."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "New Mom",
    content: "This app is a lifesaver! Being able to log feedings while holding my baby has made everything so much easier.",
    rating: 5
  },
  {
    name: "Mike D.",
    role: "Dad of Twins",
    content: "Perfect for busy parents. The voice commands work flawlessly and save so much time.",
    rating: 5
  },
  {
    name: "Jessica L.",
    role: "Working Mom",
    content: "Finally, an app that understands what parents actually need. Simple, effective, and reliable.",
    rating: 5
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Error:', error);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Calm Care</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Hands-Free
                <span className="text-blue-600 block">Parenting</span>
                Made Simple
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Track your baby&apos;s feeding, sleep, and diaper changes using just your voice.
                Perfect for busy parents who need their hands free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handlePurchase}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <span>Get Calm Care - $4.99</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>One-time purchase</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No monthly fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Instant download</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-blue-600 rounded-lg p-6 text-center mb-6">
                  <Mic className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-white text-lg font-semibold">&ldquo;Log a 4 ounce bottle&rdquo;</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                    <span className="text-green-800">✓ Feeding logged</span>
                    <span className="text-sm text-green-600">2:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                    <span className="text-blue-800">Last fed: 3 hours ago</span>
                    <span className="text-sm text-blue-600">4 oz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Parents Love Calm Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed by parents, for parents. Every feature is built to make your life easier during those precious early months.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Thousands of Parents</h2>
            <p className="text-xl text-gray-600">See what other parents are saying about Calm Care</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, One-Time Pricing</h2>
          <p className="text-xl text-blue-100 mb-12">No subscriptions, no hidden fees. Pay once, use forever.</p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">$4.99</div>
              <div className="text-gray-600">One-time purchase</div>
            </div>
            
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Unlimited voice commands</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Complete baby tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>iOS & Android support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Lifetime updates</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>No ads, ever</span>
              </li>
            </ul>
            
            <button
              onClick={handlePurchase}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Download Calm Care Now'}
            </button>
            
            <div className="text-sm text-gray-500 mt-4">
              Secure payment powered by Stripe
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Calm Care</span>
              </div>
              <p className="text-gray-400">
                The voice-powered parenting assistant that makes baby care effortless.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Calm Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
