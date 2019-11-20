import React from 'react'
import axios from 'axios'
import { DragDropContext } from 'react-beautiful-dnd'
import Project from './Project'

export default class Dash extends React.Component {
    state = {
        tasks: [
            { task_id: 1, content: 'test' },
            { task_id: 2, content: 'test' },
            { task_id: 3, content: 'test' },
            { task_id: 4, content: 'test' },
            { task_id: 5, content: 'test' },
            { task_id: 6, content: 'test' }
        ],
        projects: [
            {
                project_id: 1,
                title: 'project-1',
                taskIds: [1, 2, 3, 4, 5, 6]
            }
        ],
        projectOrder: [1]
    }


        componentDidMount(){
            this.getTasks()
        }
    
        getTasks(){
            axios.get('api/tasks')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    tasks: res.data
                })
            })
        }

        updateProjects(newProject){
            // console.log('fred')
            axios.put('/api/projects', newProject)
            .then(res => {
                this.setState({
                    projects: res.data
                })
            } )
            this.getTasks()
        }
    
        onDragEnd = result => {
            const {destination, source, draggableId } = result
            
            //if destination is null (dragged outside of DragDropContext):
            if(!destination){
                return
            }

            //if dropped in same location (no action required): 
            if(
                destination.droppableId === source.droppableId &&
                destination.index === source.index
            ){
                return
            }

            //look up project by droppableId?????
            const project = this.state.projects.find(el => el.project_id === +source.droppableId)
            // console.log(project)
            const newTaskIds = Array.from(project.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, +draggableId)

            // return console.log(newTaskIds)

            const newProject = {
                ...project, 
                taskIds: newTaskIds
            }
            this.updateProjects(newProject)
            return console.log(newProject) // ----> good taskIds

            
        }


    render() {




        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >

               
                 <div>
                {this.state.projects.map((projectId, index) =>  
                    {
                    // console.log(this.state.projects[index])
                    const project = this.state.projects[index]
                    // console.log(project)
                    const tasks = project.taskIds.map((taskId, index) => this.state.tasks[index])



                    //  return project.title
                    return <Project key={project.project_id} project={project} tasks={tasks} index={index}/>
                    
                    }
                    
                    )}
                
                        <button
                        onClick={()=> this.getTasks()}
                        >test</button>

                </div> 


            </DragDropContext>
        )
    }
}