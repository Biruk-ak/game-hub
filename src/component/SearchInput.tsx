import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}:Props) => {

  const ref =  useRef<HTMLInputElement>(null)
  return (
    <form style= {{width: '100%' }} onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) onSearch(ref.current.value)

    }}>
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input ref={ref} placeholder="Search contacts" />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
