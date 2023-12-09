import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
function Body3text() {
  return (
    <Flex height={"max-content"} lineHeight={1.3} ml={"130px"} mt={"130px"}>
      <Box>
        <Text as={"h4"} fontSize={"2xl"} fontWeight={600} pt={10}>
          EASY INTEGRATION AND SETUP
        </Text>
        <Text as={"h2"} fontSize={"4xl"} fontWeight={800} pt={4}>
          Add the plugin to
          <br /> your WordPress <br /> site within minutes
        </Text>
        <Text
          as={"h4"}
          fontSize={"2xl"}
          fontWeight={300}
          pt={5}
          color={"gray.600"}
        >
          Download the WordPress plugin, install it and <br /> you’re ready to
          publish straight from your <br /> favorite SEO tool!
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Text as={"h4"} fontSize={"2xl"} fontWeight={600} pt={10}>
          CONVENIENTLY PUBLISH STRAIGHT <br /> FROM SURFER
        </Text>
        <Text as={"h2"} fontSize={"4xl"} fontWeight={800} pt={4}>
          Publish to WordPress <br /> straight from the
          <br />
          Content Editor
        </Text>
        <Text
          as={"h4"}
          fontSize={"2xl"}
          fontWeight={300}
          pt={5}
          color={"gray.600"}
        >
          Develop your content in Surfer's Content <br /> Editor and publish
          directly to WordPress with <br /> just two clicks. Add images in
          Content Editor <br /> and they will move seamlessly to your <br />{" "}
          WordPress media folder and be attached in the
          <br />
          correct place in the article you are working on.
        </Text>
      </Box>
      <Spacer />{" "}
      <Box>
        <Text as={"h4"} fontSize={"2xl"} fontWeight={600} pt={10}>
          EDIT AND IMPROVE EXISTING <br /> ARTICLES
        </Text>
        <Text as={"h2"} fontSize={"4xl"} fontWeight={800} pt={4}>
          Improve your content <br /> and climb to the top of <br /> google
          search results
        </Text>
        <Text
          as={"h4"}
          fontSize={"2xl"}
          fontWeight={300}
          pt={5}
          color={"gray.600"}
        >
          Import articles directly to Surfer’s Content <br /> Editor. Optimize
          existing content, push to make <br /> the changes live and improve
          your on page <br /> SEO!
        </Text>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Body3text;
