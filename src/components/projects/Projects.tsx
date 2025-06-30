"use client";

import { SelectContext } from "@/context/SelectContext";
import { useContext, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import type { Project } from "@/lib/projects";

type ProjectsProps = {
    projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
    const { selectedVals } = useContext(SelectContext);

    const [endingIndex, setEndingIndex] = useState(6);

    let displayedProjects: Project[] = [];

    if (selectedVals.length === 0) {
        displayedProjects = [
            ...projects.filter((project) => project.feature),
            ...projects.filter((project) => !project.feature),
        ]; // feature projects appear first
    } else {
        displayedProjects = projects.filter((project) => {
            let condition = true;
            for (let i = 0; i < selectedVals.length; i++) {
                if (!project.tools.includes(selectedVals[i])) {
                    condition = false;
                    break;
                }
            }
            return condition;
        });
    }

    if (displayedProjects.length === 0) {
        return <p>No project found.</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles["grid-container"]}>
                {displayedProjects.slice(0, endingIndex).map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
            {endingIndex < displayedProjects.length && (
                <button
                    className={styles["load-btn"]}
                    onClick={() => setEndingIndex((prev) => prev + 4)}
                >
                    Load more
                    <svg
                        height="24"
                        preserveAspectRatio="xMinYMin"
                        viewBox="-1.5 -2.5 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m17.83 4.194.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1 -1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511a7.381 7.381 0 0 0 -12.992 1.264l-.26.633a1 1 0 1 1 -1.85-.758l.26-.633a9.381 9.381 0 0 1 16.495-1.632zm-15.522 10.613-.327 1.311a1 1 0 1 1 -1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1 -.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1 -5.38 5.831 9.386 9.386 0 0 1 -11.265-3.328z" />
                    </svg>
                </button>
            )}
        </div>
    );
}
