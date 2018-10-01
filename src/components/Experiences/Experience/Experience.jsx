import React from 'react';
import Keywords from '../../Keywords/Keywords';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import format from 'date-fns/format';
import './Experience.css';

const Experience = ({ data }) => {
	const distance = getDateDistanceString(data.dateFrom, data.dateTo);

	return (
		<li className="Experience event" data-date={data.dateFrom.getFullYear()}>
			<h4 className="Experience__title">{data.title}</h4>
			<h5 className="Experience__company">{data.company}</h5>
			<p className="Experience__date">{`${format(data.dateFrom, 'YYYY')} - ${format(data.dateTo,'YYYY')} (${distance})`}</p>
			<p className="Experience__description">{data.description}</p>
			<Keywords data={data.keywords} />
		</li>
	);
};

const getDateDistanceString = (dateFrom, dateTo) => {
	const diff = differenceInCalendarMonths(dateTo, dateFrom);
	const years = Math.floor(diff / 12);
	const months = diff % 12;
	if (!years) {
		if (!months) {
			return format(dateFrom, 'MMM YYYY');
		} else {
			return getTimePlural('month', months);
		}
	} else {
		return `${getTimePlural('year', years)}${months ? ', ' + getTimePlural('month', months) : ''}`;
	}
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
