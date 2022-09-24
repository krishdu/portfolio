import * as React from "react";
import Header from "components/header";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Flex,
  Box,
  Button,
  Divider
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { getTagColor } from "style/theme";
import Carousel from "components/project/carousel";
import { Redirect, useParams } from "react-router-dom";
import { projectsList } from "data/projects-list";

export interface PostProps {}

const ProjectDemo: React.FC<PostProps> = () => {
  const { id } = useParams();
  const [isInvalidId, setIsInvalidId] = React.useState(false);
  const [projects, setProjects] = React.useState(null);
  const textColor = useColorModeValue("gray.500", "gray.200");
  const buttonColor = useColorModeValue("green.600", "green.200");
  const buttonBgColor = useColorModeValue("white", "gray.800");
  const projectColor = useColorModeValue("teal.600", "teal.200");
  
  React.useEffect(() => {
    if(!id){
      setProjects(projectsList);
    }
    else if(isNaN(id) || projectsList.length < Number(id)) {
      setIsInvalidId(true);
    }else{
      setProjects([projectsList[id]]);
    }
  },[id]);

  if(isInvalidId) return <Redirect to={"/"} />;

  if(projects) {
    return (
      projects.map((project) => (
        <>
        <VStack mt={0} mb={6} spacing={1} align="start">
          <Heading 
            as="h1"
            fontSize="3xl" 
            lineHeight="shorter" 
            fontWeight="bold" 
            color={projectColor}
          >
            {project?.title}
          </Heading>
          <Divider
            orientation="horizontal"
            opacity={1}
            borderBottomWidth={0}
            height={"1px"}
            bg={"gray.200"}
          />
        </VStack>
        <Flex
          justifyContent={"space-between"}
          flexDirection={["column", "row", "row"]}
        >
          <HStack spacing={2} isInline>
            <Text fontSize="sm" fontWeight="400" color={textColor}>
              {project?.published}
            </Text>
          </HStack>
          <HStack spacing={1} alignItems="center">
            {project?.technologies?.map(tech => (
              <Tag
                size="sm"
                padding="0 3px"
                key={tech}
                colorScheme={getTagColor(tech)}
              >
                {tech}
              </Tag>
            ))}
          </HStack>
        </Flex>
        <HStack align="end" mt={5}>
          <Link href={project?.demo_url} isExternal>
            <Button
              ml={2}
              variant="outline"
              size={"sm"}
              color={buttonColor}
              bg={buttonBgColor}
              leftIcon={<BiLinkExternal size={18} />}
            >
              Demo
            </Button>
          </Link>
          <Link href={project?.github_url} isExternal>
            <Button
              ml={2}
              variant="outline"
              size={"sm"}
              color={buttonColor}
              bg={buttonBgColor}
              leftIcon={<FiGithub size={18} />}
            >
              Github link
            </Button>
          </Link>
        </HStack>

        <Box height={["35vh", "45vh", "55vh", "70vh"]} marginTop={5}>
          <Carousel images={project?.images} />
        </Box>
        <VStack spacing={5} align={"center"} mt={6}>
          <Header underlineColor="" fontSize={"xl"} mt={0} mb={0}>
            Description
          </Header>
          <Box fontSize="md">
            <Box textAlign="center" paddingLeft={5} m={0}>
              {project?.desc}
            </Box>
          </Box>
        </VStack>
        <Divider
            orientation="horizontal"
            opacity={1}
            my={10}
            borderBottomWidth={0}
            height={"6px"}
            bg={"cyan.500"}
          />
      </>
      ))
    );
  }else {
    return (
      <>
      <HStack mt={0} mb={6} spacing={1} align="center">
        <Heading as="h1" fontSize="3xl" lineHeight="shorter" fontWeight="bold">
          Something went wrong...
        </Heading>
      </HStack>
      </>
    );
  }
};

export default ProjectDemo;
