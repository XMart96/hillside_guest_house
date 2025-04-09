import {
    LuBanknote,
    LuCalendarSearch,
    LuCheck,
    LuUserPen,
} from 'react-icons/lu';

import { StepContent1 } from '@book/StepContent1';
import { ButtonGroup, Icon, Steps } from '@chakra-ui/react';
import { Btn } from '@components/ButtonItems';

const steps = [
    {
        title: 'Calendar',
        icon: <Icon as={LuCalendarSearch} color='gry'></Icon>,
        render: <StepContent1 />,
    },
    {
        title: 'Information',
        icon: <Icon as={LuUserPen} color='gry'></Icon>,
        render: 'Step 2 description',
    },
    {
        title: 'Payment',
        icon: <Icon as={LuBanknote} color='gry'></Icon>,
        render: 'Step 3 description',
    },
];

export const StepsSection = () => (
    <Steps.Root defaultStep={0} count={steps.length} size='lg'>
        <Steps.List>
            {steps.map((step, index) => (
                <Steps.Item key={index} index={index} title={step.title}>
                    <Steps.Indicator
                        borderColor={{ base: 'gry', _current: 'grn' }}
                        bg={{ base: 'wht', _complete: 'grn' }}
                    >
                        <Steps.Status
                            incomplete={step.icon}
                            complete={<Icon as={LuCheck} color='wht'></Icon>}
                        />
                    </Steps.Indicator>
                    <Steps.Title color='gry'>{step.title}</Steps.Title>
                    <Steps.Separator bg={{ base: 'gry', _complete: 'grn' }} />
                </Steps.Item>
            ))}
        </Steps.List>

        {steps.map((step, index) => (
            <Steps.Content color='gry' key={index} index={index}>
                {step.render}
            </Steps.Content>
        ))}
        <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

        <ButtonGroup variant='outline'>
            <Steps.PrevTrigger asChild>
                <Btn>Prev</Btn>
            </Steps.PrevTrigger>
            <Steps.NextTrigger asChild>
                <Btn>Next</Btn>
            </Steps.NextTrigger>
        </ButtonGroup>
    </Steps.Root>
);
