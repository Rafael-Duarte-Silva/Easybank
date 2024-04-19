import { useState } from "react"

export const useHamburger = () => {
    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active);
    }

    return { active, toggleMode };
}