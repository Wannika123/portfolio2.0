import Database from "better-sqlite3";

const db = Database("projects.db");

type RawProject = {
    id: number;
    title: string;
    description: string;
    feature: number;
    img_src: string;
    code: string;
    site: string;
};

export type Project = {
    id: number;
    title: string;
    description: string;
    feature: boolean;
    img_src: string;
    code: string;
    site: string;
    tools: string[];
};

export const getAllProjects = (): Project[] => {
    // Newer projects appear first
    const rawProjects = db
        .prepare("SELECT * FROM projects ORDER BY id DESC")
        .all() as Array<RawProject>;

    return rawProjects.map((preject) => processProject(preject));
};

export const getProject = (id: number): Project => {
    const rawProject = db
        .prepare(`SELECT * FROM projects WHERE id = ?`)
        .get(id) as RawProject;

    return processProject(rawProject);
};

const processProject = (project: RawProject): Project => {
    const result: Project = {
        id: 0,
        title: "",
        description: "",
        feature: false,
        img_src: "",
        code: "",
        site: "",
        tools: [],
    };

    result.id = project.id;
    result.title = project.title;
    result.description = project.description;
    result.feature = project.feature === 1 ? true : false;
    result.img_src = project.img_src;
    result.code = project.code;
    result.site = project.site;

    const tools = db
        .prepare(
            `
        SELECT name FROM tools 
        JOIN project_tools ON project_tools.tool_id = tools.id
        JOIN projects ON projects.id = project_tools.project_id 
        WHERE projects.id = ?
    `
        )
        .all(project.id) as Array<{ name: string }>;

    result.tools = tools.map((obj) => obj.name);

    return result;
};
