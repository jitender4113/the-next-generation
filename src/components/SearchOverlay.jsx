import { useEffect, useRef, useState } from 'react';

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://kcrindia.com/?s=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div id="search-overlay" className={open ? 'is-open' : ''}>
      <a
        href="#close"
        id="close-search-overlay"
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <div id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <p>Close</p>
        </div>
      </a>
      <form className="wp-search-form" onSubmit={handleSubmit}>
        <p>SEARCH SITE BY TYPING (ESC TO CLOSE)</p>
        <input
          ref={inputRef}
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Type and hit Enter"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchOverlay;
