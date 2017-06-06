import React from "react";
import "./ParentList.scss";
import {ListItem} from './ListItem'

export class Miscellaneous extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const miscellaneous = [
            { id: 1, title: 'Miscellaneous', progress: 90, summary: 'Sit through an entire meal without your phone' }
        ]


        return (
            <div className="table-container">
                <table className="table table-filter">
                    <tbody>
                    {
                        miscellaneous.map((task) => {
                            return (<ListItem key={task.id} title={task.title} summary={task.summary} progress={task.progress} />)
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
