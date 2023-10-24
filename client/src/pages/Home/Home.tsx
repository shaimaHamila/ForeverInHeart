import NavBar from "../../components/organisms/navBar/NavBar";
import Form from "../../components/template/Form/Form";
import Posts from "../../components/template/Posts/Posts";
import CreateMemory from "../CreateMemory/CreateMemory";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Posts />
        {/* https://www.bootdey.com/snippets/view/blog-post-grid-cards#html */}
        <CreateMemory />
      </div>
    </div>
  );
};
export default Home;
