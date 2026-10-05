import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-black' : 'text-gray-500 hover:text-black'
    }`

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Dualsided
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/work" className={navLinkClass}>
              Work
            </NavLink>
            <NavLink to="/shopify-apps" className={navLinkClass}>
              Shopify Apps
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              <NavLink
                to="/work"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </NavLink>
              <NavLink
                to="/shopify-apps"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shopify Apps
              </NavLink>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Shopify Partner & Certified Expert since 2013
          </p>
          <p className="text-sm text-gray-500">
            San Diego, California
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
