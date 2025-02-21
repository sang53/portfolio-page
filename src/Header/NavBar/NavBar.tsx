import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

export default function NavBar() {
  const [active, setActive] = useState("landing");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={classes.navBar}>
      <a
        href="#landing"
        className={active === "landing" ? classes.active : classes.inactive}
      >
        Home
      </a>
      <a
        href="#intro"
        className={active === "intro" ? classes.active : classes.inactive}
      >
        About
      </a>
      <a
        href="#technologies"
        className={
          active === "technologies" ? classes.active : classes.inactive
        }
      >
        Skills
      </a>
      <a
        href="#projects-container"
        className={
          active === "projects-container" ? classes.active : classes.inactive
        }
      >
        Projects
      </a>
      <a className={classes.inactive}>Resume</a>
    </nav>
  );
}
