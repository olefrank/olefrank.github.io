import React from 'react';
import './References.css';

const References = ({ title, data }) => {
	console.log(data);
	return (
		<div className="References">
			<h3>{title}</h3>
			{data &&
				data.map((ref, i) => (
					<React.Fragment key={i}>
						<blockquote>
							<p>{ref.quote}</p>
						</blockquote>
						<cite>{ref.author}</cite>
					</React.Fragment>
				))}
		</div>
	);
};
export default References;
