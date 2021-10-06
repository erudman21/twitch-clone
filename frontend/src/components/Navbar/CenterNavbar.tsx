import { NBProps } from "../../types/NavbarProps";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const CenterNavbar: React.FC<NBProps> = () => {
  return (
    <div className="flex flex-grow flex-shrink w-full items-center justify-center">
      <div className="relative flex-basis ml-8 mr-8">
        <div className="max-w-search-bar">
          <div className="relative z-10">
            <div className="p-2">
              <div className="flex w-full">
                <div className="flex-grow mr-px">
                  <div className="relative">
                    <SearchBox />
                  </div>
                </div>
                <SearchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNavbar;
