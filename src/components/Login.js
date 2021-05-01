import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div className="Login__container">


                <form id="Login__centeredForm" className="form container-md d-flex flex-column justify-content-center">
                    
                    <div className="d-flex flex-column  bg-light p-3 shadow">

                        {/* username field */}
                        <label className="sr-only" for="inlineFormInputGroupUsername2">USERNAME</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                {/* username logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="USERNAME" />
                        </div>

                        {/* password field */}
                        <label className="sr-only" for="inlineFormInputGroupUsername2">PASSWORD</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="PASSWORD" />
                        </div>

                        {/* login button */}
                        <button type="submit" className="btn btn-success mb-2">LOGIN</button>

                        {/* link if don't have a account */}
                        <a href="#">Don't have an account, SIGNUP</a>

                    </div>    
                </form>
            </div>
        )
    }
}

export default Login;