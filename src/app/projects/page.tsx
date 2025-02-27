import Projects from "@/components/projects/Projects";
import Select from "@/components/projects/Select";
import { Suspense } from "react";

export default function ProjectsPage() {
    return (
        <>
            <div className="select-container">
                <Select />
            </div>
            <Suspense fallback={<p>loading...</p>}>
                <Projects />
            </Suspense>
        </>
    )
}