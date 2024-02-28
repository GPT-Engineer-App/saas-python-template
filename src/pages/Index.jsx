import React from "react";
import { ChakraProvider, Box, Flex, VStack, Heading, Text, Button, Image, Divider, Input, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCircle, FaLock } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} direction="column" alignItems="center" justifyContent="center">
          <VStack spacing={8}>
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
            <Heading>Welcome to React SaaS Template</Heading>
            <Text>Get started by editing your services and adding new features!</Text>
            <Image borderRadius="lg" src="https://images.unsplash.com/photo-1630673348540-f48385105436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTYWFTJTIwUHJvZHVjdHxlbnwwfHx8fDE3MDkxMzMxMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Product Image" />
            <Button colorScheme="teal" size="lg">
              Explore Features
            </Button>
            <Divider />
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
              <Input placeholder="Email" variant="filled" mb={3} type="email" />
              <Input placeholder="Password" variant="filled" mb={6} type="password" />
              <Button colorScheme="teal" mb={6}>
                Sign In
              </Button>
              <Text>Or</Text>
              <Button leftIcon={<FaUserCircle />}>Sign Up</Button>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
