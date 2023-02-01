import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <>
      <Box
        textAlign={{ base: "left", md: "center", xl: "center" }}
        pl='25px'
        bg="pruple"
        bgGradient="linear(to-r, #42275a,  #734b6d)"
        color="white"
        h={"397px"}
        pt="100px"
        position={"relative"}
      >
        <Heading as="h1">Simple pricing for your business</Heading>

        <Text mt="25px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
      <Box></Box>
    </>
  );
}
