import { useState } from "react";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <input
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
      }}
      aria-label="search input"
      aria-haspopup="grid"
      type="search"
      autoCorrect="off"
      autoCapitalize="off"
      placeholder="Search"
      maxLength={150}
      spellCheck="false"
      className={
        "font-sans font-semibold appearance-none leading-normal block w-full h-input-size-large p-search-box rounded-search-box text-search-box text-area-input-default"
      }
    />
  );
};

export default SearchBox;
