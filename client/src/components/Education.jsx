import React from "react";
import "./ParentList.scss";
import {ListItem} from './ListItem'

export class Education extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const educationTasks = [
            { id: 1, title: 'Education', progress: 75, summary: 'Complete homework by 7pm' }
        ]
        return (
            <div className="table-container">
                <table className="table table-filter">
                    <tbody>
                    {
                        educationTasks.map((task) => {
                            return (<ListItem key={task.id} title={task.title} summary={task.summary} progress={task.progress} />)
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
