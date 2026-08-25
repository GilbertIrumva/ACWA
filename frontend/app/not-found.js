import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 bg-[#F0FDF4]">
      <Container size="small">
        <div className="bg-[#D5EBD9] p-8 sm:p-12 rounded-3xl border border-[#16A34A]/15 text-center space-y-6 shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#16A34A] text-[#F0FDF4] flex items-center justify-center mx-auto shadow-md">
            <Compass className="w-8 h-8 text-[#2E7D32]" />
          </div>

          <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider block">404 Error</span>
          <h1 className="font-serif font-bold text-4xl text-[#171A17]">Page Not Found</h1>
          <p className="text-sm text-[#4A5550] max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has been moved. Explore our main navigation to find what you need.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button href="/" variant="primary" size="md">
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
