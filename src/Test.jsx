import React from 'react'

export default class Test extends React.Component {
    state = {
        tasks: {
            '7': { id: '7', content: 'clean the bathroom' },
            '8': { id: '8', content: 'mop the floor' },
            '9': { id: '9', content: 'paint the fence' }
        },
        tasks2: [
            { task_id: 1, content: 'take out the trash' },
            { task_id: 2, content: 'walk the cat' },
            { task_id: 3, content: 'charge phone' },
            { task_id: 4, content: 'cook dinner' },
            { task_id: 5, content: 'wash the dishes' },
            { task_id: 6, content: 'do laundry' }
        ]
    }

    render() {
        return (
            <div>


                <h1>test</h1>



            </div>

        )
    }
}