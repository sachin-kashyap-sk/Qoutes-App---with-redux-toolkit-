import { Fragment } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "./app/Navbar";

import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import AddPostsForm from "./features/posts/AddPostsForm";
import EditPostForm from "./features/posts/EditPostForm";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <AddPostsForm />
                <PostsList />
              </Fragment>
            )}
          ></Route>
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
