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

import './App.css';

library.add(fab, faEnvelope);

class App extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<Intro />
				<section className="App__experiences">
					<Experiences title="Experience" data={experiences} />
				</section>
				<section className="App__educations">
					<Experiences title="Education" data={educations} />
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
