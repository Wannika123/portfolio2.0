const sql = require("better-sqlite3");
const db = sql("projects.db");

const tools = [
    "ReactJS",
    "TypeScript",
    "NextJS",
    "API",
    "Web Audio API",
    "Animation",
    "SCSS",
    "TailwindCSS",
];

const projects = [
    {
        id: 1,
        title: "Landing Page",
        description: "The landing page of a banking website",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/yezt1f56cfp2njnakpbo.jpg",
        tools: ["SCSS"],
        code: "https://github.com/Wannika123/fem-landingPage3",
        site: "https://wannika123.github.io/fem-landingPage3/",
    },
    {
        id: 2,
        title: "Calculator",
        description:
            "Calculator with theme switcher. This is my first React project",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/kbiajeinu576ltgcclbt.jpg",
        tools: ["ReactJS", "SCSS"],
        code: "https://github.com/Wannika123/fem-react-calculator",
        site: "https://dynamic-dasik-f9024c.netlify.app/",
    },
    {
        id: 3,
        title: "Todo App",
        description:
            "Classic todo application with theme switcher and drag-and-drop",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
        tools: ["ReactJS"],
        code: "https://github.com/Wannika123/fem-todo-app",
        site: "https://6617d109e4aa378bce0ae7b2--statuesque-ganache-0cce80.netlify.app/",
    },
    {
        id: 4,
        title: "Dictionary",
        description: "English dictionary with theme switcher and font selector",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vccuroyji9nqbuffdch6.jpg",
        tools: ["ReactJS", "TypeScript", "API", "Web Audio API"],
        code: "https://github.com/Wannika123/fem-dictionary",
        site: "https://6649c1b6a4f26b8634bcf48f--stellar-macaron-ae2fa8.netlify.app/",
    },
    {
        id: 5,
        title: "Tic Tac Toe",
        description: "Classic Tic Tac Toe game, with unbeatable computer AI",
        feature: true,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1641565925/Challenges/bpxighj3oorldbr7wzaq.jpg",
        tools: ["ReactJS", "TypeScript"],
        code: "https://github.com/Wannika123/fem-tic-tac-toe",
        site: "https://66629951927b7bbebb7f53b5--merry-figolla-1cc054.netlify.app/",
    },
    {
        id: 6,
        title: "Animated Grid",
        description:
            "Simple HTML, CSS and JS. But I have some fun with animation.",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1739442155/Challenges/r6chcuyqkpeadcxdkqld.jpg",
        tools: ["Animation"],
        code: "https://github.com/Wannika123/fem-grid-with-animation",
        site: "https://wannika123.github.io/fem-grid-with-animation/",
    },
    {
        id: 7,
        title: "Coffee Website",
        description: "Multi-page site with some fun JS logic",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/nq94jwosne8ahc2eyslv.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS"],
        code: "https://github.com/Wannika123/fem-multi-pages-site",
        site: "https://fem-multi-pages-site.vercel.app/",
    },
    {
        id: 8,
        title: "Gallery",
        description: "Multi-page site gallery with masonary layout",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1626949379/Challenges/gbhafsy09dfqcgimghxp.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS"],
        code: "https://github.com/Wannika123/fem-gallery",
        site: "https://fem-gallery.vercel.app/",
    },
    {
        id: 9,
        title: "Multi-step form",
        description: "Multi-step form with form validation",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1676299213/Challenges/tn6hip0khjvu4qrhww7r.jpg",
        tools: ["ReactJS", "TypeScript"],
        code: "https://github.com/Wannika123/fem-multi-step-form",
        site: "https://66d546f951e7a49bb1d0c29b--quiet-alpaca-ca6935.netlify.app/",
    },
    {
        id: 10,
        title: "Frontend Quiz",
        description:
            "This is the project that I use web audio API seriously, it is the tool that I want to be good at.",
        feature: true,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/v1699537658/Challenges/o4vnsylucskyh2bb5ycq.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS", "Web Audio API"],
        code: "https://github.com/Wannika123/fem-quiz",
        site: "https://fem-quiz-silk.vercel.app/",
    },
    {
        id: 11,
        title: "Countries API",
        description:
            "With theme switcher and I use NextJS intercepting route feature",
        feature: true,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wirxeocmd6tpnn9c5oqc.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS", "API"],
        code: "https://github.com/Wannika123/fem-countries-api",
        site: "https://fem-countries-api-delta.vercel.app/feed",
    },
    {
        id: 12,
        title: "Hangman",
        description:
            "Hangman game, with a little bit of web audio API so that it's not too boring.",
        feature: true,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/hh5xhx2j1cprjgvpddsg.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS", "Web Audio API"],
        code: "https://github.com/Wannika123/fem-hangman",
        site: "https://fem-hangman-three.vercel.app/",
    },
    {
        id: 13,
        title: "Countdown Timer",
        description:
            "Countdown timer with 3D CSS flip animation and random stars",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sgyggipeoqrv2inrkxja.jpg",
        tools: ["ReactJS", "TypeScript", "Animation"],
        code: "https://github.com/Wannika123/fem-countdown-timer",
        site: "https://fem-countdown-timer-two.vercel.app/",
    },
    {
        id: 14,
        title: "Restaurant Website",
        description:
            "Accessible reservation form that use server action for form submission",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/glyb3m1iuyv9y8zzmmxc.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS"],
        code: "https://github.com/Wannika123/fem-multi-page-site-2",
        site: "https://fem-multi-page-site-2-6d45.vercel.app/",
    },
    {
        id: 15,
        title: "Connect Four",
        description:
            "Connect Four game with both player mode and cpu mode. There's also a countdown timer.",
        feature: true,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/qd1p2yaogl41ymtozppc.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS", "Animation"],
        code: "https://github.com/Wannika123/fem-connect-4-game",
        site: "https://fem-connect-4-game.vercel.app/",
    },
    {
        id: 16,
        title: "Myteam Website",
        description: "Typical multi-page website with form submission.",
        feature: false,
        img_src:
            "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ixjx74lti9wkn6hu7f21.jpg",
        tools: ["ReactJS", "TypeScript", "NextJS", "TailwindCSS"],
        code: "https://github.com/Wannika123/fem-multi-page-site-3",
        site: "https://fem-multi-page-site-3.vercel.app/",
    },
    {
        id: 17,
        title: "Circle of Fifth",
        description: "This is my CS50x final project.",
        feature: true,
        img_src: "/circle-of-fifth.png",
        tools: ["ReactJS", "TypeScript", "Web Audio API"],
        code: "https://github.com/Wannika123/cs50x-final-project",
        site: "https://cs50x-final-project.vercel.app/",
    },
];

