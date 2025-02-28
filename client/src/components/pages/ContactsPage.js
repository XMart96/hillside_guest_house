import { Flex } from "@chakra-ui/react";
import image from '../../assets/room3/10-min.jpg';
import HeaderSection from "../elements/HeaderSection";

const ContactsPage = () => (
    <Flex direction='column'>
        <HeaderSection bg={image} header='Contacts' />
    </Flex>
);

export default ContactsPage;