import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
export default class Login extends Component {

  render() {
    return (
        <div className="container">
            <h1>This is login</h1>
            <Link to=""><p>Back to Exercsies</p></Link>

                     
            <div className="card bg-success" >
                <h1> Login </h1>
                <div className="card-body">
                    <form >
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <Link to=""> Forgot Password?     </Link>                          
                        </div>
                        <button type="submit" className="btn btn-success"> Login </button>
                    </form>
                </div>
            </div>
     
        </div>
      
    );
  }
}