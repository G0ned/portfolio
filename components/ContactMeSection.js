import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
        },
        onSubmit: (values) => {
            submit("http://eduardo-freelance.com/contactme", values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Obligatorio"),
            email: Yup.string()
                .email("Invalid e-mail address")
                .required("Obligatorio"),
            type: Yup.string(),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Obligatorio"),
        }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === "success") {
                formik.resetForm();
            }
        }
    }, [response]);

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#44355b"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contacto
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl
                                isInvalid={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                }
                            >
                                <FormLabel htmlFor="firstName">
                                    Nombre
                                </FormLabel>
                                <Input
                                    id="firstName"
                                    {...formik.getFieldProps("firstName")}
                                />
                                <FormErrorMessage>
                                    {formik.errors.firstName}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl
                                isInvalid={
                                    formik.touched.email && formik.errors.email
                                }
                            >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    id="email"
                                    {...formik.getFieldProps("email")}
                                    type="email"
                                />
                                <FormErrorMessage>
                                    {formik.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Asunto</FormLabel>
                                <Select
                                    id="type"
                                    {...formik.getFieldProps("type")}
                                    sx={{
                                        "> option": {
                                            background: "black",
                                            color: "white",
                                        },
                                    }}
                                >
                                    <option value="hireMe">
                                        Propuesta de proyecto freelance{" "}
                                    </option>
                                    <option value="openSource">
                                        Consultoría
                                    </option>
                                    <option value="other">Otros</option>
                                </Select>
                            </FormControl>
                            <FormControl
                                isInvalid={
                                    formik.touched.comment &&
                                    formik.errors.comment
                                }
                            >
                                <FormLabel htmlFor="comment">Mensaje</FormLabel>
                                <Textarea
                                    id="comment"
                                    {...formik.getFieldProps("comment")}
                                    height={250}
                                />
                                <FormErrorMessage>
                                    {formik.errors.comment}
                                </FormErrorMessage>
                            </FormControl>
                            <Button
                                type="submit"
                                colorScheme="purple"
                                width="full"
                                isLoading={isLoading}
                            >
                                Enviar
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default LandingSection;
