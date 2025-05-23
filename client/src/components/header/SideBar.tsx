import { JSX, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

import { Drawer, Portal } from '@chakra-ui/react';
import { BtnOutline } from '@components/ButtonItems';
import { Rights } from '@components/Rights';
import { Logo } from '@header/Logo';
import { Nav } from '@header/Nav';

export const SideBar = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => setOpen(false);

    return (
        <Drawer.Root
            placement='start'
            open={open}
            onOpenChange={e => setOpen(e.open)}
        >
            <Drawer.Trigger asChild>
                <BtnOutline color='gry' hideFrom='md'>
                    <LuMenu />
                </BtnOutline>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner p='3'>
                    <Drawer.Content rounded='md' bg='blu'>
                        <Drawer.Header>
                            <Drawer.Title>
                                <Logo onClose={handleClose} />
                            </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Nav onClose={handleClose} />
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Rights />
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <BtnOutline color='wht'>
                                <LuX />
                            </BtnOutline>
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
};
