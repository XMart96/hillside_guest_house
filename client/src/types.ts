import { Control, FormState, UseFormRegister } from 'react-hook-form';

export interface INewsletterFormValues {
    newsletterEmail: string;
}

export type NewsletterInputProps = {
    register: UseFormRegister<INewsletterFormValues>;
    errors: FormState<INewsletterFormValues>['errors'];
    name: keyof INewsletterFormValues;
    labelText: string;
    requiredText: string;
    errorText: string;
};

export interface IDateInputFormValues {
    checkIn: Date | null;
    checkOut: Date | null;
}

export type DateInputProps = {
    control: Control<IHomePageFormValues>;
    errors: FormState<IHomePageFormValues>['errors'];
    name: keyof IDateInputFormValues;
    formValues: IDateInputFormValues;
    labelText: string;
    requiredText: string;
    stayText: string;
    tooltipText: string;
};

export interface INumberFormValues {
    adult: string;
}

export type NumberInputProps = {
    control: Control<IHomePageFormValues>;
    errors: FormState<IHomePageFormValues>['errors'];
    name: keyof INumberFormValues;
    labelText: string;
    requiredText: string;
    errorMinText: string;
    errorMaxText: string;
};

export interface IHomePageFormValues
    extends IDateInputFormValues,
        INumberFormValues {}
