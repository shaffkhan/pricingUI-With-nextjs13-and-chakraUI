import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Tick from "./icons/tick";
const content = [
  {
    icon: <Tick />,
    desc: "International calling and messaging API",
  },
  {
    icon: <Tick />,
    desc: "Additional phone numbers",
  },
  {
    icon: <Tick />,
    desc: "Automated messages via Zapier",
  },
  {
    icon: <Tick />,
    desc: "24/7 support and consulting",
  },
];
export default function Pricing() {
  return (
    <Box
      boxShadow="xl"
      borderRadius={"12px 12px 12px 12px"}
      display={{ base: "block", md: "flex" }}
      maxW={{ base: "310px", md: "1000px" }}
      position={"absolute"}
      top={"280px"}
      left={{ base: "22px", md: "300px", xl: "300px" }}
      bg="white"
    >
      <Box
        borderRadius={{ base: "12px 12px 0px 0px", md: "12px 0px 0px 12px" }}
        padding={"60px"}
        maxW={{ base: "310px", md: "378px" }}
        bg="#E5E5E5"
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Text fontSize={"24px"} fontWeight="800">
          Premium PRO
        </Text>
        <Heading fontSize={"55px"} fontWeight="800">
          $329
        </Heading>
        <Text fontSize={"18px"}>billed just once</Text>
        <Button
          mt={"24px"}
          bgGradient="linear(to-r, #42275a,  #734b6d)"
          color={"white"}
          h="51px"
          w={"280px"}
          p="15px_75px"
        >
          Get Started
        </Button>
      </Box>
      <Box
        padding={{ base: "20px", md: "50px" }}
        borderRadius={"0px 12px 12px 0px"}
      >
        <Text>
          Access these features when you get this pricing package for your
          business.
        </Text>
        <Box>
          {content.map((el) => {
            return (
              <Text
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"25px"}
                mt="25px"
              >
                {el.icon}
                {el.desc}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
