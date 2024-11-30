import SearchBar from "./SearchBar";
import DarkModeSwitch from "./DarkModeSwitch";
import { HStack, Image } from "@chakra-ui/react";
import { DecorativeBox } from "./DecoBox";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image margin="3" src={logo} boxSize="60px"></Image>
      <SearchBar text="Search games..."></SearchBar>
      <DarkModeSwitch></DarkModeSwitch>
    </HStack>
  );
};
export default NavBar;
