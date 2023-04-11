import colors from '@styles/_themes-vars.module.scss';

const themes = {
  light: {
    background: colors.paper,
    text: colors.grey900,
    paper: colors.paper,
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    warning: colors.warningDark,
    error: colors.errorDark,
  },
  dark: {
    background: colors.darkBackground,
    text: colors.grey50,
    paper: colors.darkPaper,
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    warning: colors.warningLight,
    error: colors.errorLight,
  },
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
  },
};

export default themes;
