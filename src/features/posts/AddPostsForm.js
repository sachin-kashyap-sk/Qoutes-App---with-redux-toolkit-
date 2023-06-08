import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [userId, setUserId] = useState("");
  const [userId] = useState("");

  const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  // const onAuthorChanged = (e) => setUserId(e.target.value);

  const OnSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);

  // const usersOptions = users.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {/* {user.name} */}
  //   </option>
  // ));

  return (
    <section>
      <h2>Add Your New Posts</h2>
      <form>
        <label className="label" htmlFor="post Title:">
          Post Title
        </label>

        <input
          className="Input"
          placeholder="Add your title"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        ></input>
        {/* <label className="label" htmlFor="postAuthor">
          Author
        </label>
        <select
          className="options"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select> */}

        <label className="label" htmlFor="postContent">
          Content
        </label>
        <textarea
          className="contents"
          placeholder=" Add your content"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button
          className="button"
          type="button"
          onClick={OnSavePostClicked}
          disabled={!canSave}
        >
          savePost
        </button>
      </form>
    </section>
  );
};
export default AddPostsForm;
