import ProjectModal from '@/components/projects/ProjectModal';

type Props = {
    params: Promise<{ id: string }>
}

export default async function ProjectIdModal({ params }: Props) {
    const currParams = await params;
    const id = currParams.id;

    return <ProjectModal id={Number(id)} />
}