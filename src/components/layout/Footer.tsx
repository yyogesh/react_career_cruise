import { Link } from "react-router-dom"
import { ROUTES } from "../../config/constant"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl mb-4 text-white">Job Portal</h3>
          <p className="text-gray-400 leading-relaxed">
            Find your dream job or hire the perfect candidate.
          </p>
        </div>

        <div>
          <h4 className="text-lg mb-4 text-gray-200">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <Link to={ROUTES.HOME} className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to={ROUTES.JOBS} className="text-gray-400 hover:text-white transition-colors">
              Browse Jobs
            </Link>
            <Link to={ROUTES.PROFILE} className="text-gray-400 hover:text-white transition-colors">
              Profile
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-lg mb-4 text-gray-200">Resources</h4>
          <nav className="flex flex-col space-y-2">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-lg mb-4 text-gray-200">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-4 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer