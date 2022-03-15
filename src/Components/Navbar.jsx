import React from 'react';
import '../navbar.css';

function Navbar() {
    return (
        <div >
			<nav className="navbar navbar-expand-lg mb-0">
				<div className="container">
					<a className="navbar-brand text-white " href="/"><i className="bi bi-emoji-heart-eyes-fill mr-2 " style={{ fontSize:'25px' }}></i>Forever Game</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
						<span className="btn btn-primary navbar-toggler-icon">Hey</span>
					</button>
					<div className="collapse navbar-collapse" id="nvbCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active pl-1">
								<a className="nav-link" href="#"><i className="fa fa-home fa-fw mr-1"></i>Home</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-th-list fa-fw mr-1"></i>Blog</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-info-circle fa-fw mr-1"></i>The Couple</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </div>
    );
}

export default Navbar;
