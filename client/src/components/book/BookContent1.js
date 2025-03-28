import { Flex } from "@chakra-ui/react";

import BookRoomSelect from '@book/BookRoomSelect';
import BookCalendarForm from "@book/BookCalendarForm";

const BookContent1 = () => (
    <Flex gap='10' direction='column'>
        <BookCalendarForm />
        <BookRoomSelect />
    </Flex>
);

export default BookContent1;