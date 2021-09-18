export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="d-flex justify-content-between">
          <div className={`footer__shortly`}>Shortly</div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="footer-col">
              <div className="footer-sub-head">Features</div>
              <div className="footer-item">Link Shortening</div>
              <div className="footer-item"> Branded Links</div>
              <div className="footer-item">Analytics</div>
            </div>
            <div className="footer-col">
              <div className="footer-sub-head">Resources</div>
              <div className="footer-item">Blog</div>
              <div className="footer-item">Developers</div>
              <div className="footer-item">Support</div>
            </div>
            <div className="footer-col">
              <div className="footer-sub-head">Company</div>
              <div className="footer-item">About</div>
              <div className="footer-item">Our Team</div>
              <div className="footer-item">Careers</div>
              <div className="footer-item">Contact</div>
            </div>

            <div className="footer-col footer-icon">
              <img src="/images/icon-facebook.svg" />
              <img src="/images/icon-twitter.svg" />
              <img src="/images/icon-pinterest.svg" />
              <img src="/images/icon-instagram.svg" />
            </div>
          </div>
        </div>
      </footer>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Yusuf Halim</a>.
      </div>
    </>
  );
}
