import Button from "./Button";

export default function ProjectSidebar({ onClicked, projects, selectedProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your projects
            </h2>
            <div>
            <Button onClick={() => onClicked(null)}>
                + Add Project
            </Button>
            </div>
            <ul className="mt-8">
                { 
                projects.map((project, pidx) => {
                    let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"; 

                    if(pidx === selectedProject) {
                        classes += " bg-stone-800 text-stone-200"
                    } else {
                        classes += " text-stone-400"
                    }

                    return (
                        <li key={project.title} className="flex justify-between my-4">
                            <button key={pidx} onClick={() => onClicked(pidx)} className={classes}>
                                {project.title}
                            </button>
                        </li>
                    );
                }
                    )
                }
            </ul>
        </aside>
    )
}