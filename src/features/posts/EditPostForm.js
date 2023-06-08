import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postSlice";
import { useHistory } from "react-router-dom";

const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
    );
  // (state) => selectPostById(state, postId)

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label className="label" htmlFor="postTitle">
          Post Title
        </label>
        <input
          className="Input"
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your Mind"
          value={title}
          onChange={onTitleChanged}
        ></input>

        <label className="label" htmlFor="postContent">
          Content
        </label>
        <textarea
          className="contents"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button className="button" type="button" onClick={onSavePostClicked}>
        save post
      </button>
    </section>
  );
};

export default EditPostForm;
