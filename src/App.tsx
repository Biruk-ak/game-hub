import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `" nav" "main"`,
          lg: `" nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside" bg="gold" hideBelow="md">
          aside
        </GridItem>
        <GridItem area="main" >
         <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
