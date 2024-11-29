import useGenres from "@/hooks/UseGeneres";
import getCroppedImageUrl from "@/service/image-url";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
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
            <Text fontSize= 'lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
