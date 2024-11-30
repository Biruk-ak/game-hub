import useGenres, { Genre } from "@/hooks/UseGeneres";
import getCroppedImageUrl from "@/service/image-url";
import { HStack, Image,  Link,  List, ListItem, Spinner } from "@chakra-ui/react";
// import { link } from "framer-motion/client";

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre} : Props) => {
  const { data,isLoading,error } = useGenres();

  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} padding='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize= 'lg'>{genre.name}</Link>

          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
