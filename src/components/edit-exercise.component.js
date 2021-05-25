import axios from 'axios';
import React, { Component } from 'react';

//This is a class component of React
export default class EditExercise  extends Component {
    constructor(props) {
        super(props);

        // Method Binding
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // This is just like a variable declaration
        this.state = {
            username: '',
            description: '',
            duration: 0,            
            users: []
        }
    }

    componentDidMount() {
      axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


        axios.get('http://localhost:5000/users')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    }) 
                }
            })               
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    // onChangeDate(date) {
    //     this.setState({
    //         Date: date.target.value
    //     })
    // }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration            
        }

        console.log(exercise);
    
        // connectiong frontend to the backend using axios
        axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id , exercise)
            .then(res => console.log(res.data));
            

        window.location = '/';
    }


// The content which should be displayed in the web page is included in the render() method
  render() {
    return (
        <div> 
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user) {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div>
                <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
                </div>
               
                <div className="form-group">
                <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>      
    );
  }
}