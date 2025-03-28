import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

import { Btn } from '@components/elements';
import { Tooltip } from '@components/ui/tooltip';

const SocialLinks = ({ name, url }) => (
    <Tooltip showArrow content={name}>
        <ChakraLink as={Link} to={url}>
            <Btn>
                {name === "WhatsApp" ? <FaWhatsapp /> :
                name === "Telegram" ? <FaTelegram /> : ""}
            </Btn>
        </ChakraLink>
    </Tooltip>
);

export default SocialLinks;