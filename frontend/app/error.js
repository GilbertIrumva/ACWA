'use client';

import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('ACWA App Error:', error);
  }, [error]);

  return (
    <div className="py-24 bg-[#F0FDF4]">
      <Container size="small">
        <div className="bg-[#D5EBD9] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 text-center space-y-6 shadow-md">
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h2 className="font-serif font-bold text-3xl text-[#171A17]">Something went wrong</h2>
          <p className="text-sm text-[#4A5550] max-w-md mx-auto leading-relaxed">
            We encountered an unexpected issue while loading this page. Please try refreshing or return to the homepage.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => reset()} variant="primary" size="md">
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Try Again</span>
            </Button>
            <Button href="/" variant="secondary" size="md">
              Return to Homepage
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
