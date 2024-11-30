import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null

}


const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
  const { data,error } = usePlatforms();

  if(error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || 'plaforms'}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem onClick={()=>onSelectPlatform(platform)} value={platform.name} key={platform.id}>{platform.name}</MenuItem>
        ))}
        {/* <MenuItem value="rename">Rename</MenuItem> */}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
