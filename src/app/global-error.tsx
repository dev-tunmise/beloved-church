'use client';

import Container from '@/app/_components/container';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          <Container>
            <div className="max-w-md mx-auto text-center py-16">
              <div className="mb-8">
                <svg
                  className="mx-auto h-16 w-16 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Application Error
              </h1>
              <p className="text-gray-600 mb-8">
                A critical error occurred. Please try refreshing the page.
              </p>
              <div className="space-y-4">
                <button
                  onClick={reset}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Try again
                </button>
                <Link
                  href="/"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
