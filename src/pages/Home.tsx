import { Target, Briefcase, TrendingUp, Shield, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/constant";

const jobCategories = [
  { title: 'Software Development', count: '2,534', icon: '💻' },
  { title: 'Data Science', count: '1,832', icon: '📊' },
  { title: 'Product Management', count: '943', icon: '🎯' },
  { title: 'UI/UX Design', count: '1,504', icon: '🎨' },
  { title: 'Marketing', count: '2,104', icon: '📱' },
  { title: 'Sales', count: '1,823', icon: '💰' },
  { title: 'Customer Support', count: '1,402', icon: '🤝' },
  { title: 'Human Resources', count: '892', icon: '👥' }
];

const features = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: 'Smart Job Matching',
    description: 'AI-powered matching system connects you with perfect opportunities.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    title: 'Top Companies',
    description: 'Partner with Fortune 500 companies and innovative startups.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: 'Career Growth',
    description: 'Access mentorship, courses, and career advancement resources.'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: 'Secure Platform',
    description: 'Enterprise-grade security protecting your data and privacy.'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-400/20" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Job in Tech
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Connect with leading tech companies and discover opportunities that match your skills. Join thousands of professionals advancing their careers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={ROUTES.JOBS}>
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  Search Jobs <Search className="w-5 h-5" />
                </button></Link>
              <button className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
            <p className="text-xl text-gray-600">Empowering your career journey with cutting-edge features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-xl text-gray-600">Find opportunities in trending industries</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category) => (
              <Link key={category.title} to={`${ROUTES.JOBS}?category=${encodeURIComponent(category.title)}`}>
                <div
                  className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-sm text-gray-500">{category.count} jobs</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Jobs <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've found their dream jobs through our platform.
          </p>
          <Link to={ROUTES.JOBS}>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home