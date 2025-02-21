import { projects } from "../ProjectInfo";
import ProjectItem from "../ProjectItem/ProjectItem";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects-container" className={classes.projectContainer}>
      <h1>Projects</h1>
      {projects.map((project, idx) => {
        return <ProjectItem key={idx} project={project} />;
      })}
    </section>
  );
}
