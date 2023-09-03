import * as React from "react";
import { useState } from "react";
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { PageSlideFade } from "./page-transitions";
import Section from "./section";
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
// import SkillCard from "./skill-card";
import SkillCardSimple from "./skill-card-simple";
import { skills } from "data/data";
import Header from "./header";
import { MotionBox } from "./motion";
import { container } from "./page-transitions";

const TechStackSimpleVersion = () => {
  // const [skillsList, setSkillsList] = useState([]);

  // React.useEffect(() => {
  //   setSkillsList(
  //     skills.filter((skill) => skill.presentInSimpleVersion === true)
  //   );
  // }, []);

  return (
    <PageSlideFade>
      <VStack spacing={8}>
        <Section>
          <VStack>
            <Header mt={0} mb={1} underlineColor={""}>
              Tech Stack
            </Header>
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              A list of my favorite tools and technologies that I've used so
              far.
            </Text>
          </VStack>
        </Section>
        <Section>
          <MotionBox variants={container} initial="hidden" animate="visible">
            <Text fontWeight={"bold"}>Proficient at:</Text> Core Java, Spring
            Boot, Spring Data Jpa, Azure, Relational Databases
            <br />
            <br />
            <Text fontWeight={"bold"}>Good at:</Text>
            NodeJs, ReactJs/Redux, Microservices development, Docker, AWS
            <br />
            <br />
            <Text fontWeight={"bold"}>Explored:</Text>
            MongoDB, Event-driven architectures, Kubernetes
          </MotionBox>
        </Section>
      </VStack>
    </PageSlideFade>
  );
};

export default TechStackSimpleVersion;
