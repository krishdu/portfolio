import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { MotionBox } from "./motion";
import { item } from "./page-transitions";

const SkillCardSimple = ({ name }) => {
  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
        <HStack
          p={4}
          bg={useColorModeValue("white", "gray.800")}
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue("gray.100", "gray.700")}
          w="100%"
          textAlign="left"
          align="start"
          spacing={1}
          _hover={{ shadow: "md" }}
        >
          <VStack
            align="start"
            justify="flex-start"
            spacing={1}
            maxW="md"
            h="100%"
          >
            <VStack spacing={0} align="start" flex-grow="1">
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                {name}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
};

export default SkillCardSimple;
