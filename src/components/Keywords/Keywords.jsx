import React from 'react';
import Keyword from './Keyword/Keyword';
import './Keywords.css';

const Keywords = ({ title, data }) => (
	<div className="Keywords">
		{title && <h3 className="Keywords__title">{title}</h3>}
		<ul className="Keywords__list">{data && data.map((keyword, i) => <Keyword key={i} data={keyword} />)}</ul>
	</div>
);
export default Keywords;
