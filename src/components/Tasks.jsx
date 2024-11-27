import NewTask from './NewTask';

export default function Task ({ project, onAddF, projectID, onDelF }) {
    function handlDeleteTask(idx) {
        console.log("Task ID: ", idx);
        console.log("Project ID: ", projectID);
        onDelF(idx, projectID);
    }
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAddF} project_id={projectID}/>
            {project.tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            
            {project.tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                { 
                project.tasks.map((task, idx) => 
                    <li key={idx} className="flex justify-between my-4">
                        <span>{task}</span>
                        <button 
                        onClick={() => handlDeleteTask(idx)} className="text-stone-700 hover:text-red-500">
                            Clear
                        </button>
                    </li>
                )}
            </ul>
            )}

        </section>
    )
}