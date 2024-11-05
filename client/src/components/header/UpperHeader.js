import { Flex } from "@chakra-ui/react";
import { LuPhone, LuMail, LuInstagram } from "react-icons/lu";
import LangMenu from "./LangMenu";
import UpperHeaderItem from "./UpperHeaderItem";

const UpperHeader = () => (
    <Flex bg='blu' px='5' py='1' justify={{base: 'space-between', md: 'space-around'}} align='center'>
        <Flex gap={{base: 8, md: 5}}>
            <UpperHeaderItem href='#' icon={<LuPhone />} text='+37443290127' />
            <UpperHeaderItem href='#' icon={<LuMail />} text='info@hillside.am' />
        </Flex>
        <Flex gap='5'>
            <UpperHeaderItem href='#' icon={<LuInstagram />} text='Instagram' />
            <LangMenu />
        </Flex>
    </Flex>
);

export default UpperHeader;