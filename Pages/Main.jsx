import React from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

import trade_animation from "../src/trade_animation.json";
export default function Main() {
  return (
    <VStack h={"auto"}>
      <Flex
        h={"50vh"}
        w={"100%"}
        flex={1}
        pt={"20px"}
        display={{ base: "grid", lg: "flex" }}
        gap={"20px"}
      >
        <Box w={"auto"} flex={1} my={"auto"}>
          <Heading textAlign={"center"} fontSize={"40px"} color={"teal"}>
            Welcome to CollegeWorksPro
          </Heading>
          <Text color={"gray.600"} py={"20px"} px={"50px"}>
            {" "}
            Our team has noticed that it is so difficult for students who need
            to work and do their college assignment at a time. So we came with a
            new solution. Introducing SchoolWorksPro to balance your daily busy
            routine. we deals with the answer pdf for assignments, exams
            preperations and other topic that SchoolWorksPro don't provide.{" "}
          </Text>
          <HStack justifyContent={"center"} gap={"30px"}>
            <Button
              fontFamily="Arial, sans-serif"
              colorScheme="blue"
              leftIcon={<RiMoneyCnyCircleLine />}
            >
              Place to sell
            </Button>
            <Button
              fontFamily="Arial, sans-serif"
              colorScheme="red"
              leftIcon={<FaHandsHelping />}
            >
              Place to buy
            </Button>
          </HStack>
        </Box>
        <Lottie
          animationData={trade_animation}
          style={{ width: "auto", height: "100%" }}
        />
      </Flex>
      {/* <Heading>Place, where we do deal</Heading>
      <Heading>Place, where we do deal</Heading>
      <Heading>Place, where we do deal</Heading>
      <Heading>Place, where we do deal</Heading> */}
    </VStack>
  );
}
