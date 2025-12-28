import { ProjectsList } from "../utils/ProjectList";

export default function Projects() {
  return (
    <>
      <div className="image-wrapper">
        {ProjectsList.map((project, index) => (
          <div key={project.id} className="image-list">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{ "--delay": `${index * 0.9}s` }}
            />
          </div>
        ))}
        <div className="overlay" />
      </div>
    </>
  );
}
