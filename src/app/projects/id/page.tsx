import { getProject } from "@/lib/projects";

export default async function ID() {
    const project = await getProject(17);
    return <>{project.title}</>;
}
