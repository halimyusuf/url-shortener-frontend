import Image from "next/image";
/* eslint-disable jsx-a11y/alt-text */
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="d-flex justify-content-between">
          <div className={`footer-shortly`}>Shortly</div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="footer-col">
              <div className="footer-sub-head">Features</div>
              <div className="footer-item">
                <a href="#">Link Shortening </a>
              </div>
              <div className="footer-item">
                <a href="#"> Branded Links </a>
              </div>
              <div className="footer-item">
                <a href="#">Analytics </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-sub-head">Resources</div>
              <div className="footer-item">
                <a href="#">Blog </a>
              </div>
              <div className="footer-item">
                <a href="#">Developers </a>
              </div>
              <div className="footer-item">
                <a href="#">Support </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-sub-head">Company</div>
              <div className="footer-item">
                <a href="#">About </a>
              </div>
              <div className="footer-item">
                <a href="#">Our Team </a>
              </div>
              <div className="footer-item">
                <a href="#">Careers </a>
              </div>
              <div className="footer-item">
                <a href="#">Contact </a>
              </div>
            </div>

            <div className="footer-col footer-icon">
              <a href="#">
                <Image src="/images/icon-facebook.svg" width="23" height="23" />
                {/* <img src="/images/icon-facebook.svg" /> */}
              </a>
              <a href="#">
                <Image src="/images/icon-twitter.svg" width="23" height="23" />
                {/* <img src="/images/icon-twitter.svg" /> */}
              </a>
              <a href="#">
                <Image
                  src="/images/icon-pinterest.svg"
                  width="23"
                  height="23"
                />

                {/* <img src="/images/icon-pinterest.svg" /> */}
              </a>
              <a href="#">
                <Image
                  src="/images/icon-instagram.svg"
                  width="23"
                  height="23"
                />

                {/* <img src="/images/icon-instagram.svg" /> */}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/halimyusuf">Halim Yusuf</a>.
      </div>
    </>
  );
}
