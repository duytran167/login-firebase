import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            createSuccess: false,
        }
    }
    
    create() {
        fetch('http://localhost:8000/restaurant', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been create")
            })
            
        })
        this.setState({
            createSuccess: true
        })


    }
    render() {

        console.log(this.state)
        if (this.state.createSuccess) {
            return <Redirect to={'/RestaurantList'} />
        }
        return (
            <div>
                <h1> Create Restaurant</h1>
                <div>
                    <form horizontal>
                        <div class="form-group row">
                            <div className="form-group">
                                <label>Restaurant Name:</label>
                                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                                    placeholder="Restaurant Name" className="form-control" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Restaurant Email:</label>
                                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                                    placeholder="Restaurant Email" className="form-control" />
                            </div>
                            <br /><div className="form-group">
                                <label>Restaurant Rating:</label>
                                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                                    placeholder="Restaurant Rating" className="form-control" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label>Restaurant Address:</label>
                                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                                    placeholder="Restaurant Address" className="form-control" />
                            </div>
                            <br />
                            <br />
                            <button className='btn btn-success col-md-3 justify-between' onClick={() => { this.create() }}>Add Restaurant</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default RestaurantCreate
