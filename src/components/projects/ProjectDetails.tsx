import styles from "./ProjectDetails.module.css";
import Image from "next/image";
import type { Project } from "@/lib/projects";

type Props = {
    project: Project;
    isModal: boolean;
};

export default function ProjectDetails({ project, isModal }: Props) {
    const isCS50Page = project.id === 17 && !isModal;
    return (
        <div className={styles.container}>
            <div className={styles["img-container"]}>
                <Image
                    src={project.img_src}
                    alt={project.title}
                    width={500}
                    height={450}
                />
            </div>
            <div className={styles["text-container"]}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className={styles.tools}>
                    <h2>Built with:</h2>
                    <div>
                        {project.tools.map((tool) => (
                            <div key={tool} className={styles.tool}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
                {isCS50Page && (
                    <div className="cs50-video-wrapper">
                        <iframe
                            className="cs50-video"
                            src="https://www.youtube.com/embed/6IMRySl7ZEk"
                        ></iframe>
                    </div>
                )}
                <div className={styles.links}>
                    <a
                        href={project.site}
                        target="_blank"
                        className={styles["site-btn"]}
                    >
                        preview site
                    </a>
                    <a
                        href={project.code}
                        target="_blank"
                        className={styles["code-btn"]}
                    >
                        view code
                    </a>
                </div>
            </div>
        </div>
    );
}
