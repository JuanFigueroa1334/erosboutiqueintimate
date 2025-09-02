import React, {createContext, useState} from 'react';

export const SearchContext = createContext();
export const SearchProvider = ({childern}) => {
    const [searchText, setSearchText] = useState();
    return (
        <SearchContext.Provider value={{searchText, setSearchText}}>
            {childern}
        </SearchContext.Provider>
    );
};