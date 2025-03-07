import { Breadcrumb, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const BreadCrumb = ({ path }) => {
    const { t } = useTranslation(['header']);

    const renderCrumbLink = (to, label) => (
        <ChakraLink 
            as={Link} 
            to={to} 
            _hover={{ color: 'grn', textDecoration: 'none' }} 
            _focus={{ outline: 'none' }} 
            color='white' 
            transition="0.2s"
        >
            {t(label)}
        </ChakraLink>
    );

    return(
        <Breadcrumb.Root size='lg'>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link asChild>
                        {renderCrumbLink('/', 'home')}
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator color='white' />
                {
                    path.map((value, index) => {
                        const to = `/${path.slice(0, index + 1).join('/')}`;
                        return (
                            <Breadcrumb.Item key={index}>
                                <Breadcrumb.Link asChild>
                                    {renderCrumbLink(to, value)}
                                </Breadcrumb.Link>
                            </Breadcrumb.Item>
                        );
                    })
                }
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
}

export default BreadCrumb;