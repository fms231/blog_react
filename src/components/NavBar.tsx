import { useLocation, useNavigate } from 'react-router-dom'

import { navItems, siteContent } from '../data/content'

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="top-nav">
      <div className="brand">{siteContent.brandName}</div>
      <div className="top-links">
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)

          return (
            <button
              key={item.path}
              className={isActive ? 'is-active' : ''}
              onClick={() => navigate(item.path)}
              type="button"
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div className="top-actions">
        <input
          aria-label="Search"
          className="search"
          placeholder={siteContent.searchPlaceholder}
        />
        <button type="button" className="subscribe-btn">
          {siteContent.subscribeButtonText}
        </button>
      </div>
    </nav>
  )
}

export default NavBar