import { Typography, AppBar, Container, Grow, Grid } from "@mui/material";
import memoriesLogo from "./../assets/png/memoriesLogo.png";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";

const Home = () => {
  return (
    <div>
      <Container maxWidth="xs">
        <AppBar position="static" color="inherit">
          <Typography variant="h2">Memories</Typography>
          <img src={memoriesLogo} alt="Memories logo" height={60} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={2}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};
export default Home;
