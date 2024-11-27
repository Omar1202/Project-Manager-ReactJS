import { useState } from "react";


export default function NewTask({ project_id, onAdd }) {
    const [inputValue, setInputvalue] = useState('');

    function handleInputChange(event) {
        setInputvalue(event.target.value);
    }

    function handleAddTask() {
        if(inputValue.trim() === '') {
            return
            
        }
        onAdd(inputValue, project_id);
        setInputvalue('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleInputChange} value={inputValue} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
};
