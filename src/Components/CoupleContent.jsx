import React from 'react';
import Footer from './Footer';
import '../couple.css';
const frontg = `${process.env.PUBLIC_URL}/assets/flaticon/svg/003-luxury.svg`;
const couple1 = `${process.env.PUBLIC_URL}/assets/images/couple-1.jpg`;
const couple2 = `${process.env.PUBLIC_URL}/assets/images/couple-2.jpg`;
const couple3 = `${process.env.PUBLIC_URL}/assets/images/couple_3.jpg`;
const couple4 = `${process.env.PUBLIC_URL}/assets/images/couple-3.jpg`;
const couple5 = `${process.env.PUBLIC_URL}/assets/images/couple-4.jpg`;


function CoupleContent() {

    return (
		<div className="coop" >
            <div className="qbootstrap-overlay" ></div>
            <div className="qbootstrap-cover text-center" >
                <div className="display-t">
					<div className="display-tc">
						
						<div id="qbootstrap-story" >
							<div className="container">
								<div className="row animate-box">
									<div className="col-md-8 col-md-offset-2">
										<div className="col-md-12 text-center section-heading svg-sm-2">
											<img src={frontg} className="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com" />
												<h2>Our Love Story</h2>
										</div>
									</div>
								</div>
									<div className="row">
										<div className="col-md-12">
											<ul className="timeline animate-box">
												<li className="animate-box">
													<div className="timeline-badge" style={{ backgroundImage: "url(" + couple1 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay"></div>
														<div className="overlay"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">Our First Date</h3>
															<span className="date">April 30, 2021</span>
														</div>
														<div className="timeline-body">
															<p style={{ color: "brown" }}>A day I’ll never forget. You stepped in looking radiating and I almost knocked the table down as I attempted to stand up. Nice food but even nicer being graced by your presence.</p>
														</div>
													</div>
												</li>
												<li className="timeline-inverted animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple2 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay overlay-2"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">Meet The Friends</h3>
															<span className="date">May 21, 2021</span>

														</div>
														<div className="timeline-body">
															<p style={{ color: "grey" }}>Our first time meeting people in each other’s lives. It was a fun night! I love your smile here. I want to always do that. To make your smile as bright as possible, from now, till the end of time.</p>
														</div>
													</div>
												</li>
												<li className="animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple3 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay"></div>
														<div className="overlay"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">Our first road trip</h3>
															<span className="date">June 29, 2021</span>
														</div>
														<div className="timeline-body">
															<p style={{ color: "brown" }}>
															I had an amazing time with you at the hot springs. That 30 minute wait to sit in this pool was worth it, because it gave us this beautiful picture that I’ll cherish forever!
															</p>
														</div>
													</div>
												</li>
												<li className="timeline-inverted animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple4 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay overlay-2"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">Our first Vacation</h3>
															<span className="date">Feb. 12, 2022</span>
														</div>
														<div className="timeline-body">
															<p style={{ color: "grey" }}>The Great Ocean Road. A long beautiful drive with my beautiful girl. The first of many vacations to come! Can’t wait to continue to write our story together. Love you baby!</p>
														</div>
													</div>
												</li>
												<li className="animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple5 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">We're Engaged!!!</h3>
															<span className="date">Till Eternity</span>
														</div>
														<div className="timeline-body">
															<p style={{ color: "brown" }}>Here's to me and You Forever!</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
								</div>
								<Footer/>
								</div>
							</div>
                    </div>
                </div>
			</div>

		</div>
    );
}

export default CoupleContent;