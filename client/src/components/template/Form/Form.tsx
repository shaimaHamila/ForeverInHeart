import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Post from "../../../types/Post";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import store from "../../../store/store";
import { addPost } from "../../../features/post/Post";
// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free",
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const Form = () => {
  const [newPost, setNewPost] = useState<Partial<Post>>({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const [uploadedFile, setUploadedFile] = useState("");
  const handleSubmit = () => {
    console.log(newPost);
    store.dispatch(addPost(newPost));
  };
  const options = { multi: false, maxFileCount: 1 };

  return (
    <div>
      <Paper>
        <form
          autoComplete="off"
          noValidate
          className=""
          onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={newPost.creator}
            onChange={(event) => {
              setNewPost({
                ...newPost,
                creator: event.target.value,
              });
            }}></TextField>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={newPost.title}
            onChange={(event) => {
              setNewPost({
                ...newPost,
                title: event.target.value,
              });
            }}></TextField>
          <TextField
            name="message"
            variant="outlined"
            label="message"
            fullWidth
            value={newPost.message}
            onChange={(event) => {
              setNewPost({
                ...newPost,
                message: event.target.value,
              });
            }}></TextField>
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={newPost.tags}
            onChange={(event) => {
              setNewPost({
                ...newPost,
                tags: [event.target.value],
              });
            }}></TextField>
          <div>
            <UploadButton
              uploader={uploader}
              options={options}
              onComplete={(files) => {
                const uploadedFile = files[0]; // Assuming only one file is uploaded
                if (uploadedFile) {
                  setNewPost({
                    ...newPost,
                    selectedFile: uploadedFile.fileUrl,
                  }); // Set the uploaded file URL
                  alert("File uploaded successfully");
                }
              }}>
              {({ onClick }) => (
                <button onClick={onClick}>Upload a file...</button>
              )}
            </UploadButton>
          </div>
          <img src={newPost.selectedFile} alt="" />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </div>
  );
};
export default Form;
