import Image from "next/image";
import "../fonts/fonts.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center my-12 text-center poppins-regular">
        <h1 className="text-4xl lg:text-6xl font-bold text-emerald-900 mb-4">
          One of the Best Link Shorteners
        </h1>
        <h3 className="text-lg lg:text-xl text-gray-600">
          Available in the market
        </h3>
      </div>

      {/* Features Section */}
      <div className="mt-16 px-6 w-full max-w-5xl text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Fast
            </h3>
            <p className="text-gray-600">
              Shorten your links in seconds with lightning-fast processing.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Secure
            </h3>
            <p className="text-gray-600">
              Your links are safe with our advanced encryption methods.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Free
            </h3>
            <p className="text-gray-600">
              Enjoy our services at no cost with no hidden charges.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 py-8 bg-emerald-950 text-white w-full text-center">
        <p className="text-sm">&copy; 2024 LinkBytes. All rights reserved.</p>
      </footer>
    </main>
  );
}
