import React from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  VStack,
  GridItem,
  Grid,
  Text,
  Card,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import Book from "./Book.json";
import { FaBookOpenReader } from "react-icons/fa6";
import SemisterPdfBth from "./SemisterPdf";

export default function ChooseSemister() {
  const semDetails = [
    { Semister: 1, bg: "red.100" },
    { Semister: 2, bg: "yellow.100" },
    { Semister: 3, bg: "gray.200" },
    { Semister: 4, bg: "teal.200" },
    { Semister: 5, bg: "pink.00" },
    { Semister: 6, bg: "orange.200" },
    { Semister: 7, bg: "red.200" },
    { Semister: 8, bg: "blue.200" },
  ];

  return (
    <>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        color={"gray.600"}
        mt={"100px"}
      >
        Exam is near? <br />
        Don't worry. We are here to server you.
      </Text>
      <Heading textAlign={"center"} color={"teal"}>
        Get's you semister's pdf here
      </Heading>

      <Flex gap={4} padding={{ base: "15px", lg: "30px" }} overflowX={"scroll"}>
        {semDetails.map((sem) => (
          <Box key={sem.Semister}>
            <Card
              minW="sm"
              minH={"sm"}
              py={"auto"}
              h={"100%"}
              border={"0.4px solid blue"}
            >
              <Box my={"auto"} w={"100%"} px={"auto"} display={"inline-grid"}>
                <Lottie
                  animationData={Book}
                  style={{ width: "auto", height: "100%" }}
                />
                <SemisterPdfBth Semister={sem.Semister} />
              </Box>
            </Card>
          </Box>
        ))}
      </Flex>
    </>
  );
}
