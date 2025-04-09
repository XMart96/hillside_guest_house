import React, { JSX } from 'react';

import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';
import { LinkItem } from '@components/LinkItems';

interface IBreadcrumbProps {
    pathNames: string[];
    links: { path: string; label: string }[];
}
export const Breadcrumb = ({
    pathNames,
    links,
}: IBreadcrumbProps): JSX.Element => (
    <ChakraBreadcrumb.Root size='lg'>
        <ChakraBreadcrumb.List>
            <ChakraBreadcrumb.Item>
                <ChakraBreadcrumb.Link asChild>
                    <LinkItem url='/' text='Home' disableHideText />
                </ChakraBreadcrumb.Link>
            </ChakraBreadcrumb.Item>
            <ChakraBreadcrumb.Separator color='wht' />
            {pathNames.map((path, index) => {
                const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                const text =
                    links.find(link => link.path === `/${path}`)?.label || '';
                return (
                    <React.Fragment key={to}>
                        <ChakraBreadcrumb.Item>
                            <ChakraBreadcrumb.Link asChild>
                                <LinkItem
                                    url={to}
                                    text={text}
                                    disableHideText
                                />
                            </ChakraBreadcrumb.Link>
                        </ChakraBreadcrumb.Item>
                        {index < pathNames.length - 1 && (
                            <ChakraBreadcrumb.Separator color='wht' />
                        )}
                    </React.Fragment>
                );
            })}
        </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
);
