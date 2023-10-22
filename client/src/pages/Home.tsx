import Posts from "../components/template/Posts/Posts";
import Form from "../components/template/Form/Form";
import NavBar from "../components/organisms/navBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Posts />
        {/* https://www.bootdey.com/snippets/view/blog-post-grid-cards#html */}
        <Form />
      </div>
    </div>
  );
};
export default Home;
