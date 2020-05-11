import React, { useState, useEffect } from 'react';
import useDebounce from './debounce';


const SearchEngine = ({ bookmarks }) => {

  // State and setter for search term
  const [query, setQuery] = useState('');
  // State and setter for search results
  const [results, setResults] = useState([]);
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  // Now we call our hook, passing in the current query value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of query.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedQuery = useDebounce(query, 500);

  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedQuery) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        searchCharacters(debouncedQuery, bookmarks).then(results => {
          // Set back to false since request finished
          setIsSearching(false);
          // Set results state
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (query) hasn't changed for more than 500ms.
    [debouncedQuery]
  );

  return (
    <div>
      <form className="pure-form">
        <input
          type="text" placeholder="Search"
          onChange={e => setQuery(e.target.value)} />
      </form>
      {isSearching && <div>Searching ...</div>}
      {results}
    </div>
  );
}

function searchCharacters(query, bookmarks) {
  return new Promise((resolve, reject) => {
    let results;
    if (query.length > 2) {
      results = <p>You searched for {query}</p>
    } else {
      results = <p>Type at least 3 letters to trigger a search</p>
    }
    resolve(results);
  });
}

export default SearchEngine;
