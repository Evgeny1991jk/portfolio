import Header from "./../components/header/Header";

import { NavLink } from "react-router-dom";

import Carousel from "./../img/projects/Carousel.jpg";
import Catursday from "./../img/projects/Catursday.jpg";
import Kanban from "./../img/projects/Kanban.jpg";
import Blogpost from "./../img/projects/Blog-post.jpg";

const Home = () => {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">
                    <h2 className="title-1">
                        My Projects
                    </h2>
                    <ul className="projects">
                        <li className="project">
                            <NavLink to="/projects">
                                <img src={Carousel} alt="project" className="project__img" />
                                <h3 className="project__title">Carousel</h3>
                            </NavLink>
                        </li>
                        <li className="project">
                            <NavLink to="/projects">
                                <img src={Catursday} alt="project" className="project__img" />
                                <h3 className="project__title">Catursday app</h3>
                            </NavLink>      
                        </li>
                        <li className="project">
                            <NavLink to="/projects">
                                <img src={Kanban} alt="project" className="project__img" />
                                <h3 className="project__title">Kanban board</h3>
                            </NavLink>
                        </li>
                        <li className="project">
                            <NavLink to="/projects">
                                <img src={Blogpost} alt="project" className="project__img" />
                                <h3 className="project__title">Blog-posts app</h3>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
 
export default Home;