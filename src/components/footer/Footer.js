import "./style.css";

import vk from "./../../img/icons/VK - Negative.svg";
import Github from "./../../img/icons/Github - Negative.svg";
import LinkedIn from "./../../img/icons/LinkedIn - Negative.svg";
import Telegram from "./../../img/icons/Telegram - Negative.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://vk.com/jk19911991">
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/Evgeny1991jk?tab=repositories">
                                <img src={Github} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/evgenii-burkov-973704235/">
                                <img src={LinkedIn} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://t.me/Kidnamedzhenya">
                                <img src={Telegram} alt="Link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;