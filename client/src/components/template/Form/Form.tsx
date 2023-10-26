import { useState } from "react";
import Post from "../../../types/Post";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import store from "../../../store/store";
import { addPost } from "../../../features/post/Post";
import "./Form.scss";
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

  const handleSubmit = () => {
    console.log(newPost);
    store.dispatch(addPost(newPost));
  };
  const options = { multi: false, maxFileCount: 1 };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="mb-4">Add A Memory</h2>
        <div className="mb-3">
          <label htmlFor="creator" className="form-label">
            Creator
          </label>
          <input
            type="text"
            className="form-control"
            id="creator"
            aria-describedby="creator"
            value={newPost.creator}
            onChange={(event) =>
              setNewPost({
                ...newPost,
                creator: event.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Your Memory title
          </label>
          <input
            type="title"
            className="form-control"
            id="title"
            value={newPost.title}
            onChange={(event) =>
              setNewPost({ ...newPost, title: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="memory-text">
            Forever in heart memorys 💌
          </label>

          <textarea
            className="form-control"
            placeholder="Immortalize the moment 💌"
            id="memory-text"
            style={{ height: "200px" }}
            value={newPost.message}
            onChange={(event) =>
              setNewPost({ ...newPost, message: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="memory-tag">
            Enter Tags:
          </label>
          <input
            type="text"
            className="form-control"
            id="memory-tag"
            placeholder="Press Enter to add a memory tag"
            value={newPost.tags}
            onChange={(event) =>
              setNewPost({
                ...newPost,
                tags: [event.target.value],
              })
            }
          />
        </div>
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
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onClick}>
                Upload a file...
              </button>
            )}
          </UploadButton>
        </div>
        {newPost.selectedFile && (
          <img
            src={newPost.selectedFile}
            className="img-thumbnail mb-3 uploaded-memory-image"
            alt="memory"
          />
        )}

        <div className="d-flex align-items-center justify-content-end gap-2 ">
          <button className="btn btn-primary btn-lg" type="submit">
            Submit
          </button>
          <button className="btn  btn-outline-danger btn-lg" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
