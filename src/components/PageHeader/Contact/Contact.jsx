import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

const PageHeaderContact = ({className}) => (
	<div className={`PageHeaderContact ${className}`}>
		<a href="https://www.facebook.com/ole.f.jensen.7" target="_blank" rel="noopener noreferrer" className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'facebook']} className="PageHeaderContact__icon" />
		</a>
		<a href="https://www.linkedin.com/in/olefrankjensen/" target="_blank" rel="noopener noreferrer" className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'linkedin']} className="PageHeaderContact__icon" />
		</a>
		<a href="https://github.com/olefrank" target="_blank" rel="noopener noreferrer" className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'github']} className="PageHeaderContact__icon" />
		</a>
	</div>
);
export default PageHeaderContact;
