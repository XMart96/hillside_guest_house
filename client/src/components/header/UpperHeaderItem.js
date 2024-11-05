import { Link, Text } from "@chakra-ui/react";

const UpperHeaderItem = ({ href, icon, text }) => (
    <Link href={href} color='white' _hover={{ color: 'grn', textDecoration: 'none'}}>
        {icon} 
        <Text hideBelow='md'>{text}</Text>
    </Link>
);

export default UpperHeaderItem;