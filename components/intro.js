import { CMS_NAME } from "../lib/constants";
import cn from "classnames";
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

export default function Intro() {
  return (
    <>
      <nav className="navbar sticky-top  navbar-expand-md navbar-light  bg-light">
        <div className="navbar-collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/archive">
                Archive
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#myAlert">
                Links
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://twitter.com/gabrielec?ref=blog"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.facebook.com/gabriele.castellani"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.instagram.com/gab_404"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.github.com/gabrielecastellani"
              >
                <FaGithub />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        style={{
          backgroundImage: "url('/assets/arte.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex-col md:flex-row flex items-center md:justify-between mt-0 mb-16 md:mb-12"
      >
        <h1
          style={{ backgroundImage: "/assets/arte.png" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
        >
          Blog.
        </h1>
      </section>
    </>
  );
}
