import React, { useState } from 'react';

export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const submitTask = async () => {
        if (query === '') { return; }
    }

    return (
        <>
            <div className="flex flex-col items-center w-full max-w-[620px] py-5">
                {/* <div className="flex items-center w-full border-black border rounded-full mt-5 px-7 py-3 focus-within:ring-2"> */}
                <div className="flex items-center w-full mt-5 px-7 py-3">
                    <div className="flex w-full items-center">
                        <input
                            placeholder={'/search the scene'}
                            className={`flex-grow resize-none outline-none text-3xl`}
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        {/* <button
                            onClick={submitTask}
                            className="ml-2 bg-blue-500 text-white rounded-full w-10 h-10    flex justify-center items-center flex-shrink-0 hover:bg-blue-600"
                        >
                            {cloneElement(Icons.arrow_right, { className: 'w-5 h-5 fill-current text-white' })}
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
}