import React from 'react';
import Keywords from '../../Keywords/Keywords';

const Experience = ({ data }) => (
	<div className="Experience">
		<h3>
			<span className="Experience__title">{data.title}</span>
			<span className="Experience__company">{` @ ${data.company}`}</span>
		</h3>
		<p className="Experience__description">{data.description}</p>
		<Keywords data={data.keywords} />
	</div>
);
export default Experience;
