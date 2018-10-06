import { getDateDistanceString, getTimePlural } from './Experience';

describe('Experience', () => {
	describe('getDateDistanceString()', () => {
		it('should return nothing if distance is less than one month', () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2018-01-30');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '';

			expect(actual).toEqual(expected);
		});

		it("should return '1 month' if distance is 1 month", () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2018-02-01');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '1 month';

			expect(actual).toEqual(expected);
		});

		it("should return '1 month' if distance is more than 1 month but less than 2 months", () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2018-02-02');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '1 month';

			expect(actual).toEqual(expected);
		});

		it("should return '11 months' if distance is 11 months", () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2018-12-01');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '11 months';

			expect(actual).toEqual(expected);
		});

		it("should return '1 year' if distance is 12 months", () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2019-01-01');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '1 year';

			expect(actual).toEqual(expected);
		});

		it("should return '1 year, 1 month' if distance is 13 months", () => {
			const dateFrom = new Date('2018-01-01');
			const dateTo = new Date('2019-02-01');
			const actual = getDateDistanceString(dateFrom, dateTo);
			const expected = '1 year, 1 month';

			expect(actual).toEqual(expected);
		});
	});

	describe('getTimePlural()', () => {
		it('should return nothing if no value', () => {
			const time = 'month';
			const value = 0;
			const actual = getTimePlural(time, value);
			const expected = '';

			expect(actual).toEqual(expected);
		});

		it('should return singular if value is 1', () => {
			const time = 'month';
			const value = 1;
			const actual = getTimePlural(time, value);
			const expected = '1 month';

			expect(actual).toEqual(expected);
		});

		it('should return plural if value is 2', () => {
			const time = 'month';
			const value = 2;
			const actual = getTimePlural(time, value);
			const expected = '2 months';

			expect(actual).toEqual(expected);
		});

		it('should return nothing if value is -2', () => {
			const time = 'month';
			const value = -2;
			const actual = getTimePlural(time, value);
			const expected = '';

			expect(actual).toEqual(expected);
		});
	});
});
