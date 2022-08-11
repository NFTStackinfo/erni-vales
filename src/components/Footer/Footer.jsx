import { FooterStyle } from "./Footer.style";
import { Icon } from "../UIKit";
import {socialList} from "../Header/dataHeader";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="content">
          <p className="copyright">
            ©All rights reserved. {new Date().getFullYear()}
          </p>
          <ul className="social">
              {socialList.map(({name, url}) => {
                      return (
                          <li key={name}>
                              <a
                                  target="_blank"
                                  href={url}
                                  rel="noreferrer"
                              >
                                  <Icon name={name} />
                              </a>
                          </li>
                      )
              })}
          </ul>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
