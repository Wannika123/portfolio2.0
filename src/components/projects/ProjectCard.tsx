import { useContext } from "react"
import { SelectContext } from "@/context/SelectContext"
import Link from "next/link"
import { ProjectType } from "./Projects"
import styles from './ProjectCard.module.css'
import Image from "next/image"

type Props = {
    project: ProjectType
}

export default function ProjectCard({ project }: Props) {
    const { selectedVals } = useContext(SelectContext);

    return (
        <Link href={`/projects/${project.id}`} className={styles.container}>
            <div className={styles['img-container']}>
                <Image 
                    src={project.img.src} 
                    alt={project.img.alt} 
                    width={500}
                    height={400}
                />
            </div>
            <div className={styles['text-container']}>
                <h1>{project.title}</h1>
                <div className={styles['tools-container']}>
                    {project.tools.map(tool => (
                        <div 
                            key={tool}
                            className={`${styles.tool} ${selectedVals.includes(tool) ? styles.selected : ''}`}
                        >
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}