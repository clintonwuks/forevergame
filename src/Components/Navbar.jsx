import React from 'react';
import { Link } from "react-router-dom";
import '../navbar.css';


function Navbar() {
    return (
        <div >
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand text-white " href="/"><i className="fa fa-gamepad mr-2 " style={{ fontSize:'25px' }}></i>Forever Game</a>
					<button className="navbar-toggler" type="button" data-toggle="#collapse" data-target="#navConts" aria-controls="navConts" aria-expanded="false">
						<span className="btn btn-primary navbar-toggler-icon">Hey</span>
					</button>
					<div className="collapse navbar-collapse" id="navConts">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item pl-1">
								<Link className="nav-link" to="/"><i className="fa fa-home fa-fw mr-1"></i>Home</Link>
							</li>
							
							<li className="nav-item pl-1">
								<Link className="nav-link" to="/Couple"><i className="bi bi-emoji-heart-eyes-fill mr-1"></i>The Couple</Link>
							</li>
							<li className="nav-item pl-1">
								<Link className="nav-link" to="https://twitter.com/TheRealClint_"><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </div>
    );
}

export default Navbar;

