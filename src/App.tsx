import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGeneres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/sortSelector";

export interface GameQuery{
  genre: Genre | null
  platform: Platform | null 
  sortOrder: string
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
        <GridItem area="main" >
          <HStack spaceX={4} paddingLeft={1} marginBottom={4}>
            <PlatformSelector
              selectedPlatform = {gameQuery.platform}
              onSelectPlatform ={(platform) => setGameQuery({...gameQuery,platform})}
            />
            <SortSelector sortOrder ={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery ({...gameQuery, sortOrder})}/>
          </HStack>
          <GameGrid gameQuery = {gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
