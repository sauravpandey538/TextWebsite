import { Heading, Stack, Button, Box, Image } from "@chakra-ui/react";

export default function Bodytext() {
  return (
    <>
      <Stack spacing={4} textAlign={"center"} pt={"150px"} color={"white"}>
        <Heading as="h2" size="lg">
          NO MORE COPY-PASTE.
        </Heading>

        <Heading as="h1" size="4xl" noOfLines={3}>
          New and Improved
          <br /> Surfer x WordPress
          <br /> Integration Makes it Easy!
        </Heading>

        <Heading as="h2" size="xl" fontWeight={400} pt={5}>
          You asked, we delivered! So many Surfer users rely on WordPress to
          publish <br />
          content. We want to make your Surfer experience as seamless as
          possible.
        </Heading>
      </Stack>
      <Box width={"100vw"} as="button" borderRadius="md" color="white">
        <Button
          fontSize="3xl"
          fontWeight={700}
          colorScheme="teal"
          bgGradient="linear(to-r, #ba0b34, yellow.400)"
          my={"90px"}
          py={"50px"}
          px={"70px"}
          borderRadius={"30px"}
        >
          {" "}
          WELCOME CHIEF - "SAURAV"
        </Button>
      </Box>
      <Box>
        <Image
          width={"74vw"}
          h={"90vh"}
          src="https://assets-global.website-files.com/62666115cfab458794bd512f/64a6c4500da92d30ef3a291a_wordpres_update_1.webp"
          alt="Dan Abramov"
          mx={"auto"}
        />
      </Box>
    </>
  );
}
