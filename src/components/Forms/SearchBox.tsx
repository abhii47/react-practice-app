import React, { useRef } from "react";

export const SearchBox = ({ onSearch }: { onSearch:(term:string) => void}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSearch = (e: React.ChangeEvent) => {
        e.preventDefault();
        if(inputRef.current){
            onSearch(inputRef.current.value)
        }
    }
    
    return(
        <form onSubmit={handleSearch} className="SearchForm">
            <input type="text" placeholder="Search Post...." ref={inputRef} />
            <button type="submit">Search</button>
        </form>
    )

}