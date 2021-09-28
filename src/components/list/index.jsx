import { useSelector } from "react-redux";

const List = () => {
  const user = useSelector((store) => store.user);
  const { name } = user;
  const { comments } = user;
  return (
    <div className="userInfo">
      <h2>{name}</h2>
      <div className="userComment">
        {comments.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default List;
