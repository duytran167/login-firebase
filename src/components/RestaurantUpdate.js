import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router'

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            id: null
        }
    }
    

    update() {
        fetch('http://localhost:8000/restaurant/' + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been update")
                
                
            })
            
            
        })

    }
    componentDidMount() {

        fetch('http://localhost:8000/restaurant/' + this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    id: result.id,
                    name: result.name,
                    rating: result.rating,
                    email: result.email,
                    address: result.address
                })
            })
        })
    }

    render() {
        console.warn(this.state);

        return (
            <div>
                <h1> Edit Restaurant</h1>
                <div>
                    <form horizontal>
                        <div class="form-group row">
                            <div className="form-group">
                                <label>Restaurant Name:</label>
                                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                                    placeholder="Restaurant Name" value={this.state.name} className="form-control" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Restaurant Email:</label>
                                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                                    placeholder="Restaurant Email" value={this.state.email} className="form-control" />
                            </div>
                            <br /><div className="form-group">
                                <label>Restaurant Rating:</label>
                                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                                    placeholder="Restaurant Rating" value={this.state.rating} className="form-control" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Restaurant Address:</label>
                                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                                    placeholder="Restaurant Address" value={this.state.address} className="form-control" />
                            </div>
                            <br />
                            <br />
                            <button className='btn btn-success col-md-3 justify-between' onClick={() => { this.update() }}>Edit Restaurant</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default RestaurantUpdate
