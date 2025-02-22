import "./Footer.css";
import githubLogo from "../../assets/github.png";

function Footer() {
  return (
    <section className="footer-container">
      <div className="text-container">
        <article className="info-container">
          <p>Built with ❤️ by Ironhack students:</p>
          <div className="social-info">
            <p>Dani Di Donato</p>
            <p>Nigel Ferreres</p>
            <p>Piet-Hein Schouten</p>
          </div>
        </article>

        <article className="github-repositories">
          <div className="repository-row">
            <div className="repository-column">
              <p>Frontend repository:</p>
              <a
                href="https://github.com/didonatodani/ironhub-front"
                target="_blank"
              >
                <img src={githubLogo} alt="github logo" />
              </a>
            </div>
            <div className="repository-column">
              <p>Backend repository:</p>
              <a
                href="https://github.com/phsworks/IronHub-Backend"
                target="_blank"
              >
                <img src={githubLogo} alt="github logo" />
              </a>
            </div>
          </div>
        </article>
      </div>
      <small>© 2024 IronHub. All rights reserved.</small>
    </section>
  );
}

export default Footer;
