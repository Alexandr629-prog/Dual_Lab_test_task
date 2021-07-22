import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTerm} from "../../reducer/reducer";
import {updateRates} from "../../reducer/reducer";

import './search-panel.less'

const SearchPanel = () => {

    const term = useSelector(state => state.term);
    const fullRates = useSelector(state => state.fullRates);
    const dispatch = useDispatch()

    const onSearch = (e)=>{
        const filterRates =  fullRates.filter((rate) => {
            return rate.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
        });
        dispatch(updateRates(filterRates));
    }

    return (
        <input value={term} onChange={(e)=>{
            dispatch(setTerm(e.target.value));
            onSearch(e);
        }}
               className="form-control search-input" type="text" placeholder="enter currency name"/>
    );
};

export default SearchPanel;