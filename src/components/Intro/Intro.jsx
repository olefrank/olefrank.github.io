import React from 'react';
import './Intro.css';

const Intro = () => (
	<div className="Intro">
		<blockquote className="Intro__summary">
			<p>
				Dedicated and detail oriented, intelligent and ambitious. Adventurer thriving in versatile environments. I’m
				excited about modern web standards. Always improving.
			</p>
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
