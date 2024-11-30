import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGeneres";
import PlatformSelector from "./component/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenere] = useState<Genre | null>(null)
  return (
    <>
      <Grid
        templateAreas={{
          base: `" nav" "main"`,
          lg: `" nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
        <GridItem area="aside"  hideBelow="md" paddingX='5px'>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenere(genre)}/>
        </GridItem>
        <GridItem area="main" >
          <PlatformSelector/>
         <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
