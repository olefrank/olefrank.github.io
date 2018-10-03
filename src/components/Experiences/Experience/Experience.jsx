import React from 'react';
import Keywords from '../../Keywords/Keywords';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import format from 'date-fns/format';
import './Experience.css';
import { isSameMonth, isSameYear } from 'date-fns';

const Experience = ({ data }) => {
	const dates = getDatesString(data.dateFrom, data.dateTo);
	const distance = getDateDistanceString(data.dateFrom, data.dateTo);

	return (
		<li className="Experience event" data-date={data.dateFrom.getFullYear()}>
			<h4 className="Experience__title">{data.title}</h4>
			<h5 className="Experience__company">{data.company}</h5>
			<p className="Experience__date">{`${dates} ${distance ? distance : ''}`}</p>
			<p className="Experience__description">{data.description}</p>
			<Keywords data={data.keywords} />
		</li>
	);
};

const getDatesString = (dateFrom, dateTo) => {
	if (isSameMonth(dateFrom, dateTo)) {
		return format(dateFrom, 'MMM YYYY');
	}
	return `${format(dateFrom, 'MMM YYYY')} - ${format(dateTo, 'MMM YYYY')}`;
};

const getDateDistanceString = (dateFrom, dateTo) => {
	const diff = differenceInCalendarMonths(dateTo, dateFrom);
	const years = Math.floor(diff / 12);
	const months = diff % 12;
	let result = '';
	if (!years) {
		if (!months) {
			return;
		} else {
			result = getTimePlural('month', months);
		}
	} else {
		result = `${getTimePlural('year', years)}${months ? ', ' + getTimePlural('month', months) : ''}`;
	}
	return `(${result})`;
};

const getTimePlural = (time, value) => {
	if (!value) {
		return '';
	} else if (value === 1) {
		return `${value} ${time}`;
	} else {
		return `${value} ${time}s`;
	}
};

export default Experience;
