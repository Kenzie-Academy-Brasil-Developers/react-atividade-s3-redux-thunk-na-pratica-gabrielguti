import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunk";
const Input = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="userDataInput">
      <input
        type="text"
        placeholder="Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={() => dispatch(addCommentThunk(comment))}></button>
    </div>
  );
};

export default Input;
