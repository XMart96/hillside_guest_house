import { Breadcrumb } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const BreadCrumb = ({ path }) => {
    const { t } = useTranslation(['header']);

    return(
        <Breadcrumb.Root size='lg'>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link asChild>
                        <ChakraLink 
                            as={Link}
                            to='/'
                            _hover={{ color: 'grn', textDecoration: 'none'}}
                            _focus={{ outline: 'none' }}
                            color='white'
                            transition="0.2s"
                        >
                            {t('home')}
                        </ChakraLink>
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator color='white' />
                {
                    path.map((value, index) => {
                        const to = `/${path.slice(0, index + 1).join('/')}`;
                        return (
                            <Breadcrumb.Item key={index}>
                                <Breadcrumb.Link asChild>
                                    <ChakraLink 
                                        as={Link}
                                        to={to}
                                        _hover={{ color: 'grn', textDecoration: 'none'}}
                                        _focus={{ outline: 'none' }}
                                        color='white'
                                        transition="0.2s"
                                    >
                                        {t(value)}
                                    </ChakraLink>
                                </Breadcrumb.Link>
                            </Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
}

export default BreadCrumb;