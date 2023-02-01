import { Box } from "@chakra-ui/react";
import React from "react";
import R1 from "./icons/r1";
import R2 from "./icons/r2";
import R3 from "./icons/r3";
const content = [
  {
    icon: <R1 />,
    desc: "30 days money back Guarantee",
  },
  {
    icon: <R2 />,
    desc: "No setup fees 100% hassle-free",
  },
  {
    icon: <R3 />,
    desc: "No monthly subscription Pay once and for all",
  },
];
export default function Rectangles() {
  return (
    <>
      <Box
        mt={{ base: "580px", md: "300px", xl: "300px" }}
        display="flex"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
        justifyContent={"center"}
        alignItems='center'
        gap="50px"
        mb={'100px'}
      >
        {content.map((el) => {
          return (
            <Box
              display={"flex"}
              gap="20px"
              alignItems={{base:'start',md:"center"}}
              justifyContent={{base:"start"}}
            
              maxW={{base:'300px',md:"220px"}}
            >
              {el.icon}
              {el.desc}
            </Box>
          );
        })}
      </Box>
    </>
  );
}