const createTables = () => {
    db.prepare(
        `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            feature BOOLEAN,
            img_src TEXT NOT NULL,
            code TEXT NOT NULL,
            site TEXT NOT NULL
        )`
    ).run();

    db.prepare(
        `
        CREATE TABLE tools (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )`
    ).run();

    db.prepare(
        `
        CREATE TABLE project_tools (
            project_id INTEGER NOT NULL,
            tool_id INTEGER NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id),
            FOREIGN KEY (tool_id) REFERENCES tools(id),
            PRIMARY KEY (project_id, tool_id)
        )`
    ).run();
};

createTables();

const initData = () => {
    const toolsSql = `INSERT INTO tools (name) VALUES (?)`;
    for (const tool of tools) {
        db.prepare(toolsSql).run(tool);
    }

    const projectsSql = `
        INSERT INTO projects (
            title,
            description,
            feature,
            img_src,
            code,
            site
        ) VALUES (?, ?, ?, ?, ?, ?)
    `;
    for (const project of projects) {
        db.prepare(projectsSql).run(
            project.title,
            project.description,
            project.feature ? 1 : 0,
            project.img_src,
            project.code,
            project.site
        );
    }
};

initData();

const initProjectTools = () => {
    const projectsSql = `SELECT id FROM projects WHERE title = ?`;
    const toolsSql = `SELECT id FROM tools WHERE name = ?`;

    const insertSql = `
        INSERT INTO project_tools (
            project_id,
            tool_id
        ) VALUES (?, ?)
    `;

    for (const project of projects) {
        const projectId = db.prepare(projectsSql).get(project.title).id;

        for (const tool of project.tools) {
            const toolId = db.prepare(toolsSql).get(tool).id;

            db.prepare(insertSql).run(projectId, toolId);
        }
    }
};

initProjectTools();
