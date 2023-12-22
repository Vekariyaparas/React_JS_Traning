import React, { useState } from "react";
import debounce from "lodash.debounce";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (searchQuery) => {
    // Replace the URL with your actual backend API endpoint
    const apiUrl = `https://jsonplaceholder.typicode.com/todos?title=${searchQuery}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = debounce(fetchSearchResults, 500);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Call the debounced function to throttle the requests
    debouncedSearch(newQuery);
  };

  return (
    <div>
      <div className="border w-96 text-center mx-auto my-10 p-5">
        <h1 className="text-2xl text-slate-600">Search for Name</h1>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none p-1 border mt-5 rounded-lg"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      <hr />
      <div className="mt-10">
        <h1 className="text-2xl">Search List</h1>
        {searchResults.map((result) => (
          <tr>
            <td key={result.id}>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.completed}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
