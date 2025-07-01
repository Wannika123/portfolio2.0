import ProjectModal from "@/components/projects/ProjectModal";
import { getProject, getProjectCount } from "@/lib/projects";

type Props = {
    params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    const projectCount = getProjectCount();

    const paramsArr = [];
    for (let id = 1; id <= projectCount; id++) {
        paramsArr.push({ id: id.toString() });
    }

    return paramsArr;
}

export default async function ProjectIdModal({ params }: Props) {
    const currParams = await params;
    const id = currParams.id;

    const project = getProject(Number(id));

    return <ProjectModal project={project} />;
}
