import { FaChartBar, FaTools, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import "../fonts/fonts.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center my-12 text-center poppins-regular">
        <h1 className="text-4xl lg:text-6xl font-bold text-emerald-900 mb-4">
          Welcome to LinkBytes
        </h1>
        <h3 className="text-lg lg:text-xl text-gray-600">
          Your ultimate link management solution
        </h3>
      </div>

      {/* Features Section */}
      <div className="mt-16 px-6 w-full max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-8 text-center">
          Discover Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaTools className="text-emerald-700 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Customization
            </h3>
            <p className="text-gray-600">
              Customize your links to align with your brand identity
              effortlessly.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaShieldAlt className="text-emerald-700 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Security
            </h3>
            <p className="text-gray-600">
              Trust in our secure platform to keep your data and links
              protected.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaLightbulb className="text-emerald-700 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              Experience cutting-edge tools designed to enhance your online
              journey.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 px-6 w-full max-w-4xl text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600 italic mb-4">
              "LinkBytes has transformed the way I manage my online presence.
              The analytics are top-notch!"
            </p>
            <h3 className="text-emerald-700 font-semibold">- Alex D.</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-600 italic mb-4">
              "I love the customization options. It makes my links look so
              professional and branded."
            </p>
            <h3 className="text-emerald-700 font-semibold">- Sarah K.</h3>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 px-6 w-full max-w-3xl text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-6">
          Ready to Simplify Your Links?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Join thousands of users who trust LinkBytes for their link management
          needs. Sign up today and transform the way you manage your online
          presence.
        </p>
        <Link href="/shorten">
          <button className="bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-800 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 py-8 bg-emerald-950 text-white w-full text-center">
        <p className="text-sm">&copy; 2024 LinkBytes. All rights reserved.</p>
      </footer>
    </main>
  );
}
