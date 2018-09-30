import React from 'react';
import Keywords from '../../Keywords/Keywords';
import './Experience.css';

const Experience = ({ data }) => {
	const distance = getDateDistanceString(data.dateFrom, data.dateTo);

	return (
		<li className="Experience event" data-date={data.dateFrom.getFullYear()}>
			<h4 className="Experience__title">{data.title}</h4>
			<h5 className="Experience__company">
				{data.company}
				<span className="Experience__date">({distance})</span>
			</h5>
			<p className="Experience__description">{data.description}</p>
			<Keywords data={data.keywords} />
		</li>
	);
};

const getDateDistanceString = (dateFrom, dateTo) => {
	return `${dateFrom.getFullYear()} - ${dateTo.getFullYear()}`
};
export default Experience;
