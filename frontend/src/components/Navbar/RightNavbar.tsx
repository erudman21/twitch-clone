import { NBProps } from "../../types/NavbarProps";
import PrimeLoot from "./PrimeLoot";
import RightNavbarAuthenticated from "./RightNavbarAuthenticated";
import RightNavbarNotAuthenticated from "./RightNavbarNotAuthenticated";

const RightNavbar: React.FC<NBProps> = ({ user }) => {
  return (
    <div className="flex flex-grow flex-shrink w-full items-center justify-end">
      <PrimeLoot />
      {user ? (
        <RightNavbarAuthenticated user={user} />
      ) : (
        <RightNavbarNotAuthenticated />
      )}
    </div>
  );
};

export default RightNavbar;
