import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PageHeader from 'components/PageHeader/PageHeader';
import Intro from 'components/Intro/Intro';
import Keywords from 'components/Keywords/Keywords';
import Experiences from 'components/Experiences/Experiences';
import experiences from 'data/experiences';
import educations from 'data/educations';
import skills from 'data/skills';

import './App.css';

library.add(fab, faEnvelope);

class App extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<Intro />
				<Experiences title="Experience" data={experiences} />
				<Experiences title="Education" data={educations} />
				<div className="App__keywords">
					<Keywords title="Skills" data={skills} />
				</div>
			</div>
		);
	}
}

export default App;
