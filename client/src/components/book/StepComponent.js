import {
    StepsCompletedContent,
    StepsContent,
    StepsItem,
    StepsList,
    StepsNextTrigger,
    StepsPrevTrigger,
    StepsRoot,
} from "@components/ui/steps"  
import { Btn } from '@components/elements';
import { Group, Icon } from "@chakra-ui/react";
import { LuCalendarSearch, LuUserPen, LuBanknote, LuCheck } from 'react-icons/lu';

import BookContent1 from "@book/BookContent1";

const StepComponent = () => (
    <StepsRoot defaultStep={0} count={3}>
    <StepsList>
      <StepsItem index={0} completedIcon={<Icon as={LuCheck} color="wht"></Icon>} icon={<Icon as={LuCalendarSearch} color="gry"></Icon>} title="Calendar" />
      <StepsItem index={1} completedIcon={<Icon as={LuCheck} color="wht"></Icon>} icon={<Icon as={LuUserPen} color="gry"></Icon>} title="Information" />
      <StepsItem index={2} completedIcon={<Icon as={LuCheck} color="wht"></Icon>} icon={<Icon as={LuBanknote} color="gry"></Icon>} title="Payment" />
    </StepsList>

    <StepsContent color='gry' index={0}><BookContent1 /></StepsContent>
    <StepsContent color='gry' index={1}>Step 2</StepsContent>
    <StepsContent color='gry' index={2}>Step 3</StepsContent>
    <StepsCompletedContent>All steps are complete!</StepsCompletedContent>

    <Group>
      <StepsPrevTrigger asChild>
        <Btn>Prev</Btn>
      </StepsPrevTrigger>
      <StepsNextTrigger asChild>
        <Btn>Next</Btn>
      </StepsNextTrigger>
    </Group>
  </StepsRoot>
);

export default StepComponent;