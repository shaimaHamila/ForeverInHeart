import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import Post from "../../types/Post";
import { RootState } from "../../store/store";
const api = "http://localhost:5000/post";

interface InitialState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    posts: Post[];
    error: string | null;
}
const initialState: InitialState = {
    loading: 'idle',
    posts: [],
    error: "",
}

export const fetchAllPosts = createAsyncThunk<Post[]>(
    "posts/fetchAllPosts",
    async () => {
        try {
            const posts = await axios.get(api);
            console.log("posts.data.data", posts.data.data)
            return posts.data.data

        } catch (err: any) {
            throw err
        }
    }
)
export const addPost = createAsyncThunk<Post, Partial<Post>>(

    "post/addPost",
    async (newPost) => {
        try {
            return await axios.post(api, newPost).then(res => res.data)
        } catch (err) {
            throw err;
        }
    })
export const editPost = createAsyncThunk<Post, Partial<Post>>(
    "post/editPost",
    async (updatedPost) => {
        try { return await axios.patch(`${api}/${updatedPost._id}`, updatedPost).then(res => res.data) }
        catch (err) {
            throw err
        }
    }
)
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (id: string) => {
        try {
            return await axios.patch(`${api}/${id}`, { isDeleteed: true }).then(res => res.data)
        }
        catch (err) {
            throw err
        }
    }
)

const postSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //Fetch all Posts
        builder.addCase(fetchAllPosts.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(fetchAllPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
            state.loading = "succeeded";
            state.posts = action.payload;
        })
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || "Something went wrong";
        })

        //Add a post
        builder.addCase(addPost.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
            state.loading = "succeeded";
            state.posts.push(action.payload);
        })
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || "Something went wrong";
        })
        // Edit a Post
        builder.addCase(editPost.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(editPost.fulfilled, (state, action: PayloadAction<Post>) => {
            state.loading = "succeeded";
            const index = state.posts.findIndex(post => post._id == action.payload._id)
            if (index !== -1) {
                state.posts[index] = action.payload
            }
        })
        builder.addCase(editPost.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || "Something went wrong";
        })
        //Delete A Post
        builder.addCase(deletePost.pending, (state) => {
            state.loading = 'pending';
        })
        builder.addCase(deletePost.fulfilled, (state, action: PayloadAction<Post>) => {
            state.loading = "succeeded";
            // Find the index of the post to delete
            const index = state.posts.findIndex(post => post._id === action.payload._id);
            if (index !== -1) {
                // Remove the post at the found index
                state.posts.splice(index, 1);
            }

        })
        builder.addCase(deletePost.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message || "Something went wrong";
        })
    }
})

export const selectPosts = (state: RootState) => state.posts;
export default postSlice.reducer;
