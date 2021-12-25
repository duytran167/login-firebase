import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import { Button, Label, FormGroup, H5, InputGroup } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2'],
            showAddForm: false,
        }

    }

    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    delStatus = (name) => {
        alert("Button Clicked!");


    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }

    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else {
            return (
                <div className="container">

                    <button type="button" className="btn btn-outline-danger" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <Label>
                        Label A
                        <input className={Classes.INPUT} placeholder="Placeholder text" />
                    </Label>

                    <Button intent="primary" minimal={true}>Good stuff</Button>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(function (name, index) {
                                    return <TodoList name={name}
                                    />
                                }.bind(this))
                            }
                            <button onClick={() => { alert('Chắc xóa chưa?'); }}>Delete</button>

                        </tbody>
                    </table>
                </div>
            );
        }
    }
}


export default TaskList;
