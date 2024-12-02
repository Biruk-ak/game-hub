import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "@/components/ui/menu";
  import { Platform } from "@/hooks/useGames";
  import usePlatforms from "@/hooks/usePlatforms";
  import { Button } from "@chakra-ui/react";
  

const sortSelector = () => {
    return (
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              order by : rel
            </Button>
          </MenuTrigger>
          <MenuContent>
            
            <MenuItem value="rename">Rename</MenuItem>
            <MenuItem value="rename">Rename</MenuItem>
            <MenuItem value="rename">Rename</MenuItem>
            <MenuItem value="rename">Rename</MenuItem>
            <MenuItem value="rename">Rename</MenuItem>
          </MenuContent>
        </MenuRoot>
      );
}

export default sortSelector