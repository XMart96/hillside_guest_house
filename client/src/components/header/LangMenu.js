import { 
    MenuContent,
    MenuRadioItem,
    MenuRadioItemGroup,
    MenuRoot,
    MenuTrigger
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { LuLanguages } from "react-icons/lu";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

const LangMenu = () => {
    const [lang, setLang] = useState("asc");

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant='ghost' size="sm" color='white' _hover={{ color: 'grn'}}>
                    <LuLanguages /> <Text hideBelow='md'>Lang</Text>
                </Button>
            </MenuTrigger>
            <MenuContent minW="10rem">
                <MenuRadioItemGroup
                    value={lang}
                    onValueChange={(e) => setLang(e.value)}
                >
                <MenuRadioItem value="asc">Ascending</MenuRadioItem>
                <MenuRadioItem value="desc">Descending</MenuRadioItem>
                </MenuRadioItemGroup>
            </MenuContent>
        </MenuRoot>
    );
};

export default LangMenu;