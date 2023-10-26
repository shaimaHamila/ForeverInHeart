import { Link } from "react-router-dom";
import Posts from "../../components/template/Posts/Posts";
import CreateMemory from "../CreateMemory/CreateMemory";

const Home = () => {
  return (
    <div>
      <div className="container ">
        <div className="add-memory mt-5 d-flex justify-content-between">
          <h3>Add Memory </h3>
          <Link to="addMemory">
            <button type="button" className="btn btn-primary btn-lg">
              Add a memory
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <Posts />
        </div>
        {/* https://www.bootdey.com/snippets/view/blog-post-grid-cards#html */}
      </div>
    </div>
  );
};
export default Home;
