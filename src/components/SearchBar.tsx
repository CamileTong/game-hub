import { Box, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";

interface Props {
  text: string;
}

const SearchBar = ({ text }: Props) => {
  return (
    <Box margin="3">
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input placeholder={text} variant="subtle" width="500px" />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
