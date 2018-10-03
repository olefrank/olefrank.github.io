import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css';

class PageHeaderMenu extends Component {
	state = {
		menuOpen: false,
	}
	render() {
		const { className } = this.props;
		const { menuOpen } = this.state;
		return (
			<div className={`PageHeaderMenu ${className}`} onClick={this.toggleMenu}>
				<FontAwesomeIcon icon={['fas', 'bars']} className="PageHeaderMenu__icon" />
				<ul className="PageHeaderMenu__list" hidden={!menuOpen}>
					<li className="PageHeaderMenu__list-item"><a href="/#">About</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#experience">Experience</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#education">Education</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#volounteering">Volounteering</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#courses">Courses</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#skills">Skills</a></li>
					<li className="PageHeaderMenu__list-item"><a href="#references">References</a></li>
				</ul>
			</div>
		);
	}
	toggleMenu = () => {
		this.setState({menuOpen: !this.state.menuOpen}, () => console.log('this.state.menuOpen',this.state.menuOpen))
	}
}

export default PageHeaderMenu;
