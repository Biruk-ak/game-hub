import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data,error } = usePlatforms();

  if(error) return null;
  
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem value={platform.name} key={platform.id}>{platform.name}</MenuItem>
        ))}
        {/* <MenuItem value="rename">Rename</MenuItem> */}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
