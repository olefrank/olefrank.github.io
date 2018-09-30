import React from 'react';
import './Intro.css';

const Intro = () => (
	<div className="Intro">
		<h5 className="Intro__byline">
			7 years full time experience, AP Computer Science with top grades, experienced instructor/teacher, loves to hike,
			kayak and play jazz trumpet, 40 years old, Copenhagen based.
		</h5>

		<blockquote className="Intro__quote">
			<p>I am dedicated and detail oriented. Exited about modern web standards. Always learning, always improving...</p>
		</blockquote>
		<cite className="Intro__author">Ole Frank Jensen - Senior Web Developer</cite>

		<div className="Intro__portrait">
			<div className="Intro__portrait--frame">
				<img
					className="Intro__portrait--img"
					src="ole-frank-jensen-portrait.jpg"
					alt="Portrait of Ole Frank Jensen - Senior Web Developer"
				/>
			</div>
		</div>
	</div>
);
export default Intro;
