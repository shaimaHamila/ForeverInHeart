import Posts from "../components/template/Posts/Posts";
import Form from "../components/template/Form/Form";
import NavBar from "../components/organisms/navBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Posts />

        <Form />
      </div>
    </div>
  );
};
export default Home;
