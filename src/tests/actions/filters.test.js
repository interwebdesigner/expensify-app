import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

// SET_TEXT_FILTER x 2
test('should generate set text filter action object with provided data', () => {
    const text = 'Something In';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter action object with default data', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
// SORT_BY_DATE
test('should generate set sort by date action object', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

// SORT_BY_AMOUNT
test('should generate set sort by amount action object', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});