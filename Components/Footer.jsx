import React from "react";
import { Box, Flex, Icon, Link, Text, Spacer } from "@chakra-ui/react";
import { GiProgression } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      width={"100%"}
      h={"600px"}
      bgColor={"black"}
      mt={"100"}
      color={"white"}
      border={"2px solid white"}
    >
      <Flex mt={"150px"} mx={"100px"}>
        <Box>
          <Link
            fontSize="3xl"
            fontWeight="bold"
            display="inline-flex"
            alignItems="center"
            mr={4}
          >
            <Icon as={GiProgression} />
            <Text as="span" ml={2}>
              SAURAV
            </Text>
          </Link>
          <br />
          <Box display={"inline-flex"} fontSize={"3xl"} gap={5} py={"40px"}>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaYoutube />
            </Link>
          </Box>
          <br />
          <Box display={"block"} fontSize={"xl"} gap={5} color={"gray.300"}>
            <Link>
              <Text lineHeight={2}>© 2023 Surfer</Text>
            </Link>
            <Link>
              <Text lineHeight={2}>Privacy policy</Text>
            </Link>
            <Link>
              <Text lineHeight={2}>Regulations</Text>
            </Link>
          </Box>
        </Box>
        <Spacer />
        <Box fontSize={"xl"} color={"gray.300"}>
          <Link href="#">
            <Text
              color={"white"}
              fontWeight={800}
              fontSize={"2xl"}
              lineHeight={2}
            >
              Surfer
            </Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Homepage</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Pricing</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Affiliate Program</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Contact</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Career</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Brand Story</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}> Brand Assests</Text>
          </Link>
        </Box>
        <Spacer />
        <Box fontSize={"xl"} color={"gray.300"}>
          <Link href="#">
            <Text
              color={"white"}
              fontWeight={800}
              fontSize={"2xl"}
              lineHeight={2}
            >
              Product
            </Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Content Editor</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Keyword Researcher</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>SEO Audit</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Surfer AI</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Surfy-AI assistance</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Templates</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}> Custom Knowledge</Text>
          </Link>
        </Box>
        <Spacer />
        <Box fontSize={"xl"} color={"gray.300"}>
          <Link href="#">
            <Text
              color={"white"}
              fontWeight={800}
              fontSize={"2xl"}
              lineHeight={2}
            >
              Learn
            </Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Blog</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Academy</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Community</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Knowledge base</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>SEO classes</Text>
          </Link>
          <Link href="#">
            <Text lineHeight={2}>Youtube</Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Text
            color={"white"}
            fontWeight={800}
            fontSize={"2xl"}
            lineHeight={2}
          >
            Company details
          </Text>
          <Text color={"gray.300"}>
            Surfer Sp. z o.o. <br /> Plac Solny 14/3 <br /> 50-062 Wrocław,
            Poland
            <br /> VAT ID: PL8971860264
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text
            color={"white"}
            fontWeight={800}
            fontSize={"2xl"}
            lineHeight={2}
          >
            Office address
          </Text>
          <Text color={"gray.300"}>
            Grodzka 9, L'uni Building
            <br />
            50-120 Wrocław, Poland
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
