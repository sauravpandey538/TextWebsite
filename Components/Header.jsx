import { Box, Flex, Link, Text, Button, Spacer } from "@chakra-ui/react";
import { GiProgression } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      py={5}
      as="nav"
      color="white"
      position="sticky"
      bgColor={isScrolled ? "transparent" : "#2A0134"}
      top={0}
      zIndex={999}
      transition="background-color 3s ease-in-out"
    >
      <Flex
        width="80%"
        mx={"120px"}
        borderRadius={"30px"}
        bg={isScrolled ? "black" : "#2A0134"}
        alignItems="center"
        justify="space-between"
        padding="22px"
        color="white"
        transition="background-color 0.3s ease-in-out"
      >
        <Box ml={"100px"} fontSize="xl" fontWeight={700}>
          <Link
            fontSize="3xl"
            fontWeight="bold"
            display="inline-flex"
            alignItems="center"
            mr={4}
            mt={6}
          >
            <GiProgression />{" "}
            <Text as="span" ml={2} mt={2}>
              <Link as={RouterLink} to="/">
                Saurav
              </Link>
            </Text>
          </Link>

          <Text display="inline-flex" alignItems="center">
            <Link mx={2} href="#product">
              Product
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} href="#connect">
              Connect
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} href="#learn">
              Learn
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link mr={2} as={RouterLink} to="#company">
              Company
            </Link>
            <IoIosArrowDown />
          </Text>
          <Text display="inline-flex" alignItems="center" ml={4}>
            <Link href="#pricing" mr={2}>
              Pricing
            </Link>
            <IoIosArrowDown />
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Button mr={5} variant="unstyled" fontSize="xl" fontWeight={700}>
            <Link as={RouterLink} to="login">
              Log in
            </Link>
          </Button>
          <Button
            fontSize="xl"
            fontWeight={500}
            colorScheme="teal"
            bgGradient="linear(to-r, #ba0b34, yellow.400)"
          >
            Start now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
