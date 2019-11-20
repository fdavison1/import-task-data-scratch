import React from 'react'
import Project from './Project'

export default class Dash extends React.Component {
    state = {
        tasksOriginal: {
            '7': { id: '7', content: 'clean the bathroom' },
            '8': { id: '8', content: 'mop the floor' },
            '9': { id: '9', content: 'paint the fence' }
        },
        tasks: [
            { task_id: 1, content: 'take out the trash' },
            { task_id: 2, content: 'walk the cat' },
            { task_id: 3, content: 'charge phone' },
            { task_id: 4, content: 'cook dinner' },
            { task_id: 5, content: 'wash the dishes' },
            { task_id: 6, content: 'do laundry' }
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






    render() {
        // console.log(this.state.projects)



        return (
            <div>

               
                 <div>
                {this.state.projects.map((projectId, index) => 
                    {
                    const project = this.state.projects[index]
                    console.log(project)
                    const tasks = project.taskIds.map((taskId, index) => this.state.tasks[index])



                    //  return project.title
                    return <Project key={project.id} project={project} tasks={tasks} index={index}/>
                    
                    }
                    
                    )}
                


                </div> 


            </div>
        )
    }
}