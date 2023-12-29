import { FaRegCircleUser } from "react-icons/fa6";

const Comment = ({ data }) => {

  const { name,text,replies } = data;

  return (
    <div className="flex items-center">
    <div>
      <p className="text-2xl mt-2">
        <FaRegCircleUser />
      </p>
    </div>
    <div className="p-2">
      <p>{name}</p>
      <p>{text}</p>
    </div>
    </div>
  );
};

export default Comment;
