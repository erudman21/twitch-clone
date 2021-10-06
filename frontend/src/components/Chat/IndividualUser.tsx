interface IndividualUserProps {
  user: string;
}

const IndividualUser: React.FC<IndividualUserProps> = ({ user }) => {
  return (
    <div className="text-purple-500 capitalize font-semibold cursor-pointer hover:underline">
      {user}
    </div>
  );
};

export default IndividualUser;
