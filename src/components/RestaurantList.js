import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getDefaultNormalizer } from '@testing-library/react';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = { list: null, }
    }
    
    componentDidMount() {
        this.getData()
        
    }
    getData(){
        fetch('http://localhost:8000/restaurant').then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        fetch('http://localhost:8000/restaurant/' +id, {
            method: "DELETE",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been delete")
                this.getData()
            })
        })
    }
    render() {
        return (
            <div className="row">
                <Link to='/RestaurantCreate' className=" btn btn-info col-2 align-center">Create</Link>
                <h1> Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th> Id</th>
                                        <th> Restaurant Name</th>
                                        <th> Restaurant Rating </th>
                                        <th> Restaurant Email </th>
                                        <th> Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td> {item.id} </td>
                                                <td> {item.name} </td>
                                                <td> {item.rating} </td>
                                                <td> {item.email}</td>

                                                <td>
                                                    <Link to={'/update/' + item.id} ><FontAwesomeIcon icon={faPen} color='orange' /></Link>   

                                                   <span onClick={()=>this.delete(item.id)}>   <FontAwesomeIcon icon={faTrashAlt} color='red' /> </span>

                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        : <p></p>
                }
            </div>
        )
    }
}
export default RestaurantList
