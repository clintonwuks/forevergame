import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div >
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand text-white" href="#"><i className="fa fa-graduation-cap fa-lg mr-2"></i>BLOG</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="nvbCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-home fa-fw mr-1"></i>Anasayfa</a>
							</li>
							<li className="nav-item active pl-1">
								<a className="nav-link" href="#"><i className="fa fa-th-list fa-fw mr-1"></i>Blog</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-info-circle fa-fw mr-1"></i>Hakkımızda</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>İletişim</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-user-plus fa-fw mr-1"></i>Kayıt Ol</a>
							</li>
							<li className="nav-item pl-1">
								<a className="nav-link" href="#"><i className="fa fa-sign-in fa-fw mr-1"></i>Oturum Aç</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </div>
    );
}

export default Navbar;
