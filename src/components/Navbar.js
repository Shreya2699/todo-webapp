import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand mr-5" href="#">Live Todo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Me! </a>
                            </li>
                        
                        </ul>

                        <button type="button" class="btn btn-outline-light mr-3">SignUp</button>
                        <button type="button" class="btn btn-outline-light">LogIn</button>

                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;