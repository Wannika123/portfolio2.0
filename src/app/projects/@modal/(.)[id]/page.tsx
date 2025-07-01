// import ProjectModal from "@/components/projects/ProjectModal";
import { getProject } from "@/lib/projects";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProjectIdModal({ params }: Props) {
    const currParams = await params;
    const id = currParams.id;

    const project = getProject(Number(id));

    return (
        <>
            {project.id}
            {/* <ProjectModal project={project} /> */}
        </>
    );
}
