import React from 'react';
import Keywords from '../Keywords/Keywords';

const ExperienceItem = ({ data }) => (
	<div className="ExperienceItem">
		<h3>
			<span className="ExperienceItem__title">{data.title}</span>
			<span className="ExperienceItem__company">{` @ ${data.company}`}</span>
		</h3>
		<p className="ExperienceItem__description">{data.description}</p>
		<Keywords data={data.keywords} />
	</div>
);
export default ExperienceItem;
