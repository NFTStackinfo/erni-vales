import { FooterStyle } from "./Footer.style";
import { Icon } from "../UIKit";
import {socialList} from "./data-footer";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="content">
          <p className="copyright">
            ©All Rights reserved {new Date().getFullYear()}
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
                                  <Icon name={name} color="white"/>
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
