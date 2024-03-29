import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
// import {  createAsyncThunk } from "@reduxjs/toolkit";
// import { client } from "../../api/client";

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=> {
//   const response = await client.get("/fakeApi/posts");
//   return response.data
// })

const initialState = [
  {
    posts: [],
    status: "idle",
    error: null,
    id: "1",
    title: "First post",
    content: "Hello",
    user: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  // {
  //   id: "2",
  //   title: "Second post",
  //   content: "More text",
  //   user: "2",
  //   date: sub(new Date(), { minutes: 5 }).toISOString(),
  //   reactions: {
  //     thumbsUp: 0,
  //     hooray: 0,
  //     heart: 0,
  //     rocket: 0,
  //     eyes: 0,
  //   },
  // },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },

    //     extraReducers(builder){
    //       builder
    //       .addCase(fetchPosts.pending, (state, action)=> {
    //         state.status = "Loading"
    //       })
    //       .addCase(fetchPosts.fulfilled, (state, action )=> {
    //         state.status = "Succeeded"
    //         state.posts = state.posts.concat(action.payload)
    //       })
    //       .addCase(fetchPosts.rejected, (state , action )=> {
    //         state.status = "Failed"
    //         state.error = action.error.message
    //       })
    //     }

    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // const existingPost = state.posts.find((post) => post.id === postId);
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      // const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;

// export const selectAllPosts = (state) => state.posts.posts;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId);
