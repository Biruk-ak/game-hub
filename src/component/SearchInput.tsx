import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder="Search contacts" />
    </InputGroup>
  );
};

export default SearchInput;
