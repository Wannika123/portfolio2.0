import Projects from "@/components/projects/Projects";
import Select from "@/components/projects/Select";
import { Suspense } from "react";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <>
            <div className="select-container">
                <Select />
            </div>
            <Suspense fallback={<p>loading...</p>}>
                <Projects projects={projects} />
            </Suspense>
        </>
    );
}
