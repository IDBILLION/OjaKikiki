import { useState, useEffect } from "react";
const searchItem = [House, Apartment, Pet-Service, Driver];
const filteredItem = searchItem.filter((searchItem) => {return searchItem})
export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    function handleSubmit (e) {
        e.preventDefault()
    }
    useEffect(() => {
        if (query.trim() === '') 
            setResult([]);
            return;
        const timeoutId = setTimeout(async () => {
            try{
                const response = await fetch(`{/* i need to put my API UrL here for search */}`);
        const data = await response.json();
        setResult(data.map(property => property.name))
            }
            catch (error){console.error(error)}
        }, 700);
 return () => clearTimeout(timeoutId);
    }, [query]);
    return(
        <>
        <div id="search-container">
<form onSubmit={handleSubmit}>
    <label htmlFor="search-input">Search</label>
    <input id="search-input" type="search" placeholder="Search..." aria-describedby="search-description" value={query} onChange={(e) => setQuery(e.target.value)}/>
</form>
<div id="result">
    {result.length > 0 ? (result.map((item, index) => (<p key={index} className="result-item">{item}</p>))) : (<p>No Result found</p>)}
</div>
        </div>
        </>
    )
}
