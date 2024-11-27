import Tasks from './Tasks.jsx';

export default function ProjectDetail({ project, deleteFunction, id, goBackFunction, addTF, delTF }) {
    
    const formattedDate = new Date(project.DateDue).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    function handleDeleteProject() {
        deleteFunction(id);
        goBackFunction(undefined);
    }


    
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <button onClick={handleDeleteProject} className="text-stone-600 hover:text-stone-950">
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.Description}</p>
            </header>
            <Tasks project={project} onAddF={addTF} projectID={id} onDelF={delTF}/>
        </div>
    )
}