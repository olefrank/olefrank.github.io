import React from 'react';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_years'
import './Intro.css';

const Intro = () => {
	const age = differenceInCalendarMonths(Date(),new Date('1978-07-17'))
	const experienceYears = differenceInCalendarMonths(new Date(),new Date('2011-08-01')) % 12
	return (
		<div className="Intro">
			<h5 className="Intro__byline">
				{experienceYears}{experienceYears > 0 ? '+' : ''} years full time experience, AP Computer Science with top grades, experienced instructor/teacher, loves to
				hike, kayak and play jazz trumpet, {age} years old, Copenhagen based.
			</h5>

			<blockquote className="Intro__quote">
				<p>
					I am dedicated and detail oriented. Exited about modern web standards. Always learning, always improving...
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
};
export default Intro;
