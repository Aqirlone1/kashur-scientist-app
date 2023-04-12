import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <h2> Contact Us </h2>{" "}
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <span> Email: info @company.com </span>{" "}
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <span> Phone: +1 123 456 7890 </span>{" "}
        </li>{" "}
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />{" "}
          <span> WhatsApp: +1 123 456 7890 </span>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Contact;
