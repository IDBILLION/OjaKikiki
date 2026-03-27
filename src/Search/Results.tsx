import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import footballers from "./Searchdocs";

    const FootballerSearch = () => {
const [query, setQuery] = useState('');
const [result, setResult] = useState([]);
const debouncedQuery = useDebounce(query, 1000);

useEffect(() => {
  if (query.trim() === "") {
    setResult([]);
    return;
  }
  const timeoutId = setTimeout(async () => { try { const response = await fetch("./Searchdocs");
    const data = await response.json();
     setResults(data.map((football) => football.name));
    } catch (error) {
      console.error(error);
    }}, 1000);
    return () => clearTimeout(timeoutId);
}, [debouncedQuery]);
const handleSubmit = (e) => {
    e.preventDefault()
}
return(
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Football search app</h1>
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="input search" />
        </form>
        <div>
        {result.length > 0 ? (
    result.map((item, index) => (
      <p key={index} className="result-item">
        {item}
      </p>
    ))
  ) : (
    <p>No results found</p>
  )}
  </div>
    </div>
    </>
);
    }
    export default FootballerSearch;