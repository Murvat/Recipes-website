import { useState } from "react";


const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('');
    function handleKey(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    function handleSubmit(e) {
        cb(value);
    }
    return <div className="row">
        <div className="input-field col s12">
            <input type="search"
                id='search-field'
                placeholder="search"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value} />
            <button
                onClick={handleSubmit}
                className="btn"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}></button>
        </div>

    </div>

};

export default Search;