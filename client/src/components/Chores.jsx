import React from "react";
import "./ParentList.scss";
import {ListItem} from './ListItem'

export class Chores extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const chores = [
            { id: 1, title: 'Chore', progress: 25, summary: 'Wash dinner dishes' },
            { id: 2, title: 'Chore', progress: 35, summary: 'Walk Lew for 20 minutes' },
            { id: 3, title: 'Chore', progress: 45, summary: 'Make the bed every morning' }
        ]
        return (
            <div className="table-container">
                <table className="table table-filter">
                    <tbody>
                    {
                        chores.map((chore) => {
                            return (<ListItem key={chore.id}
                                              title={chore.title}
                                              summary={chore.summary}
                                              progress={chore.progress}/>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
