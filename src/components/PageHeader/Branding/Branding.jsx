import React from 'react';
import './Branding.css';

const PageHeaderBranding = ({className}) => (
	<div className={`PageHeaderBranding ${className}`}>
		<a href="ole-frank-jensen-portrait.jpg" target="_blank">
			<img
				className="PageHeaderBranding__photo"
				src="ole-frank-jensen-portrait-square.jpg"
				alt="Portrait of Ole Frank Jensen, Senior Web Developer"
			/>
		</a>
		<div className="PageHeaderBranding__name-title">
			<h2 className="PageHeaderBranding__name ">Ole Frank Jensen</h2>
			<h4 className="PageHeaderBranding__title">Senior Web Developer</h4>
		</div>
	</div>
);
export default PageHeaderBranding;
