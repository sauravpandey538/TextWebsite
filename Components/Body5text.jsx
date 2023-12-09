import { Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { AiFillPicture } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
function Body5text() {
  return (
    <Box
      textAlign={"center"}
      letterSpacing={1.1}
      mx={"130px"}
      mt={"150px"}
      minW={"max-content"}
      height={"max-content"}
    >
      <Heading as={"h4"}>
        <Text display={"inline-flex"} alignItems={"center"} gap={3}>
          <FaFileUpload />{" "}
          <Text fontSize={"2xl"} py={"30px"} fontWeight={700}>
            EASIER ASSET MANAGEMENT
          </Text>{" "}
          <AiFillPicture />
        </Text>
      </Heading>
      <Heading as={"h1"} fontWeight={800} size={"3xl"} lineHeight={1.1}>
        Surfer's Wordpress Plugin <br /> makes asset management easy
      </Heading>

      <Text lineHeight={1.5} fontSize={"2xl"} color={"gray.600"} pt={"18px"}>
        Images you add to your posts are downloaded and stored on Wordpress and
        are accessible in <br /> your media library versus an external link
        which improves performance and SEO.
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
      <Image
        mt={"100px"}
        w={"1600px"}
        h={"800px"}
        borderRadius={"30px"}
        src="https://assets-global.website-files.com/62666115cfab458794bd512f/64a6c4731b5d36419475a54a_wordpres_update_2.webp"
        alt="Dan Abramov"
      />
    </Box>
  );
}

export default Body5text;
