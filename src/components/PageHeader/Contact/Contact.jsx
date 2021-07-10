import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import './Contact.css';

const PageHeaderContact = ({ className }) => (
	<div className={`PageHeaderContact ${className}`}>
		<IconButton
			component={Link}
			aria-label="facebook"
			href="https://www.facebook.com/ole.f.jensen.7"
			target="_blank"
			rel="noopener noreferrer"
			className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'facebook']} className="PageHeaderContact__icon" />
		</IconButton>

		<IconButton
			component={Link}
			aria-label="linkedin"
			href="https://www.linkedin.com/in/olefrankjensen/"
			target="_blank"
			rel="noopener noreferrer"
			className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'linkedin']} className="PageHeaderContact__icon" />
		</IconButton>

		<IconButton
			component={Link}
			aria-label="github"
			href="https://github.com/olefrank"
			target="_blank"
			rel="noopener noreferrer"
			className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'github']} className="PageHeaderContact__icon" />
		</IconButton>

		<IconButton
			component={Link}
			aria-label="stack overflow"
			href="https://stackoverflow.com/users/1736012/olefrank?tab=profile"
			target="_blank"
			rel="noopener noreferrer"
			className="PageHeaderContact__link">
			<FontAwesomeIcon icon={['fab', 'stack-overflow']} className="PageHeaderContact__icon" />
		</IconButton>
	</div>
);
export default PageHeaderContact;
