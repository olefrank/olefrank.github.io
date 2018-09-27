import React from 'react';
import './References.css';

const References = ({ title, data }) => {
	return (
		<div className="References">
			<h3 className="References__title">{title}</h3>
			{data &&
				data.map((ref, i) => (
					<React.Fragment key={i}>
						<blockquote className="References__blockquote">
							<p>{ref.quote}</p>
						</blockquote>
						<cite>{ref.author}</cite>
					</React.Fragment>
				))}
		</div>
	);
};
export default References;
