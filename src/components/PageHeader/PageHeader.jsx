import React, { Component } from 'react';
import PageHeaderBranding from './Branding/Branding';
import PageHeaderContact from './Contact/Contact';
import PageHeaderMenu from './Menu/Menu';
import './PageHeader.css';

class PageHeader extends Component {
	render() {
		const { headerCollapsed } = this.props;

		return (
			<header className={`PageHeader ${headerCollapsed ? 'headerCollapsed' : ''}`}>
				<PageHeaderBranding className={`${headerCollapsed ? 'headerCollapsed' : ''}`} />
				<PageHeaderContact className={`${headerCollapsed ? 'headerCollapsed' : ''}`} />
				<PageHeaderMenu className={`${headerCollapsed ? 'headerCollapsed' : ''}`} />
			</header>
		);
	}
}
export default PageHeader;
