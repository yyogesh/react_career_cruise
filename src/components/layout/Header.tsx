import { Link } from "react-router-dom"
import { ROUTES } from "../../config/constant"
import Button from "../common/Button/Button"

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 md:px-4 flex justify-between items-center">
      <Link
        to={ROUTES.HOME}
        className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
      >
        Career Curise Job Portal
      </Link>

      <nav className="flex items-center gap-4 md:gap-6">
        <Link
          to={ROUTES.JOBS}
          className="text-gray-800 font-medium px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-all"
        >
          Browse Jobs
        </Link>

        <Link to={ROUTES.LOGIN}>
          <Button variant="text">Sign In</Button>
        </Link>
        <Link to={ROUTES.REGISTER}>
          <Button>Sign Up</Button>
        </Link>
      </nav>
    </div>
  </header>
  )
}

export default Header