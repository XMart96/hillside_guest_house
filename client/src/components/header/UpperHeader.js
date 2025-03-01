import { Flex, IconButton } from "@chakra-ui/react";
import { LuPhone, LuMail, LuInstagram } from "react-icons/lu";
import UpperHeaderItem from "./UpperHeaderItem";
import LangMenu from "./LangMenu";
import { phone, email, instaURL } from "../../data";

const UpperHeader = () => (
    <Flex 
        bg='blu' 
        px='5' 
        py='1' 
        justify={{base: 'space-between', md: 'space-around'}} 
        align='center'
        h='50px'
    >
        <Flex gap={{base: 8, md: 5}}>
            <UpperHeaderItem href={`tel:${phone}`} icon={<LuPhone />} text={phone} />
            <UpperHeaderItem href={`mailto:${email}`} icon={<LuMail />} text={email} />
        </Flex>
        <Flex gap='5'>
            <UpperHeaderItem 
                href={instaURL}
                icon={<LuInstagram />} 
                text='Instagram'
                as={IconButton}
            />
            <LangMenu />
        </Flex>
    </Flex>
);

export default UpperHeader;