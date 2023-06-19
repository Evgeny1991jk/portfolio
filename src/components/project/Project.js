

const Project = ({title, img, stack, gitHubLink, projectLink, imgGitHub, id}) => {
    return (
        <>
            <h2 className="title-1">
            {title}
            </h2>
            <a href={projectLink}>
                <img src={img} alt={title} className="project-details__cover" />
            </a>
            <div className="project-details__description">
                <p>Stack:{stack}</p>
            </div>
            <a href={gitHubLink} className="btn-outline">
                <img src={imgGitHub} alt="" />
                GitHub repository
            </a>
        </>
    );
}
 
export default Project;