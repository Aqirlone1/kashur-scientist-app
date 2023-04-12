import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-super-container">
        {/* footer super container contains contacts,quick-links,socials,privacy and policy dont touch it */}
        <div className="footer-container">
          <div className="contact-list">
            <div className="footer-heading">Contact Us</div>
            <div>
              <br />
              <br />
              <ul>
                <div>
                  <li className="footer-text">
                    <Link to="m" className="router-link">
                      +91 7006 4 5 6 789
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="footer-text">
                    <Link to="m" className="router-link">
                      help@koshurscientist.in
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="quick-links">
            <div className="footer-heading">Quick Links</div>
            <br />
            <br />
            <div className="list-container">
              <div>
                <ul>
                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        Aash
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        {" "}
                        Amaad
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        Athwaas
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div>
                <ul>
                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        Library
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        About Us
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="footer-text">
                      <Link to="m" className="router-link">
                        Our team
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="footer-heading">Socials</div>
            <div className="icon-list">
              <br />
              <div className="icon-row">
                <div className="facebook">
                  <Link
                    to="https://www.facebook.com/officialkoshurscientist/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                    className="icon-link"
                  >
                    <FaFacebookSquare size={30} />
                  </Link>
                </div>

                <div className="facebook">
                  <Link
                    to="https://www.linkedin.com/company/koshur-scientist/"
                    className="icon-link"
                  >
                    {" "}
                    <FaLinkedin size={30} />
                  </Link>
                </div>

                <div className="facebook">
                  <Link
                    to="https://www.instagram.com/koshur_scientist/?igshid=YmMyMTA2M2Y%3D"
                    className="icon-link"
                  >
                    <FaInstagramSquare size={30} />
                  </Link>
                </div>
              </div>

              <div className="icon-row">
                <div className="facebook">
                  <Link to="nolink-available" className="icon-link">
                    <FaTwitterSquare size={30} />
                  </Link>
                </div>
                <div className="facebook">
                  <Link
                    to="https://www.youtube.com/@koshurscientist"
                    className="icon-link"
                  >
                    <FaYoutubeSquare size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="footer-end">
          <div className="policy">
            <Link to="m" className="router-link">
              Terms and Conditions
            </Link>
          </div>
          <div className="policy">
            <Link to="m" className="router-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
