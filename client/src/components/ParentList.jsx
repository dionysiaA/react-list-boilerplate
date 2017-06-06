import React from "react";
import "./ParentList.scss";
import Progress from 'react-progressbar'
import {AllList} from './AllList'
import {Chores} from './Chores'
import {Education} from './Education'
import {Miscellaneous} from './Miscellaneous'


export class ParentList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            componentToRender: 'AllList'
        }
    }

    filterList = (componentName) => {
       this.setState({componentToRender: componentName})
    }

    render() {

        const componentToRender = this.state.componentToRender;
        let component = null;
        if(componentToRender === 'Education') {
            component = <Education />
        } else if(componentToRender === 'Chores') {
            component = <Chores />
        } else if(componentToRender === 'Miscellaneous') {
            component = <Miscellaneous />
        } else {
            component = <AllList />
        }

        return (
            <div className="container">
                <div className="row">

                    <section className="content">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="pull-left">
                                        <div className="list-group">
                                            <div className="list-group-item">
                                                <h3 className="list-group-item-heading month">June</h3>
                                                <p className="list-group-item-text month-subheader">This week's task list.</p>
                                                <p className="list-group-item-text month-author">Author: Mom</p>
                                                <p className="list-group-item-text month-date">Date: June 8, 2017</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-success btn-filter" data-target="pagado" onClick={() => this.filterList('Education')}>Education</button>
                                            <button type="button" className="btn btn-warning btn-filter" data-target="pendiente" onClick={() => this.filterList('Chores')}>Chores</button>
                                            <button type="button" className="btn btn-danger btn-filter" data-target="cancelado" onClick={() => this.filterList('Miscellaneous')}>Miscellaneous</button>
                                            <button type="button" className="btn btn-default btn-filter" data-target="all" onClick={() => this.filterList('AllList')}>All</button>
                                        </div>
                                    </div>
                                    {component}
                                </div>
                            </div>
                            <div className="content-footer">
                                <p>
                                    Page © - 2017 <br/>
                                    Powered By <a href="https://www.facebook.com/tavo.qiqe.lucero" target="_blank">deniseA</a>
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}
