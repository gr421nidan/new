import { Switch } from "@headlessui/react";
import { useContext } from "react";
import { ThemeContext } from "@/app/providers/theme";
import { ETheme } from "@/shared/common/enum/theme";
import { switcherButtonStyles, switcherCircleStyles } from "@/features/theme-switcher/style.ts";

const ThemeSwitcher: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <Switch
            checked={theme === ETheme.DARK}
            onChange={toggleTheme}
            className={switcherButtonStyles()}>
            <span
                className={switcherCircleStyles()}
            />
        </Switch>
    );
};
export default ThemeSwitcher;
