function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-bottom">
        <div id="footer-copyright">
          <span>© Copyright {new Date().getFullYear()} - The Next Generation</span>
        </div>
<div id="social-icons" style={{ marginRight: '60px' }}>          
          <a href="https://www.instagram.com/thenextgen4040/" target="_blank" rel="noreferrer" className="symbol-instagram" aria-label="Instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
