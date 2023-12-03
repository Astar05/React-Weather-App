import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div>
      <p>
        <a href="https://github.com/Astar05/Weather-App">Open-source code</a> by
        Nhu Huynh
      </p>

      <ul>
        <li className="coder-connects">
          <a
            href="https://www.shecodes.io/graduates/85110-nhu-huynh"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://asset.brandfetch.io/idhHl6SuQh/id_jTS1I_m.jpeg?updated=1687973343413"
              alt="sheCodes-Logo"
              className="shecodes-logo"
            />
          </a>
        </li>
        <li className="coder-connects">
          <a
            href="https://linkedin.com/in/nhu-huynh-a41a4670"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="linkedIn logo"
              className="linkedin-logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
