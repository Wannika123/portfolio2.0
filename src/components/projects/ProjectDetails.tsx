import { notFound } from "next/navigation"
import styles from './ProjectDetails.module.css'
import Image from "next/image"
import projects from '@/data/projects.json'

type Props = {
    id: number
}

export default function ProjectDetails({ id }: Props) {
    const project = projects.find(project => project.id === Number(id));

    if (!project) {
        notFound()
    }

    return (
        <div className={styles.container}>
            <div className={styles['img-container']}>
                <Image 
                    src={project.img.src} 
                    alt={project.img.alt} 
                    width={500}
                    height={450}
                />
            </div>
            <div className={styles['text-container']}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className={styles.tools}>
                    <h2>Built with:</h2>
                    <div>
                        {project.tools.map(tool => (
                            <div key={tool} className={styles.tool}>{tool}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.links}>
                    <a
                        href={project.site}
                        target="_blank"
                        className={styles['site-btn']}
                    >
                        preview site
                    </a>
                    <a
                        href={project.code}
                        target="_blank"
                        className={styles['code-btn']}
                    >
                        view code
                    </a>
                </div>
            </div>
        </div>
    )
}