import colors from '@styles/_themes-vars.module.scss';

const themes = {
  dark: {
    background: colors.paper,
    text: colors.grey900,
    paper: colors.paper,
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    warning: colors.warningLight,
    error: colors.errorLight,
  },
  light: {
    background: colors.darkBackground,
    text: colors.grey50,
    paper: colors.darkPaper,
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    warning: colors.warningDark,
    error: colors.errorDark,
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
};

export default themes;
