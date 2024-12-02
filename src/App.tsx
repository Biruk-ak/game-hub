import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGeneres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery{
  genre: Genre | null
  platform: Platform | null 
}


function App() {
  // const [selectedGenre, setSelectedGenere] = useState<Genre | null>(null);

  // const [selectedPlatform, setSelectedPlarform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
          <NavBar />
        </GridItem>
        <GridItem area="aside" hideBelow="md" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
          />
        </GridItem>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform = {gameQuery.platform}
            onSelectPlatform ={(platform) => setGameQuery({...gameQuery,platform})}
          />
          <GameGrid gameQuery = {gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
