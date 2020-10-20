import React, { useState, useEffect } from 'react';
import useDebounce from './debounce';

import { CategoryLink } from './nav-link';
import BookmarkLink from './bookmark-link';

import classNames from 'classnames/bind';
import styles from './search-engine.module.css'

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
      <form className={classNames(styles.wrapper, "pure-form")}>
        <div className="pure-u-1 pure-u-md-4-5">
          <input
            type="text"
            placeholder="Search"
            className="pure-input-1"
            value={query}
            onChange={e => setQuery(e.target.value)} />
        </div>
        <div className="pure-u-1 pure-u-md-1-5">
          <button className={classNames("pure-input-1", "pure-button")} onClick={e => setQuery('')} disabled={query.length < minQLenght}>
            Clear Search
          </button>
        </div>
      </form>
      {isSearching && <div>Searching ...</div>}
      {results}
    </div>
  );
}

function searchCharacters(query, bookmarks) {
  const calc_weight = function(q, res) {
    const ql = q.length;
    let weight = 0;
    for (const r of res) {
      weight += ql / r.length;
    }
    return weight;
  }

  return new Promise((resolve, reject) => {
    let output;
    if (query.length >= minQLenght) {
      let results = [];
      let re = new RegExp('\\b' + query + '.*?\\b', 'gi');
      for (const cat in bookmarks) {
        for (const bookmark of bookmarks[cat]) {
          let match_title = bookmark['title'].match(re);
          let match_descr = bookmark['description'].match(re);
          let weight = 0, found = false;
          if (match_title) {
            weight += 10 * calc_weight(query, match_title);
            found = true;
          }
          if (match_descr) {
            weight += calc_weight(query, match_descr);
            found = true;
          }
          if (found) {
            results.push(Object.assign({cat, weight}, bookmark))
          }
        }
      }
      results.sort((a, b) => a.weight >= b.weight ? -1 : 1);
      output = <div>
        <p>Your search for {query} produced {results.length} results</p>
        {results.map((bookmark, index) => <div className={styles.wrapper} key={index}>
          In category <CategoryLink name={bookmark.cat} />
          <BookmarkLink {...bookmark} />
        </div>)}
      </div>
    } else {
      output = <p>Type at least {minQLenght} letters to trigger a search</p>
    }
    resolve(output);
  });
}

export default SearchEngine;
