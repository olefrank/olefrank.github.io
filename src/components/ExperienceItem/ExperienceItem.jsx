import React from 'react';
import Keyword from '../Keyword/Keyword';
import './ExperienceItem.css';

const ExperienceItem = ({ data }) => (
	<div className="ExperienceItem">
		<h3>
			<span className="ExperienceItem__title">{data.title}</span>
			<span className="ExperienceItem__company">{` @ ${data.company}`}</span>
		</h3>
		<p className="ExperienceItem__description">{data.description}</p>
		<ul className="ExperienceItem__keywords">{data.keywords && data.keywords.map((keyword, i) => <Keyword key={i} data={keyword} />)}</ul>
	</div>
);
export default ExperienceItem;
