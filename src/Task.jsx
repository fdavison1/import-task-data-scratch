import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgray
padding: 8px
margin-bottom: 8px
background: white`


export default class Task extends React.Component {

    render() {
        return (

            <Draggable draggableId={this.props.task.task_id.toString()} index={this.props.index}>
                {provided => (

                    <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >



                    {this.props.task.content}





                </Container>
                )}
            </Draggable>
        )
    }

}