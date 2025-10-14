import Container from '@/app/_components/container';

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative">
            {/* Spinning loader */}
            <div className="w-16 h-16 border-4 border-purple-200 dark:border-purple-800 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 animate-pulse">
            Loading...
          </p>
        </div>
      </Container>
    </main>
  );
}
