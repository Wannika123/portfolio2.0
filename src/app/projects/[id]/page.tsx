import ProjectDetails from '@/components/projects/ProjectDetails';

type Props = {
    params: Promise<{ id: string }>
}

export default async function ProjectIdPage({ params }: Props) {
    const currParams = await params;
    const id = currParams.id;

    return <ProjectDetails id={Number(id)} />
}