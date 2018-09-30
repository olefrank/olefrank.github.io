import React from 'react';
import Experience from './Experience/Experience';
import './Experiences.css';

const Experiences = ({ title, data }) => (
	<div className="Experiences">
		<h3 className="Experiences__title">{title}</h3>
		<ul className="timeline">
			{data && data.sort((a, b) => a.dateFrom < b.dateFrom).map((exp, i) => <Experience key={i} data={exp} />)}
		</ul>
	</div>
);
export default Experiences;
