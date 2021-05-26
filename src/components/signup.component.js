import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Navbar

// This is a clas component
export default class Signup extends Component {

  render() {
    return (
        <div className="container">
            <h1>This is signup!!!!!!!!</h1>
            <Link to=""><p>Back to Exercsies</p></Link>

            <section className="pt-4">            
            <div className="card signup" >
                <h1> Create an account </h1>
                <div className="card-body">
                    <form >
                        <div className="mb-3">
                            <label for="exampleInputFName" className="form-label"> First Name</label>
                            <input type="text" className="form-control" id="exampleInputFName"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputLName" className="form-label"> Last Name</label>
                            <input type="text" className="form-control" id="exampleInputLName" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputMobile" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control" id="exampleInputMobile" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>                        
                        <button type="submit" className="btn account btn-primary"> Create an account! </button>
                    </form>
                </div>
            </div>
        </section>                   
            
     
        </div>
      
    );
  }
}