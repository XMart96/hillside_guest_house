import BookCalendarForm from "@book/BookCalendarForm";
import BookRoomSelect from '@book/BookRoomSelect';
import { Flex } from "@chakra-ui/react";

const BookContent1 = () => (
    <Flex gap='10' wrap='wrap'>
        <BookCalendarForm />
        <BookRoomSelect />
    </Flex>
);

export default BookContent1;