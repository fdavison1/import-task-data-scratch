import React from 'react'
import axios from 'axios'
import { DragDropContext } from 'react-beautiful-dnd'
import Project from './Project'

export default class Dash extends React.Component {
    state = {
        tasksOriginal: {
            '7': { id: '7', content: 'clean the bathroom' },
            '8': { id: '8', content: 'mop the floor' },
            '9': { id: '9', content: 'paint the fence' }
        },
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
    
        onDragEnd = result => {
            //
        }


    render() {
        // console.log(this.state.projects)



        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >

               
                 <div>
                {this.state.projects.map((projectId, index) => 
                    {
                    const project = this.state.projects[index]
                    // console.log(project.project_id)
                    const tasks = project.taskIds.map((taskId, index) => this.state.tasks[index])



                    //  return project.title
                    return <Project key={project.id} project={project} tasks={tasks} index={index}/>
                    
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