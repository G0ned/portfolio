import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { projects } from "../data/projects";

const ProjectsSection = () => {
    const projectsNumber = projects.length;

    return (
        <FullScreenSection
            backgroundColor="#eca72c"
            isDarkBackground
            p={8}
            alignItems={projectsNumber === 1 ? "center" : "flex-start"}
            spacing={8}
        >
            <Heading as="h1" id="projects-section">
                Proyectos
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns={
                    projectsNumber === 1
                        ? "minmax(0,660px)"
                        : "repeat(2, minmax(0, 1fr))"
                }
                gridGap={8}
            >
                {projects.map((project) => (
                    <Card
                        kaey={project.title}
                        title={project.title}
                        description={project.description}
                        slug={project.slug}
                        imageSrc={project.image}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default ProjectsSection;
