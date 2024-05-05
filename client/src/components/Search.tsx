import React, { useState } from 'react';

export const SearchBar = () => {
    const [query, setQuery] = useState('');
    return (
        <>
            <div className="flex flex-col items-center w-full max-w-[620px] py-5">
                <div className="flex items-center w-full mt-5 px-7 py-3">
                    <div className="flex w-full items-center">
                        <input
                            placeholder={'/search the scene'}
                            className={`flex-grow resize-none outline-none text-3xl`}
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}