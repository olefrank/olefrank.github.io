import React from 'react';
import './Branding.css';

const PageHeaderBranding = () => (
	<div className="PageHeaderBranding">
		<img
			className="PageHeaderBranding__photo"
			src="ole-frank-jensen-portrait-square.jpg"
			alt="Portrait of Ole Frank Jensen, Senior Web Developer"
		/>
		<div className="PageHeaderBranding__name-title">
			<h1 className="PageHeaderBranding__name ">Ole Frank Jensen</h1>
			<h4 className="PageHeaderBranding__title">Senior Web Developer</h4>
		</div>
	</div>
);
export default PageHeaderBranding;
