import { Link } from 'react-router';

export default function InternalServerError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-extrabold text-gray-900">500</h1>
        <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops! Something went wrong on our server.
        </p>
        <p className="mt-4 text-gray-600">
          We apologize for the inconvenience. Our team has been notified and is
          working to fix the issue.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="ml-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
