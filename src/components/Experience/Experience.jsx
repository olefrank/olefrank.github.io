import React from 'react';
import ExperienceItem from 'components/ExperienceItem/ExperienceItem';
import './Experience.css';

const Experience = ({title, data}) => (
	<div className="Experience">
	<h3>{title}</h3>
	{data && data.map((exp, i) => <ExperienceItem key={i} data={exp} />)}</div>
);
export default Experience;
