import React from 'react';
import Experience from './Experience/Experience';
import './Experiences.css';

const Experiences = ({ title, data }) => (
	<div className="Experiences">
		<h3>{title}</h3>
		{data && data.map((exp, i) => <Experience key={i} data={exp} />)}
	</div>
);
export default Experiences;
