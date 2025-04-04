import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

export type LinkItemProps = {
    icon?: IconType;
    disableHideIcon?: boolean;
    url: string;
    text: string;
};

export type NavItems = {
    path: string;
    label: string;
};

export type NavLinkItemProps = {
    path: string;
    label: string;
    onClose?: () => void;
};

export type DrawerTriggerProps = {
    onClose?: () => void;
};

export type FooterItemContainerProps = {
    children: ReactNode;
    flex?: string;
};

export type RoomItems = {
    path: string;
    header: string;
};

export type NewsItems = {
    path: string;
    label: string;
};

export type ButtonItemProps = {
    children: ReactNode;
    type?: 'submit';
};

export interface INewsletterFormValues {
    newsletterEmail: string;
}

export type NewsletterInputProps = {
    register: UseFormRegister<INewsletterFormValues>;
    requiredText: string;
    errorText: string;
};
