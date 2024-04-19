import { useSocialIcon } from "./hooks/useSocialIcon";

type SocialIconProps = {
    activeIcon: string,
    icon: string,
    alt: string
}

export const SocialIcon = ({activeIcon, icon, alt}: SocialIconProps) => {
    const { active, mouseEnter, mouseLeave } = useSocialIcon();

    return <img src={active ? activeIcon : icon} alt={alt} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/>;
}