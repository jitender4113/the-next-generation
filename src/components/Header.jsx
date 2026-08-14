import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigation from '../data/navigation.js';
import Hero_logo from '../assets/logo.webp';



/* ---------------------------------------------------------------------- */
/* Desktop nav item — dropdowns open on hover/focus via pure CSS, so       */
/* there's no flicker or stale JS state. Works for 1 or 2 levels deep.    */
/* ---------------------------------------------------------------------- */
function DesktopNavItem({ item, isActive }) {
  const hasChildren = !!item.children;

  return (
    <li className={`kcr-nav__item${hasChildren ? ' has-children' : ''}`}>
      <Link to={item.path} className={`kcr-nav__link${isActive(item) ? ' is-active' : ''}`}>
        {item.label}
        {hasChildren && <i className="fa fa-angle-down kcr-nav__caret" aria-hidden="true"></i>}
      </Link>

      {hasChildren && (
        <ul className="kcr-nav__dropdown">
          {item.children.map((child) => (
            <DesktopNavItem key={child.path} item={child} isActive={isActive} />
          ))}
        </ul>
      )}
    </li>
  );
}

/* ---------------------------------------------------------------------- */
/* Mobile nav item — plain accordion, own open/closed state, tap the      */
/* caret to expand, tap the label to navigate.                            */
/* ---------------------------------------------------------------------- */
function MobileNavItem({ item, isActive, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children;

  return (
    <li className="kcr-mobile__item">
      <div className="kcr-mobile__row">
        <Link
          to={item.path}
          className={`kcr-mobile__link${isActive(item) ? ' is-active' : ''}`}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            className={`kcr-mobile__caret${open ? ' is-open' : ''}`}
            aria-label={`Toggle ${item.label} submenu`}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
        )}
      </div>

      {hasChildren && (
        <ul className={`kcr-mobile__submenu${open ? ' is-open' : ''}`}>
          {item.children.map((child) => (
            <MobileNavItem key={child.path} item={child} isActive={isActive} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Header({ onOpenQuote, onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    return (
      location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
    );
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    onOpenQuote();
    setMobileOpen(false);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onOpenSearch();
    setMobileOpen(false);
  };

  return (
    <header
      id="header"
      ref={headerRef}
      className={`kcr-header${scrolled ? ' is-scrolled' : ''}${mobileOpen ? ' menu-is-open' : ''}`}
    >
      <style>{`
        .kcr-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid rgba(53, 44, 102, 0.08);
          transition: box-shadow 0.25s ease, height 0.25s ease;
        }

        .kcr-header.is-scrolled {
          box-shadow: 0 4px 18px rgba(30, 20, 70, 0.09);
        }

        .kcr-header__inner {
          max-width: 1212px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: height 0.25s ease;
        }

        .kcr-header.is-scrolled .kcr-header__inner {
          height: 78px;
        }

        /* Logo */
        .kcr-header__logo {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          line-height: 0;
          padding: 4px 0;
          box-sizing: border-box;
        }

        .kcr-header__logo img {
          height: 82px;
          width: auto;
          max-height: 92px;
          display: block;
          object-fit: contain;
          transition: height 0.25s ease;
        }

        .kcr-header.is-scrolled .kcr-header__logo img {
          height: 46px;
        }

        /* Desktop nav */
        .kcr-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
        }

        .kcr-nav__list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2px;
          margin: 0;
          padding: 0;
        }

        .kcr-nav__item {
          position: relative;
        }

        .kcr-nav__link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          font-family: 'Libre Franklin', Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #352c66;
          border-radius: 4px;
          white-space: nowrap;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .kcr-nav__link:hover,
        .kcr-nav__item.has-children:hover > .kcr-nav__link,
        .kcr-nav__item.has-children:focus-within > .kcr-nav__link {
          color: #1d70ba;
          background: rgba(19, 163, 213, 0.08);
        }

        .kcr-nav__link.is-active {
          color: #13a3d5;
        }

        .kcr-nav__caret {
          font-size: 12px;
          transition: transform 0.2s ease;
        }

        .kcr-nav__item.has-children:hover > .kcr-nav__link .kcr-nav__caret,
        .kcr-nav__item.has-children:focus-within > .kcr-nav__link .kcr-nav__caret {
          transform: rotate(180deg);
        }

        /* Dropdown panels (desktop) */
        .kcr-nav__dropdown {
          list-style: none;
          margin: 0;
          padding: 8px;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 280px;
          background: #352c66;
          border-radius: 8px;
          box-shadow: 0 16px 40px rgba(20, 14, 50, 0.22);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 40;
        }

        .kcr-nav__item.has-children:hover > .kcr-nav__dropdown,
        .kcr-nav__item.has-children:focus-within > .kcr-nav__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .kcr-nav__dropdown .kcr-nav__dropdown {
          top: -8px;
          left: 100%;
          margin-left: 8px;
        }

        .kcr-nav__dropdown .kcr-nav__item {
          position: relative;
        }

        .kcr-nav__dropdown .kcr-nav__link {
          color: rgba(255, 255, 255, 0.85);
          text-transform: none;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.2px;
          padding: 11px 14px;
          border-radius: 6px;
          justify-content: space-between;
        }

        .kcr-nav__dropdown .kcr-nav__link:hover,
        .kcr-nav__dropdown .kcr-nav__item.has-children:hover > .kcr-nav__link,
        .kcr-nav__dropdown .kcr-nav__item.has-children:focus-within > .kcr-nav__link {
          color: #ffffff;
          background: #13a3d5;
        }

        .kcr-nav__dropdown .kcr-nav__link.is-active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
        }

        .kcr-nav__dropdown .kcr-nav__caret {
          transform: rotate(-90deg);
        }

        .kcr-nav__dropdown .kcr-nav__item.has-children:hover > .kcr-nav__link .kcr-nav__caret,
        .kcr-nav__dropdown .kcr-nav__item.has-children:focus-within > .kcr-nav__link .kcr-nav__caret {
          transform: rotate(-90deg);
        }

        /* Actions: quote button + search */
        .kcr-nav__actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 8px;
          border-left: 1px solid rgba(53, 44, 102, 0.12);
        }

        .kcr-nav__quote {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          background: #01923e;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 11px 22px;
          border-radius: 30px;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .kcr-nav__quote:hover {
          background: #017a33;
          transform: translateY(-1px);
        }

        .kcr-nav__search {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(53, 44, 102, 0.25);
          background: transparent;
          color: #352c66;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .kcr-nav__search:hover {
          background: #352c66;
          border-color: #352c66;
          color: #ffffff;
        }

        /* Hamburger (mobile) */
        .kcr-header__burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          border: none;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
        }

        .kcr-header__burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #352c66;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .menu-is-open .kcr-header__burger span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .menu-is-open .kcr-header__burger span:nth-child(2) {
          opacity: 0;
        }

        .menu-is-open .kcr-header__burger span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile panel */
        .kcr-mobile {
          display: none;
        }

        @media screen and (max-width: 1024px) {
          .kcr-header__inner {
            height: 76px;
          }

          .kcr-header.is-scrolled .kcr-header__inner {
            height: 68px;
          }

          // .kcr-header__logo img {
          //   height: 44px;
          // }

          // .kcr-header.is-scrolled .kcr-header__logo img {
          //   height: 40px;
          // }

          .kcr-header__logo {
            padding: 3px 0;
          }

          .kcr-header__logo img {
            height: 64px;
            width: auto;
            max-width: 280px;
            object-fit: contain;
          }

          .kcr-header.is-scrolled .kcr-header__logo img {
            height: 50px;
          }

          .kcr-nav {
            display: none;
          }

          .kcr-header__burger {
            display: flex;
          }

          .kcr-mobile {
            display: block;
            position: fixed;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            background: #352c66;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            transform: translateX(-100%);
            transition: transform 0.28s ease;
            z-index: 900;
          }

          .menu-is-open .kcr-mobile {
            transform: translateX(0);
          }

          .kcr-mobile__list {
            list-style: none;
            margin: 0;
            padding: 8px 0 32px;
          }

          .kcr-mobile__item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .kcr-mobile__row {
            display: flex;
            align-items: stretch;
          }

          .kcr-mobile__link {
            flex: 1;
            padding: 16px 24px;
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.4px;
          }

          .kcr-mobile__link.is-active {
            color: #13a3d5;
          }

          .kcr-mobile__caret {
            width: 52px;
            border: none;
            background: transparent;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
          }

          .kcr-mobile__caret i {
            display: inline-block;
            transition: transform 0.2s ease;
          }

          .kcr-mobile__caret.is-open i {
            transform: rotate(180deg);
          }

          .kcr-mobile__submenu {
            list-style: none;
            margin: 0;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.15);
            transition: max-height 0.25s ease;
          }

          .kcr-mobile__submenu.is-open {
            max-height: 600px;
          }

          .kcr-mobile__submenu .kcr-mobile__link {
            padding: 13px 24px 13px 40px;
            font-size: 14px;
            font-weight: 500;
            text-transform: none;
            color: rgba(255, 255, 255, 0.85);
          }

          .kcr-mobile__submenu .kcr-mobile__submenu .kcr-mobile__link {
            padding-left: 56px;
          }

          .kcr-mobile__actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 20px 24px 32px;
          }

          .kcr-mobile__quote {
            display: block;
            text-align: center;
            background: #01923e;
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 14px;
            border-radius: 30px;
          }

          .kcr-mobile__search {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 14px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            cursor: pointer;
          }
        }

        @media screen and (max-width: 480px) {
          .kcr-header__inner {
            padding: 0 16px;
          }
        }
      `}</style>

      <div className="kcr-header__inner">
        <Link to="/" className="kcr-header__logo" aria-label="The Next Generation — Home">
          <img
            src={Hero_logo}
            alt="The Next Generation logo"
            width="300"
            height="179"
          />
        </Link>

        <nav className="kcr-nav" aria-label="Primary">
          <ul className="kcr-nav__list">
            {navigation.map((item) => (
              <DesktopNavItem key={item.path} item={item} isActive={isActive} />
            ))}
          </ul>

          <div className="kcr-nav__actions">
            <a
              href="#request-a-rate"
              id="request-a-rate-button"
              className="kcr-nav__quote"
              onClick={handleQuoteClick}
            >
              Get Instant Quote
            </a>
            <button
              type="button"
              id="main-search-button"
              className="kcr-nav__search"
              aria-label="Open search"
              onClick={handleSearchClick}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="kcr-header__burger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="kcr-mobile" aria-hidden={!mobileOpen}>
        <ul className="kcr-mobile__list">
          {navigation.map((item) => (
            <MobileNavItem
              key={item.path}
              item={item}
              isActive={isActive}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </ul>
        <div className="kcr-mobile__actions">
          <a href="#request-a-rate" className="kcr-mobile__quote" onClick={handleQuoteClick}>
            Get Instant Quote
          </a>
          <button type="button" className="kcr-mobile__search" onClick={handleSearchClick}>
            <i className="fa fa-search" aria-hidden="true"></i>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
