import { IHomePageFormValues } from '@/types';
import { DataList, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
    format,
    differenceInDays,
    FormatDistanceFn,
    FormatRelativeFn,
    Locale,
    Localize,
    Match,
} from 'date-fns';
import { ru, enUS } from 'date-fns/locale';

interface IFormDataListProps {
    formValues: IHomePageFormValues;
}
export const FormDataList = ({ formValues }: IFormDataListProps) => {
    const ns = ['initialForm'];
    const { t, i18n } = useTranslation(ns);
    const { checkIn, checkOut, adult } = formValues;

    const am: Locale = {
        code: 'am',
        formatDistance: ((token, count) =>
            `${count} ${token}`) as FormatDistanceFn,
        formatLong: {
            date: () => 'yyyy MMMM dd',
            time: () => 'HH:mm',
            dateTime: () => 'yyyy MMMM dd HH:mm',
        },
        formatRelative: (token => token) as FormatRelativeFn,
        localize: {
            day: ((n: number) =>
                [
                    'կիրակի',
                    'երկուշաբթի',
                    'երեքշաբթի',
                    'չորեքշաբթի',
                    'հինգշաբթի',
                    'ուրբաթ',
                    'շաբաթ',
                ][n]) as Localize['day'],
            month: ((n: number) =>
                [
                    'հունվար',
                    'փետրվար',
                    'մարտ',
                    'ապրիլ',
                    'մայիս',
                    'հունիս',
                    'հուլիս',
                    'օգոստոս',
                    'սեպտեմբեր',
                    'հոկտեմբեր',
                    'նոյեմբեր',
                    'դեկտեմբեր',
                ][n]) as Localize['month'],
            ordinalNumber: ((n: number) =>
                `${n}-րդ`) as Localize['ordinalNumber'],
            era: ((n: number) => ['մ.թ.ա.', 'մ.թ.'][n]) as Localize['era'],
            quarter: ((n: number) => `${n}-րդ քառորդ`) as Localize['quarter'],
            dayPeriod: ((period: string) =>
                period === 'am' ? 'առավոտ' : 'երեկո') as Localize['dayPeriod'],
        },
        match: {
            day: () => null,
            month: () => null,
        } as unknown as Match,
    };

    const locales = { en: enUS, ru, am };
    const currentLocale =
        locales[i18n.language as keyof typeof locales] || enUS;
    const locale = typeof currentLocale === 'object' ? currentLocale : enUS;

    const formattedCheckIn = checkIn
        ? format(new Date(checkIn), 'EEEE, dd MMMM yyyy', { locale })
        : '—';
    const formattedCheckOut = checkOut
        ? format(new Date(checkOut), 'EEEE, dd MMMM yyyy', { locale })
        : '—';
    const nightCountValue =
        formValues.checkIn && formValues.checkOut
            ? differenceInDays(
                  new Date(formValues.checkOut),
                  new Date(formValues.checkIn)
              )
            : 0;

    return (
        <Box flex='1'>
            <DataList.Root orientation='horizontal' divideY='1px' maxW='md'>
                <DataList.Item pt='4'>
                    <DataList.ItemLabel>{t('checkIn')}</DataList.ItemLabel>
                    <DataList.ItemValue>{formattedCheckIn}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt='4'>
                    <DataList.ItemLabel>{t('checkOut')}</DataList.ItemLabel>
                    <DataList.ItemValue>{formattedCheckOut}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt='4'>
                    <DataList.ItemLabel>Night count</DataList.ItemLabel>
                    <DataList.ItemValue>{nightCountValue}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt='4'>
                    <DataList.ItemLabel>{t('adult')}</DataList.ItemLabel>
                    <DataList.ItemValue>{adult}</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
        </Box>
    );
};
