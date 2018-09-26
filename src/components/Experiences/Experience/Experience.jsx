import React from 'react';
import Keywords from '../../Keywords/Keywords';
import './Experience.css';

const Experience = ({ data }) => (
	<div className="Experience">
		<h4 className="Experience__title">{data.title}</h4>
		<h5 className="Experience__company">{data.company}</h5>
		<p className="Experience__description">{data.description}</p>
		<Keywords data={data.keywords} />
	</div>
);
export default Experience;
