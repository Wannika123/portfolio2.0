// import ProjectDetails from "@/components/projects/ProjectDetails";
import { getProject } from "@/lib/projects";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProjectIdPage({ params }: Props) {
    const currParams = await params;
    const id = currParams.id;

    const project = await getProject(Number(id));

    return (
        <>
            {id}
            {project.title}
            {/* <ProjectDetails project={project} isModal={false} />; */}
        </>
    );
}
