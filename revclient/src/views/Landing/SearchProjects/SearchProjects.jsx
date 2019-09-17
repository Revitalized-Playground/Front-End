import React, { useState } from 'react';

const SearchProjects = () => {
    
    const [locationInput, setInput] = useState("");
    
    return (
        <section className="search-projects-near-you">
        <form
          onSubmit={event => {
            event.preventDefault();
            setInput("");
          }}
          className="search-projects"
        >
          <h2>
            Search for Apprenticeship
            <br /> Projects Near You!
          </h2>
          <p className="description">
            Explore various projects trending in your <br />
            local area and be the first to see what's going on.
          </p>
          <input
            type="text"
            placeholder="Enter Location"
            value={locationInput}
            onChange={e => setInput(e.target.value)}
          />
          <button>Search Now!</button>
        </form>
        <div className="fake-map">My totally fake map</div>
      </section>
    );
};

export default SearchProjects;