import * as React from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Link,
  Tooltip,
  useColorModeValue,
  Icon,
  Flex,
  Image,
  Badge,
  Box
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { getTagColor } from "style/theme";
import { CardTransition } from "components/page-transitions";



const PostCard = ({ article }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  
  console.log(article)
  return (
    <CardTransition>
      <VStack
        spacing={1}
        p={4}
        _hover={{ shadow: "md", textDecoration: "none" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        align="left"
        opacity={999}
      >
        <Heading fontSize="lg" align="left" mt={0}>
        
          <Text as={Link} href={article.link} target="_blank">
            {article.title}
          </Text>

          {article.isNew && (
            <Badge
              ml="1"
              mb="1"
              colorScheme="green"
              fontSize="0.7em"
              lineHeight={1.5}
            >
              New
            </Badge>
          )}
        </Heading>
        <HStack spacing={2} isInline>
          <Tooltip hasArrow label="Published" placement="top">
            <Text fontSize="sm" fontWeight="400" color={textColor}>
              {article.pubDate}
            </Text>
          </Tooltip>
          <HStack spacing={1} alignItems="center" d={["none", "none", "flex"]}>
            {article.categories.map(tag => (
              <Tag
                size="sm"
                padding="0 3px"
                key={tag}
                colorScheme={getTagColor(tag)}
              >
                {tag}
              </Tag>
            ))}
          </HStack>
        </HStack>
        <HStack spacing={1} alignItems="center" d={["flex", "flex", "none"]}>
          {article.categories.map(tag => (
            <Tag
              size="sm"
              padding="0 3px"
              key={tag}
              colorScheme={getTagColor(tag)}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      
      </VStack>
    </CardTransition>
  );
};

export default PostCard;
