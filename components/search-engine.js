import React, { useState, useEffect } from 'react';
import useDebounce from './debounce';

import { CategoryLink } from './nav-link';
import BookmarkLink from './bookmark-link';

const minQLenght = 3;

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
          type="text"placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)} />
        <button className="pure-button" onClick={e => setQuery('')} disabled={query.length < minQLenght}>
          Clear Search
        </button>
      </form>
      {isSearching && <div>Searching ...</div>}
      {results}
    </div>
  );
}

function searchCharacters(query, bookmarks) {
  return new Promise((resolve, reject) => {
    let output;
    if (query.length >= minQLenght) {
      let results = {};
      let count = 0;
      let re = new RegExp(query, 'gi');
      // oooh, 3 nested for loops, not nice but will do
      for (const cat in bookmarks) {
        results[cat] = [];
        for (const bookmark of bookmarks[cat]) {
          for (const field of ['title', 'description']) {
            if (bookmark[field].match(re)) {
              results[cat].push(bookmark);
              count++;
              break;
            }
          }
        }
      }
      output = <div>
        <p>Your search for {query} produced {count} results</p>
        {Object.keys(results).map((cat, iC) => <div>
          <h2>In <CategoryLink name={cat} /> - {results[cat].length} results</h2>
          {results[cat].map((bookmark, iB) => <BookmarkLink key={`${iC}${iB}`} {...bookmark} />)}
        </div>)}
      </div>
    } else {
      output = <p>Type at least {minQLenght} letters to trigger a search</p>
    }
    resolve(output);
  });
}

export default SearchEngine;
