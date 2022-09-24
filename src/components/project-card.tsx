import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { getTagColor } from "style/theme";
import LazyImage from "./lazy-image";
import { NavLink } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");

  return (
    <motion.div layout>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <LazyImage
          src={logo}
          blurHash={blurHash}
          size="sm"
          width={50}
          height={50}
          layout="fixed"
          rounded="md"
        />
        <Link
         as={NavLink}
         to={link}
         >
          <VStack align="start" justify="flex-start">
            <VStack spacing={0} align="start">
              <motion.div layout>
                <HStack>
                  <Text
                    fontWeight="bold"
                    fontSize="md"
                    noOfLines={1}
                  >
                    {title}
                  </Text>
                  <HStack spacing="1">
                    {technologies.map(tech => (
                      <Tag size="sm" colorScheme={getTagColor(tech)}>
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                </HStack>
              </motion.div>
              <AnimatePresence>
                <motion.div
                  layout
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                >
                <Text fontSize="sm" color={textColor}>
                  {description}
                </Text>
                </motion.div>
              </AnimatePresence>
            </VStack>
          </VStack>
        </Link>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
