import { Link } from "@chakra-ui/react";

const LinkItem = ({ text }) => (
    <Link href='#' color='gry' _hover={{ color: 'grn', textDecoration: 'none'}}>{text}</Link>
);

export default LinkItem;