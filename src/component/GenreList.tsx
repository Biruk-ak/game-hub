import useGenres from "@/hooks/UseGeneres";
import getCroppedImageUrl from "@/service/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
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
            <Text fontSize= 'lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
