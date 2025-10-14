import Container from '@/app/_components/container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-md mx-auto text-center py-16">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-purple-600 dark:text-purple-400">
              404
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Go back home
            </Link>
            <div className="flex justify-center space-x-4 mt-4">
              <Link
                href="/about"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/sermons"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                Sermons
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/contact"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
