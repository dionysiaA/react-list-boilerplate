import React from "react";
import "./ParentList.scss";
import {ListItem} from './ListItem'

export class AllList extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const tasks = [
            { id: 1, title: 'Chore', progress: 25, summary: 'Wash dinner dishes' },
            { id: 2, title: 'Chore', progress: 35, summary: 'Walk Lew for 20 minutes' },
            { id: 3, title: 'Chore', progress: 45, summary: 'Make the bed every morning' },
            { id: 4, title: 'Education', progress: 75, summary: 'Complete homework by 7pm' },
            { id: 5, title: 'Miscellaneous', progress: 90, summary: 'Sit through an entire meal without your phone' }
        ]
        return (

            <div className="table-container">
                <table className="table table-filter">
                    <tbody>
                    {
                        tasks.map((task) => {
                            return (<ListItem key={task.id} title={task.title} summary={task.summary} progress={task.progress} />)
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}
