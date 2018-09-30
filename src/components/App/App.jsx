import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PageHeader from 'components/PageHeader/PageHeader';
import Intro from 'components/Intro/Intro';
import Keywords from 'components/Keywords/Keywords';
import Experiences from 'components/Experiences/Experiences';
import References from 'components/References/References';
import experiences from 'data/experiences';
import educations from 'data/educations';
import skills from 'data/skills';
import references from 'data/references';
import volounteering from 'data/volounteering';
import throttle from 'lodash.throttle';

import './App.css';

library.add(fab, faEnvelope);

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			headerCollapsed: false,
		}
		this.throttleScroll = throttle(this.handleScroll, 10);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.throttleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.throttleScroll);
	}

	handleScroll = e => {
		let headerCollapsed = false;

			if (!headerCollapsed && window.scrollY >= 16) {
				headerCollapsed = true;
			} else if (headerCollapsed && window.scrollY < 16) {
				headerCollapsed = false;
			}
			this.setState({ headerCollapsed });
	};
	
	render() {
		const { headerCollapsed } = this.state;
		return (
			<div className={`App ${headerCollapsed ? 'push-content' : ''}`}>
				<PageHeader headerCollapsed={headerCollapsed} />
				<Intro />
				<section className="App__experiences">
					<Experiences title="Experience" data={experiences} />
				</section>
				<section className="App__educations">
					<Experiences title="Education" data={educations} />
				</section>
				<section className="App__volounteering">
					<Experiences title="Volounteering" data={volounteering} />
				</section>
				<section className="App__skills">
					<Keywords title="Skills" data={skills} />
				</section>
				<References title="References" data={references} />
				<footer className="App__footer" />
			</div>
		);
	}
}

export default App;
