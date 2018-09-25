import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PageHeader from 'components/PageHeader/PageHeader';
import Intro from 'components/Intro/Intro';
import Experience from 'components/Experience/Experience';
import experiences from 'data/experiences';
import educations from 'data/educations';

import './App.css';

library.add(fab, faEnvelope);

class App extends Component {
	render() {
		return (
			<div className="App">
				<PageHeader />
				<Intro />
				<Experience title="Experience" data={experiences} />
				<Experience title="Education" data={educations} />
			</div>
		);
	}
}

export default App;
