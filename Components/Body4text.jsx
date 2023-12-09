import { Stack, Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { FaFileSignature } from "react-icons/fa";
function Body4text() {
  return (
    <Stack direction={"row"} mt={"100px"} spacing={15} bgColor={"#FFFEFC"}>
      <Box overflow={"hidden"}>
        <Image
          ml={"-350px"}
          mr={"200px"}
          h={"600px"}
          maxW={"1400px"}
          borderRadius={"0 40px 40px 0"}
          src="https://assets-global.website-files.com/62666115cfab458794bd512f/64a6c4816daf003434b83e3e_wordpres_update_3.webp"
          alt="Dan Abramov"
        />
      </Box>
      <Box
        textAlign={"left"}
        letterSpacing={1.1}
        mx={"130px"}
        minW={"max-content"}
        height={"max-content"}
        my={"auto"}
      >
        <Heading as={"h4"}>
          <Text display={"inline-flex"} alignItems={"center"} gap={3}>
            <FaFileSignature />{" "}
            <Text fontSize={"2xl"} py={"30px"} fontWeight={700}>
              AVOID MISTAKES
            </Text>
          </Text>
        </Heading>
        <Heading as={"h1"} fontWeight={800} size={"3xl"}>
          Have full control <br /> over your content
        </Heading>

        <Text lineHeight={1.5} fontSize={"2xl"} color={"gray.600"} pt={"18px"}>
          With WordPress SEO plugin you no longer need to copy and paste <br />
          articles from Surfer to WordPress - having it all in one place <br />{" "}
          makes it easier to make sure you are publishing the right version{" "}
          <br /> and have more control over what is going live.
        </Text>

        <Button
          fontSize="2xl"
          fontWeight={700}
          colorScheme="teal"
          bgGradient="linear(to-r, #ba0b34, yellow.400)"
          borderRadius={"20px"}
          mt={10}
          px={30}
          py={7}
        >
          {" "}
          Install WordPress Plugin
        </Button>
      </Box>
    </Stack>
  );
}

export default Body4text;
