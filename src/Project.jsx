import React from 'react'
import styled from 'styled-components'
import Task from './Task'

const Container = styled.div`
border: 1px solid lightgray
margin: 2px
border-radius: 2px
background: oldlace`
const Title = styled.h3`
font-size: 1.5rem
margin: 0
padding: 0
font-weight: 200`
const TaskList = styled.div``


export default class Project extends React.Component{
    
    render(){
        return (
            <Container>

            <Title>
            {this.props.project.title}
            </Title>
            

            <TaskList>
                

                {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
                
            </TaskList>



            </Container>
        )
    }

}