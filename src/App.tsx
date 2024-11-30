import { Grid, Show, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav main'`,
        lg: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show when={useBreakpointValue({ base: false, lg: true })}>
        <GridItem area="aside">
          <SideBar></SideBar>
        </GridItem>
      </Show>

      <GridItem area="main" bg="red">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
