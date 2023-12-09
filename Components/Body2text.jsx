import { Stack, Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineElectricBolt } from "react-icons/md";

function Body2text() {
  return (
    <Stack direction={"row"} mt={"100px"} spacing={15} bgColor={"#FFFEFC"}>
      <Box
        textAlign={"left"}
        letterSpacing={1.1}
        mx={"130px"}
        lineHeight={1.1}
        minW={"max-content"}
        height={"max-content"}
      >
        <Heading as={"h1"} fontWeight={800} size={"3xl"}>
          Introducing Surfer’s
          <br /> free WordPress plugin!
        </Heading>
        <Heading as={"h4"}>
          <Text display={"inline-flex"} alignItems={"center"} gap={3}>
            <CiClock1 />{" "}
            <Text fontSize={"2xl"} py={"30px"} fontWeight={700}>
              Save hours of time and say bye to copy-pasting
            </Text>
          </Text>
        </Heading>
        <Text lineHeight={1.5} fontSize={"2xl"} color={"gray.600"} mt={"-6px"}>
          Tired of wasting hours of time moving content from Content
          <br /> Editor to your WordPress just to publish it? Frustrated with{" "}
          <br /> double-checking if formatting didn’t break while copy-pasting?{" "}
          <br /> Adding missing images takes lots of time?
        </Text>

        <Heading as={"h4"}>
          <Text
            display={"inline-flex"}
            alignItems={"center"}
            gap={3}
            color="linear(to-r, red.300, yellow.400)"
          >
            <MdOutlineElectricBolt />{" "}
            <Text fontSize={"2xl"} py={"30px"} fontWeight={700}>
              Not anymore.
            </Text>
          </Text>
        </Heading>
        <Text lineHeight={1.5} fontSize={"2xl"} color={"gray.600"} mt={"-6px"}>
          Write, publish and rank. No more copy-paste. Surfer’s WordPress
          <br /> plugin just saved you a step (or 2!)
        </Text>
        <Button
          fontSize="2xl"
          fontWeight={700}
          colorScheme="teal"
          bgGradient="linear(to-r, #ba0b34, yellow.400)"
          borderRadius={"20px"}
          mt={10}
          px={15}
          py={"27px"}
        >
          {" "}
          Install WordPress Plugin
        </Button>
      </Box>
      <Box overflow={"hidden"}>
        <Image
          h={"600px"}
          maxW={"1400px"}
          borderRadius={"40px 0 0 40px"}
          src="https://assets-global.website-files.com/62666115cfab458794bd512f/64a6b1776f80e1abd267357e_wordpres_update_0.webp"
          alt="Dan Abramov"
        />
      </Box>
    </Stack>
  );
}

export default Body2text;
