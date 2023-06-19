import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hey, I'm <em>Evgenii</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>Hardwork. Responsibility. Result.</p>
                </div>
                <a href="https://ekaterinburg.hh.ru/resume_converter/%D0%91%D1%83%D1%80%D0%BA%D0%BE%D0%B2%20%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=e211fdbdff0bf0e1f90039ed1f574f3165526c&type=pdf&hhtmSource=resume&hhtmFrom=resume_builder_position" className="btn">Download a profile</a>
            </div>
        </header>
    );
}
 
export default Header;