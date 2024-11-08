import { Link } from "@chakra-ui/react";

const LinkItem = ({ text }) => (
    <Link 
        href='#' 
        color={{base: 'white', md: 'gry'}} 
        _hover={{ color: 'grn', textDecoration: 'none'}}
        fontSize='lg'
    >
        {text}
    </Link>
);

export default LinkItem;