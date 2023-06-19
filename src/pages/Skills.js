import Html_Icon from "./../img/icons/HTML ICON.svg";
import Css_Icon from "./../img/icons/CSS ICON.svg";
import Js_Icon from "./../img/icons/JS ICON.svg";

const Skills = () => {
    return (
        <main className="section">
            <div className="container">
                    <h2 className="title-1">
                        Skills
                    </h2>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h3 className="title-2">
                                Frontend
                            </h3>
                            <p>
                                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, Yarn
                            </p>
                        </li>
                    </ul>
                    <div className="content-list_icon">
                        <img src={Html_Icon} alt="HTML_icon" />
                        <img src={Css_Icon} alt="CSS_icon" />
                        <img src={Js_Icon} alt="JS_icon" />
                    </div>
            </div>
        </main>
    );
}
 
export default Skills;