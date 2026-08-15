function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-bottom">

        <div id="footer-copyright">
          <span>
            © Copyright {new Date().getFullYear()} - The Next Generation
          </span>
        </div>

        <div id="social-icons" aria-label="Social media links">

          <a
            href="https://www.instagram.com/thenextgen4040/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/chandan-gupta-1b6545367/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://wa.me/918130606117"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;