import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _, { filter } from 'lodash';
import { reset } from 'yargs';



function TheList(props) {
    const {filterText} = props;

    const items = ["banana", "apple", "pinapple", "watermelon", "melon"]

    return (
        <div>
            <ul>
                {items.map(item => item.includes(filterText) && (<li>{item}</li>))}
            </ul>
        </div>);
}

function Filter(props) {
    const {setFilterText} = props;
    return (
        <div>
            <input onChange={e => setFilterText(e.target.value)}/>
        </div>
    );
}

const App = () => {
    const [filterText, setFilterText] = useState("");

    return (
        <div className="App">
            <Filter setFilterText={setFilterText}/>
            <TheList filterText={filterText}/>
        </div>
    )
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
