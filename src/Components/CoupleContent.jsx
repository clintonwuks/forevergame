import { QuizContext } from '../question/Context';
import React, { useContext } from 'react';
import { backg } from './Questions'

function CoupleContent() {

    return (
        <div className="qbootstrap-hero ">
            <div className="qbootstrap-overlay"></div>
            <div className="qbootstrap-cover text-center" style={{ backgroundImage: "url(" + backg + ")" }}>
                <div className="display-t">
                    <div className="display-tc">
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoupleContent;



//<div id="qbootstrap-story" data-section="story">
//	<div class="container">
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