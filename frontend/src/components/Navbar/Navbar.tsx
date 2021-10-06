import React from "react";
import { useMeQuery } from "../../generated/graphql";
import CenterNavbar from "./CenterNavbar";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  const { data } = useMeQuery();

  return (
    <nav className="h-20 flex-shrink-0 font-semibold">
      <div className="bg-nav-gray flex shadow-nav-bar items-stretch flex-nowrap h-full">
        <LeftNavbar user={data?.me} />
        <CenterNavbar user={data?.me} />
        <RightNavbar user={data?.me} />
      </div>
    </nav>
  );
};

export default Navbar;
