import { Typography, Toolbar, AppBar, Container } from "@mui/material";
import memoriesLogo from "./../assets/png/memoriesLogo.png";
import { red } from "@mui/material/colors";
const Home = () => {
  return (
    <div>
      <Container maxWidth="xs">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h2">Memories</Typography>
            <img src={memoriesLogo} alt="Memories logo" height={60} />
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
};
export default Home;
