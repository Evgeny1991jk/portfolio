
import Project from "../components/project/Project";
import { projects } from "../helpers/projectList";

const Projects = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">
                        {projects.map((project, id) => {
                            return <Project
                                    key={id}
                                    title={project.title} 
                                    img={project.img} 
                                    stack={project.stack}
                                    gitHubLink={project.gitHubLink}
                                    projectLink={project.projectLink}
                                    imgGitHub={project.imgGitHub}
                                   />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Projects;