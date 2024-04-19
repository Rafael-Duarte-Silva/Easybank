import { useState } from "react";

export const useSocialIcon = () => {
    const [active, setActive] = useState(false);
    
    const mouseEnter = () => {
        setActive(true);
    }

    const mouseLeave = () => {
        setActive(false);
    }

    return { active, mouseEnter, mouseLeave };
};