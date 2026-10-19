import React from "react";
import profileImg from "../images/profile.jpg";
import { Avatar, Heading, VStack, Tag, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Soy Eduardo González Morales";
const bio1 = "Desarrollador Full-Stack";
const tags = [
    { title: "Python", bg: "#FFE873" },
    { title: "SQL", bg: "#5F9EA0" },
    { title: "GitHub", bg: "#9999" },
    { title: "Docker", bg: "#0DB7ED" },
];

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#221e22"
    >
        <VStack>
            <Avatar src={profileImg} alt="profile-picture" size="1x" />
            <Heading>{greeting}</Heading>
            <Heading>{bio1}</Heading>
            <HStack>
                {tags.map((t) => (
                    <Tag
                        backgroundColor={t.bg}
                        border="1px solid"
                        borderColor="gray.50"
                    >
                        {t.title}
                    </Tag>
                ))}
            </HStack>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;
