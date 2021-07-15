import { blue, neutral , yellow, green, red} from "./colors";
import { primaryFont } from "./typograph";

export const defaultTheme = {
    primaryColor: blue[400],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};

export const darkTheme = {
    primaryColor: neutral[300],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[100],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[100],
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: blue[100],
    textOnFormElementBackground: neutral[100],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100], 
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
}
}