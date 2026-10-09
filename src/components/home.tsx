import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.png";
import { FiArrowRight } from "react-icons/fi";
import { HStack, Button, Icon } from "@chakra-ui/react";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const FiArrowRightIcon = FiArrowRight as any;

const Home = () => {
  return (
    <Flex direction="column" align="center" maxW="800px" mx="auto" pt={10}>
      <Flex direction={["column", "column", "row"]} align="center" justify="space-between" w="100%">
        <MotionFlex
          w={["100%", "100%", "70%"]}
          opacity="0"
          direction="column"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: ANIMATION_DURATION },
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} className="face">
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left" mb={2}>
            <Box as="strong" fontWeight="600">
              Krishnendu Patra ||
            </Box>{" "}
            <Box as="strong" fontWeight="600">
              SDE 2 @ American Express
            </Box>{" "}
          </Box>
          <Box as="h2" fontSize="lg" fontWeight="400" mt={5} mb={8} textAlign="left">
            I'm a Software Engineer with a curious mind, exploring my way into
            the computer world.&nbsp; <br />
            Always open to learning and experimenting with new things.
          </Box>

          <HStack spacing={4}>
            <Button
              as={NavLink}
              to="/projects"
              colorScheme="blue"
              size="lg"
              rounded="full"
              px={8}
            >
              View Projects
            </Button>
            <Button
              as={NavLink}
              to="/about"
              variant="ghost"
              colorScheme="blue"
              size="lg"
              rounded="full"
              rightIcon={<Icon as={FiArrowRightIcon} />}
            >
              More About Me
            </Button>
          </HStack>
        </MotionFlex>

        <MotionBox
          opacity="0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: ANIMATION_DURATION, delay: 0.2 },
          }}
          mt={[10, 10, 0]}
        >
          <Avatar
            size="2xl"
            src={UserIcon}
            showBorder
            borderColor={useColorModeValue("blue.500", "blue.300")}
            borderWidth="4px"
            boxShadow="xl"
          />
        </MotionBox>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{ y: 40 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: ANIMATION_DURATION, duration: ANIMATION_DURATION },
        }}
        mt={20}
      >
        <Projects projects={projectsList} />
      </MotionBox>
    </Flex>
  );
};

export default Home;
