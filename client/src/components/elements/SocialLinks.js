import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import Btn from './Btn';
import { FaWhatsapp, FaTelegram, FaViber } from 'react-icons/fa';
import { Tooltip } from '@/components/ui/tooltip';

const SocialLinks = ({ name, url }) => (
    <Tooltip showArrow content={name}>
        <ChakraLink as={Link} to={url}>
            <Btn>
                {name === "WhatsApp" ? <FaWhatsapp /> :
                name === "Telegram" ? <FaTelegram /> :
                name === "Viber" ? <FaViber /> : ""}
            </Btn>
        </ChakraLink>
    </Tooltip>
);

export default SocialLinks;