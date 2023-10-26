import { Route, Routes } from "react-router-dom";
import Form from "../components/template/Form/Form";
import Home from "../pages/Home/Home";
import NavBar from "../components/organisms/navBar/NavBar";

const PublicRoute = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addMemory" element={<Form />} />
      </Routes>
    </>
  );
};
export default PublicRoute;
