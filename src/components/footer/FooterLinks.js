import React from "react";
import "./FooterLinks.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logoImg from "../../assets/zeepzee.png";
import { Link, NavLink } from "react-router-dom";
const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <a href="https://www.facebook.com/Ssouvik.biswas?mibextid=ZbWKwL">
              <FaFacebook className="i" />
            </a>
            <a href="https://www.instagram.com/_souvikbiswas?igsh=d2U3MjNibWV5ajJ1">
              
              <FaInstagram className="i" />
            </a>
          </div>
          
          <h2>Let's Talk</h2>
          <a
            href="https://wa.me/<916290716509>?text=I%20am%20interested%20in%20your%20photography%20services."
            className="btn btn-dark"
            target="_blank"
            // rel="noopener noreferrer"
          >
            Contact Now
          </a>
        </div>
      </section>

      <section className="footer-section">
        <div className="container footer">
          {/* <div className="footer-logo">
                        <img src={logoImg} alt="logo" />
                    </div> */}
          <div className="footer-menu">
            <p className="link-heading">Contact No : 6290716509</p>
            <p className="link-heading">Mail Us : souvikhlr7@gmail.com</p>
            {/* <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul> */}
          </div>

          {/* <div className="footer-menu">
                        <p className="link-heading">
                            Resourses
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div>
                
                    <div className="footer-menu">
                        <p className="link-heading">
                            Conpany
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div>
                    
                    <div className="footer-menu">
                        <p className="link-heading">
                            Partners
                        </p>
                        <ul className="nav-ul footer-links">
                            <li>
                                <a href="#home">Link Shortening</a>
                            </li>
                            <li>
                                <a href="#home">Branded Links</a>
                            </li>
                            <li>
                                <a href="#home">Analytics</a>
                            </li>
                            <li>
                                <a href="#home">Contact</a>
                            </li>
                        </ul>

                    </div> */}
        </div>
      </section>
    </>
  );
};
export default FooterLinks;
