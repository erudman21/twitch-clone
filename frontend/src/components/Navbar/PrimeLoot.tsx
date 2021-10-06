import React from "react";
import { CgCrown } from "react-icons/cg";

const PrimeLoot = () => {
  return (
    <div className="flex-grow-0 flex-shrink-0 ml-2 mr-2 self-center flex-nowrap">
      <div className="relative">
        <div className="inline-block relative">
          <div className="inline-flex">
            <button className="inline-flex items-center justify-center select-none h-12 w-12 rounded-left-nav-bar text-text-input bg-transparent relative align-middle overflow-hidden whitespace-nowrap font-semibold text-button-text hover:bg-nav-dots-background-hover">
              <div className="inline-flex items-center h-full">
                <div className="relative overflow-hidden">
                  <CgCrown className="w-8 h-8" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeLoot;
