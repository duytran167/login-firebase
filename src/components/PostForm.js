import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Label } from 'reactstrap';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            userId: '',
            title:'', 
            body: ''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }
    handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                
                
                console.log(response)
            })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Post From</h1>
                <div className='form-group'>
                    <div className="container">                        
                        <Label>User Id: </Label>
                        <input
                        type='text'
                        name='userId'
                        value={this.state.userId}
                        onChange={this.handleChange}></input>
                    </div>
                    <div className="container">                        
                        <Label>Title: </Label>
                        <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}></input>
                    </div>
                    <div className="container">                        
                        <Label>Body: </Label>
                        <input
                        type='text'
                        name='body'
                        value={this.state.body}
                        onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default PostForm
