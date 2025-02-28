import { Breadcrumb } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter(x => x);

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
                            Home
                        </ChakraLink>
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator color='white' />
                {
                    pathNames.map((value, index) => {
                        const to = `/${pathNames.slice(0, index + 1).join('/')}`;
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
                                        {value.charAt(0).toUpperCase() + value.slice(1)}
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