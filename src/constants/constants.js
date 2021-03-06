const IS_LOADING = 'IS_LOADING';
const IS_FETCHING_ERROR = 'IS_FETCHING_ERROR';
const SET_RATES_USD = 'SET_RATES_USD';
const SET_RATES_EUR = 'SET_RATES_EUR';
const SET_RATES_RUR = 'SET_RATES_RUR';
const SET_DATE_START = 'SET_DATE_START';
const SET_DATE_END = 'SET_DATE_END';
const SET_TERM = 'SET_TERM';
const SET_DATES = 'SET_DATES';
const UPDATE_RATES = 'UPDATE_RATES'

const USD_ID = 145;
const EUR_ID = 292;
const RUR_ID = 298;

const today = new Date();
const weekAgo = new Date();
weekAgo.setDate(today.getDate()-19);//test data
const DATE_START = weekAgo.toISOString().slice(0, 10);
const DATE_END = today.toISOString().slice(0, 10);

export{
    DATE_START,
    DATE_END,
    USD_ID,
    EUR_ID,
    RUR_ID,
    IS_FETCHING_ERROR,
    IS_LOADING,
    SET_RATES_USD,
    SET_RATES_EUR,
    SET_RATES_RUR,
    SET_DATE_END,
    SET_DATE_START,
    SET_TERM,
    SET_DATES,
    UPDATE_RATES,
};

