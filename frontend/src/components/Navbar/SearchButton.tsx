import { RiSearchLine } from "react-icons/ri";

const SearchButton = () => {
  return (
    <button className="inline-flex relative items-center content-center align-middle overflow-hidden no-underline whitespace-nowrap select-none rounded-search-button text-search-box h-input-size-large bg-search-button text-search-button-disabled opacity-50">
      <div className="flex content-center items-center p-search-button">
        <div className="infline-flex items-center w-search-button">
          <div className="infline-flex item-center h-full w-full">
            <div className="relative w-full overflow-hidden">
              <RiSearchLine className="h-search-button w-search-button" />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SearchButton;
