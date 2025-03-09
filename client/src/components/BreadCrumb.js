import { Breadcrumb, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React from "react";

const BreadCrumb = ({ path, links }) => {
    const renderCrumbLink = (to, label) => (
        <ChakraLink 
            as={Link} 
            to={to} 
            _hover={{ color: 'grn', textDecoration: 'none' }} 
            _focus={{ outline: 'none' }} 
            color='white' 
            transition="0.2s"
        >
            {label}
        </ChakraLink>
    );

    return(
        <Breadcrumb.Root size='lg'>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link asChild>
                        {renderCrumbLink('/', 'Home')}
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator color='white' />
                {
                    path.map((value, index) => {
                        const to = `/${value}`;
                        const label = links.find(i => i.path === to)?.label || value;

                        return (
                            <React.Fragment key={index}>
                                <Breadcrumb.Item>
                                    <Breadcrumb.Link asChild>
                                        {renderCrumbLink(to, label)}
                                    </Breadcrumb.Link>
                                </Breadcrumb.Item>
                                {index < path.length - 1 && <Breadcrumb.Separator color='white' />}
                            </React.Fragment>
                        );
                    })
                }
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
}

export default BreadCrumb;