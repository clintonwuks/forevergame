import { QuizContext } from '../question/Context';
import React, { useContext } from 'react';
import { backg } from './Questions';
import Footer from './Footer';
import '../couple.css';
const frontg = `${process.env.PUBLIC_URL}/assets/flaticon/svg/003-luxury.svg`;
const couple1 = `${process.env.PUBLIC_URL}/assets/images/couple-1.jpg`;
const couple2 = `${process.env.PUBLIC_URL}/assets/images/couple-2.jpg`;
const couple3 = `${process.env.PUBLIC_URL}/assets/images/couple-3.jpg`;
const couple4 = `${process.env.PUBLIC_URL}/assets/images/couple-4.jpg`;


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
														<div className="timeline-heading">
															<h3 className="timeline-title">First We Meet</h3>
															<span className="date">June 10, 2017</span>
														</div>
														<div className="timeline-body">
															<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
														</div>
													</div>
												</li>
												<li className="timeline-inverted animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple2 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay overlay-2"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">First Date</h3>
															<span className="date">June 10, 2017</span>
														</div>
														<div className="timeline-body">
															<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
														</div>
													</div>
												</li>
												<li className="animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple3 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">In A Relationship</h3>
															<span className="date">June 14, 2017</span>
														</div>
														<div className="timeline-body">
															<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
														</div>
													</div>
												</li>
												<li className="timeline-inverted animate-box">
												<div className="timeline-badge" style={{ backgroundImage: "url(" + couple4 + ")" }}></div>
													<div className="timeline-panel">
														<div className="overlay overlay-2"></div>
														<div className="timeline-heading">
															<h3 className="timeline-title">We're Engaged</h3>
															<span className="date">Sept. 01, 2017</span>
														</div>
														<div className="timeline-body">
															<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
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



//<div id="qbootstrap-story" data-section="story">
//	<div className="container">
//		<div class="row animate-box">
//			<div class="col-md-8 col-md-offset-2">
//				<div class="col-md-12 text-center section-heading svg-sm-2">
//					<img src="images/flaticon/svg/003-luxury.svg" class="svg" alt="Free HTML5 Bootstrap Template by QBootstrap.com">
//						<h2>Our Love Story</h2>
//					</div>
//				</div>
//			</div>
//			<div class="row">
//				<div class="col-md-12">
//					<ul class="timeline animate-box">
//						<li class="animate-box">
//							<div class="timeline-badge" style="background-image:url(images/couple-1.jpg);"></div>
//							<div class="timeline-panel">
//								<div class="overlay"></div>
//								<div class="timeline-heading">
//									<h3 class="timeline-title">First We Meet</h3>
//									<span class="date">June 10, 2017</span>
//								</div>
//								<div class="timeline-body">
//									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
//								</div>
//							</div>
//						</li>
//						<li class="timeline-inverted animate-box">
//							<div class="timeline-badge" style="background-image:url(images/couple-2.jpg);"></div>
//							<div class="timeline-panel">
//								<div class="overlay overlay-2"></div>
//								<div class="timeline-heading">
//									<h3 class="timeline-title">First Date</h3>
//									<span class="date">June 10, 2017</span>
//								</div>
//								<div class="timeline-body">
//									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
//								</div>
//							</div>
//						</li>
//						<li class="animate-box">
//							<div class="timeline-badge" style="background-image:url(images/couple-3.jpg);"></div>
//							<div class="timeline-panel">
//								<div class="overlay"></div>
//								<div class="timeline-heading">
//									<h3 class="timeline-title">In A Relationship</h3>
//									<span class="date">June 14, 2017</span>
//								</div>
//								<div class="timeline-body">
//									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
//								</div>
//							</div>
//						</li>
//						<li class="timeline-inverted animate-box">
//							<div class="timeline-badge" style="background-image:url(images/couple-4.jpg);"></div>
//							<div class="timeline-panel">
//								<div class="overlay overlay-2"></div>
//								<div class="timeline-heading">
//									<h3 class="timeline-title">We're Engaged</h3>
//									<span class="date">Sept. 01, 2017</span>
//								</div>
//								<div class="timeline-body">
//									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
//								</div>
//							</div>
//						</li>
//					</ul>
//				</div>
//			</div>
//		</div>
//	</div>