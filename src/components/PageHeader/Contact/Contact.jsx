import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

const PageHeaderContact = ({className}) => (
	<div className={`PageHeaderContact ${className}`}>
		<a href="https://www.facebook.com/ole.f.jensen.7" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={['fab', 'facebook']} />
		</a>
		<a href="https://www.linkedin.com/in/olefrankjensen/" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={['fab', 'linkedin']} />
		</a>
		<a href="https://github.com/olefrank" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={['fab', 'github']} />
		</a>
		<a href="skype:olefrankjensen" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={['fab', 'skype']} />
		</a>
		<a href="mailto:olefrankjensen@gmail.com" target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon="envelope" />
		</a>
	</div>
);
export default PageHeaderContact;
