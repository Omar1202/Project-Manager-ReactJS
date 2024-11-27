import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProject({ goBackFunction, saveFunction }) {
    const errorModal = useRef();
    
    const title = useRef();
    const desc = useRef();
    const date = useRef();

    function handleAddProject() {
        const tit = title.current.value;
        const des = desc.current.value;
        const dd = date.current.value;

        if(
            tit.trim() === '' ||
            des.trim() === '' ||
            dd.trim() === '' 
        ) {
            errorModal.current.open();
            return;
        }
        
        saveFunction(tit,des,dd);

    }


    return (
        <>
            <Modal ref={errorModal} buttonCaption="Accept">
                <h2 className="text-xl font-bold text-stone-700 my-4">Oops! There's an error here!</h2>
                <p className="text-stone-600 mb-4">Looks like you're sending this with some blank spaces.</p>
                <p className="text-stone-600 mb-4">Check it out!</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={() => goBackFunction(undefined)} className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleAddProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} labelText={"Title"} isTextArea={false} />
                    <Input ref={desc} labelText={"Description"} isTextArea={true} />
                    <Input type="date" ref={date} labelText={"Due Date"} isTextArea={false}  />
                </div>
            </div>
        </>
    )
}