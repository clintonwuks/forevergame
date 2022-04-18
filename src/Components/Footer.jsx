import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <footer>
            <div className=" jumbotron-fluid bg-secondary  mb--10" style={{ marginTop: "-1px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 foot">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-light text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "20px" }}>Clinton</h5>
                                    <p className="d-inline lead">Clyaccessories © <br />
                                        <a href="https://github.com/clintonwuks" className="text-light d-block lead">Projects</a>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 foot">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "20px" }}>Contact Us</h5>
                                    <a className="text-light d-block lead" style={{ marginLeft: "-20px" }} href="/"><i className="fa fa-phone mr-2"></i>+353899721656</a>
                                    <a className="text-light d-block lead" href="mailto:clyaccessories@gmail.com"><i className="fa fa-envelope mr-2"></i>clyaccessories@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card bg-secondary border-0">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-white display-4" style={{ fontSize: "20px" }}>Social Media</h5>

                                    <a className="text-light" href="https://www.linkedin.com/in/clinton-onwuka-09615a17b"><i className="fa fa-facebook-square fa-fw fa-2x" /></a>

                                    <a className="text-light" href="https://twitter.com/TheRealClint_"><i className="fa fa-twitter-square fa-fw fa-2x" /></a>

                                    <a className="text-light" href=""><i className="fa fa-instagram fa-fw fa-2x" /></a>

                                    <a className="text-light" href="https://www.linkedin.com/in/clinton-onwuka-09615a17b"><i className="fa fa-linkedin fa-fw fa-2x" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;