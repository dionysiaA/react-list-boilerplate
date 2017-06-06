import React from "react";
import "./ParentList.scss";
import Progress from 'react-progressbar'

export class ListItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <tr data-status="pendiente">
                <td>
                    <a href="javascript:;" className="star">
                        <i className="glyphicon glyphicon-star" />
                    </a>
                </td>
                <td>
                    <div className="media">
                        <a href="#" className="pull-left">
                            <img src="/dist/minion-pistol.jpg" className="media-photo"/>
                        </a>
                        <div className="media-body">
                            <h4 className="title">
                                {this.props.title}
                            </h4>
                            <p className="summary">{this.props.summary}</p>
                            <Progress completed={this.props.progress} />
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}
