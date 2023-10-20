import { Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Post from "../../types/Post";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };
const Form = () => {
  const [newPost, setNewPost] = useState<Partial<Post>>({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });
  const handleSubmit = () => {
    console.log(newPost);
  };

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
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }>
              {({ onClick }) => (
                <button onClick={onClick}>Upload a file...</button>
              )}
            </UploadButton>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </div>
  );
};
export default Form;
