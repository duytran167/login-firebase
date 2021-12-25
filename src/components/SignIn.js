import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth'
import { signInWithGoogle } from '../config/firebase-config'
import { Button } from 'react-bootstrap';

function SignIn() {


    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                                
                                <form>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                            in</button>
                                    </div>
                                    <hr class="my-4" />
                                   
                                    <div class="d-grid mb-2">
                                        <Button  class="btnn-google btn-login text-uppercase fw-bold" onClick={signInWithGoogle} type="button">
                                            <i class="fab fa-google me-2"></i><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Sign in with Google
                                        </Button>
                                    </div>
                                    <div class="d-grid">
                                        <Button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                                            <i class="fab fa-facebook-f me-2"></i><img src="https://img.icons8.com/color/16/000000/google-logo.png" />Sign in with Facebook
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignIn
