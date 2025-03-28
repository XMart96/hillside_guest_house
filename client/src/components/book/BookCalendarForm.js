import { Flex, Box, DataList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import { format, parse, differenceInDays, isBefore } from "date-fns";
import { ru, enUS } from "date-fns/locale";
import { useSelector, useDispatch } from 'react-redux';

import { selectCalendarForm, setFormData } from '../../features/calendarForm/calendarFormSlice';
import DateInput from '@components/DateInput';
import NumberInput from '@components/NumberInput';
import { Btn } from '@components/elements';
import logger from "@/logger";

const BookCalendarForm = () => {
    const ns = ['initialForm'];
    const { t, i18n } = useTranslation(ns);
    ns.forEach(n => !i18n.hasResourceBundle(i18n.language, n) && logger('assert', '104', n));

    const dispatch = useDispatch();

    const initialFormData = useSelector(selectCalendarForm);
    const {checkIn: storedCheckIn, checkOut: storedCheckOut} = initialFormData;

    const { handleSubmit, formState: { errors }, control, watch } = useForm({ 
        mode: 'onChange', 
        defaultValues: {
            ...initialFormData,
            checkIn: storedCheckIn ? parse(storedCheckIn, 'dd-MM-yyyy', new Date()): null,
            checkOut: storedCheckOut ? parse(storedCheckOut, 'dd-MM-yyyy', new Date()) : null
        }
    });

    !control && logger('assert', '106');

    const watchCheckIn = watch("checkIn");
    const watchCheckOut = watch("checkOut");
    const watchAdult = watch("adult");

    const am = {
        code: "am",
        formatDistance: (token, count) => `${count} ${token}`,
        formatLong: {
          date: () => "yyyy MMMM dd",
          time: () => "HH:mm",
          dateTime: () => "yyyy MMMM dd HH:mm",
        },
        formatRelative: (token) => token,
        localize: {
            day: (n) => ["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"][n],
            month: (n) => [
                "հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս",
                "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"
            ][n],
            ordinalNumber: (n) => `${n}-րդ`
        },
        match: {
            day: () => null,
            month: () => null,
        }
    };

    const locales = { en: enUS, ru, am };
    const currentLocale = locales[i18n.language];
    const locale = typeof currentLocale === "object" ? currentLocale : enUS;

    const formattedCheckIn = watchCheckIn ? 
        format(new Date(watchCheckIn), 'EEEE, dd MMMM yyyy', { locale }) : "—";
    const formattedCheckOut = watchCheckOut ? 
        format(new Date(watchCheckOut), 'EEEE, dd MMMM yyyy', { locale }) : "—";
    const nightCount = watchCheckIn && watchCheckOut ? 
        differenceInDays(new Date(watchCheckOut), new Date(watchCheckIn)) : 0;

    const onSubmit = handleSubmit(data => {
        const checkInDate = new Date(data.checkIn);
        const checkOutDate = new Date(data.checkOut);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isBefore(checkOutDate, checkInDate)) {
            logger('error', '204');
            return;
        }
        if (isBefore(checkInDate, today)) {
            logger('error', '205');
            return;
        }
        const formattedData = {
            ...data,
            checkIn: format(checkInDate, 'dd-MM-yyyy'),
            checkOut: format(checkOutDate, 'dd-MM-yyyy')
        };

        dispatch(setFormData(formattedData));
    });

    return (
        <Flex wrap='wrap'>
        <Box flex='1'>
            <form onSubmit={onSubmit}>
                <Flex direction='column' gap={{ base: '5', md: '8' }}>
                    <DateInput 
                        inputName='checkIn' 
                        control={control} 
                        errors={errors} 
                        checkInValue={watchCheckIn} 
                        checkOutValue={watchCheckOut} 
                    />
                    <DateInput 
                        inputName='checkOut'
                        control={control} 
                        errors={errors} 
                        checkInValue={watchCheckIn} 
                        checkOutValue={watchCheckOut} 
                    />
                    <NumberInput 
                        inputName='adult'
                        control={control} 
                        errors={errors} 
                    />
                    <Btn type="submit">
                        {t('button')}
                    </Btn>
                </Flex>
            </form>
        </Box>
        <Box flex='1'>
            <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
                <DataList.Item pt="4">
                    <DataList.ItemLabel>{t('checkIn')}</DataList.ItemLabel>
                    <DataList.ItemValue>{formattedCheckIn}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>{t('checkOut')}</DataList.ItemLabel>
                    <DataList.ItemValue>{formattedCheckOut}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>Night count</DataList.ItemLabel>
                    <DataList.ItemValue>{nightCount}</DataList.ItemValue>
                </DataList.Item>
                <DataList.Item pt="4">
                    <DataList.ItemLabel>{t('adult')}</DataList.ItemLabel>
                    <DataList.ItemValue>{watchAdult}</DataList.ItemValue>
                </DataList.Item>
            </DataList.Root>
        </Box>
        </Flex>
    );
};

export default BookCalendarForm;