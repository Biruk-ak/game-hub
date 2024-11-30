import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo} from 'react-icons/si'
import { BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const platformIconList = ({ platforms }: Props) => {

  const iconMap: {[key:string] :IconType} = {
    pc : FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe
  }
  return (
    <HStack>
      {platforms.map((platform) => (
        <Text key ={platform.id}>{platform.name}</Text>
        // <Icon key ={platform.id} as ={iconMap[platform.slug]}/>
      ))}
    </HStack>
  );
};

export default platformIconList;
