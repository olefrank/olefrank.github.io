import React from 'react';
import Keywords from '../../Keywords/Keywords';
import './Experience.css';

const Experience = ({ data }) => (
	<li className="Experience event" data-date={data.dateFrom.getFullYear()}>
		<h4 className="Experience__title">{data.title}</h4>
		<h5 className="Experience__company">{data.company}</h5>
		<p className="Experience__description">{data.description}</p>
		<Keywords data={data.keywords} />
	</li>
);
export default Experience;
