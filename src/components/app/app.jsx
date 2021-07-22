import React from 'react';
import TableRates from "../table-rates/table-rates";
import Calendar from '../calendar/calendar'
import SearchPanel from "../search-panel/search-panel";

const App = () => {
    return (
        <div>
            <Calendar/>
            <SearchPanel/>
            <TableRates/>
        </div>
    );
};

export default App;