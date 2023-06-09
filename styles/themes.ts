import colors from '@styles/_themes-vars.module.scss';

const themes = {
  light: {
    background: colors.paper,
    text: colors.grey900,
    paper: colors.paper,
    primary: colors.primaryMain,
    secondary: colors.secondaryMain,
    warning: colors.warningMain,
    error: colors.errorMain,
  },
  dark: {
    background: colors.darkBackground,
    text: colors.grey50,
    paper: colors.darkPaper,
    primary: colors.darkPrimaryMain,
    secondary: colors.darkSecondaryMain,
    warning: colors.warningMain,
    error: colors.errorMain,
  },
};

export default themes;
