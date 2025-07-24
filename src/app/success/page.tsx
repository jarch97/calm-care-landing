'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Download, Smartphone, Mail } from 'lucide-react';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    if (sessionId) {
      // Fetch session details to get customer email
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          if (data.customer_email) {
            setCustomerEmail(data.customer_email);
          }
        })
        .catch(err => console.error('Error fetching session:', err));
    }
  }, [sessionId]);

  const downloadLinks = {
    ios: 'https://apps.apple.com/app/calm-care/id123456789', // Replace with actual App Store link
    android: 'https://play.google.com/store/apps/details?id=com.calmcarevoice.app', // Replace with actual Play Store link
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for purchasing Calm Care! Your voice-powered parenting assistant is ready to download.
          </p>

          {/* Customer Info */}
          {customerEmail && (
            <div className="bg-blue-50 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-blue-800">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Confirmation sent to: {customerEmail}</span>
              </div>
            </div>
          )}

          {/* Download Links */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Download Your App
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* iOS Download */}
              <a
                href={downloadLinks.ios}
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              {/* Android Download */}
              <a
                href={downloadLinks.android}
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-gray-50 rounded-lg p-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Getting Started
            </h3>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                <span>Download the app on your device using the links above</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                <span>Allow microphone permissions when prompted</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                <span>Set up your baby's profile and start using voice commands!</span>
              </li>
            </ol>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@calmcare.app" className="text-blue-600 hover:underline">
                support@calmcare.app
              </a>
            </p>
            <div className="text-xs text-gray-400">
              Transaction ID: {sessionId}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
