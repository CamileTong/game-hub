import { Box, type BoxProps } from "@chakra-ui/react";

export const DecorativeBox = (props: BoxProps) => (
  <Box
    {...props}
    css={{
      width: "100%",
      height: "100%",
      backgroundClip: "padding-box",
      borderWidth: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  />
);
