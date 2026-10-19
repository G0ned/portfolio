import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, slug }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack
            color="black"
            backgroundColor="white"
            borderRadius="xl"
            cursor="pointer"
            alignItems="flex-start"
        >
            <Image borderRadius="xl" src={imageSrc} alt={title} />
            <VStack alignItems="flex-start" width="100%" spading={4} p={4}>
                <Heading
                    size="lg"
                    width="100%"
                    textAlign="center"
                    mb="2"
                    mt="-3"
                >
                    {title}
                </Heading>
                <Text fontSize="md" textAlign="justify" margin="1">
                    {description}
                </Text>
                <Link as={RouterLink} to={`/projects/${slug}`} _hover={{textDecoration: "none"}}>
                    <HStack spacing={2} margin="1">
                        <p>Saber Más</p>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Link>
            </VStack>
        </VStack>
    );
};

export default Card;
