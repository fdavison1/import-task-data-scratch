import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid lightgray
padding: 8px
margin-bottom: 8px
background: white`


export default class Task extends React.Component{
    
    render(){
        return (
            <Container>



            {this.props.task.content}





            </Container>
        )
    }

}