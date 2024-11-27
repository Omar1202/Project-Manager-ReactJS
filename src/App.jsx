import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetail from "./components/ProjectDetail";
import { useState } from "react";

/* 
Este código tiene un detalle: utiliza la posición de los arrays en task y en projects en vez de crear ID's, 
esto, al utilizar el <React.StrictMode> hace que se dupliquen algunas acciones de aquí al ejecutar dos veces:
Por ejemplo, el handleAddTask o el handleDropTask.

Este error se corrigió aplicando useState en lugar de useRef en NewTask, Gracias a que ahora se limpia el input.

*/



function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleAddTask(text, projectid) {
    setProjectState(prevState => {
      let newState = {
        ...prevState,
      }
      newState.projects[projectid].tasks.push(text);
      return newState;
    });
  }

  function handleDropTask(taskID, projectid) {
    setProjectState(prevState => {
      let newState = {
        ...prevState,
        projects: [...prevState.projects],

      }
      newState.projects[projectid].tasks = prevState.projects[projectid].tasks.filter( (t, idx) => idx !== taskID );
      return newState;
    })
    console.log(projectState.projects[projectid].tasks)
  }

  
  function handlePageChange(id) {
    setProjectState(actualState => {
      let newState = {
        ...actualState,
        selectedProject: id
      }
      return newState;
    });
  }

  function saveNewProject(title, desc, dated) {
    setProjectState(actualState => {
      let newState = {
        ...actualState,
        selectedProject: undefined,
        projects: [
          ...actualState.projects,
          {
            "title": title,
            "Description": desc,
            "DateDue": dated,
            "tasks": []
          }
        ]
      };
      return newState;
    });
    
  }

  function deleteProject(id) {
    setProjectState(prevState => {
      let newState = {
        ...prevState,
        projects: prevState.projects.filter((p, indx) => indx !== id)
      };
      return newState;
    });
  }
  
  let content;

  if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onClicked={handlePageChange} />;
  } else if(projectState.selectedProject === null) {
    content = <NewProject goBackFunction={handlePageChange} saveFunction={saveNewProject}  />;
  } else {
    content = <ProjectDetail 
    id={projectState.selectedProject} 
    project={projectState.projects[projectState.selectedProject]} 
    deleteFunction={deleteProject} 
    goBackFunction={handlePageChange}
    addTF={handleAddTask}
    delTF={handleDropTask}
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onClicked={handlePageChange} projects={projectState.projects} selectedProject={projectState.selectedProject}/>
      {content}

    </main>
  );
}

export default App;
