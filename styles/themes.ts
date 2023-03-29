import colors from '@styles/_themes-vars.module.scss';

const themes = {
  light: {
    background: '#fff',
    text: '#333',
    paper: colors.paper,
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    warning: colors.warning,
    error: colors.errorLight,
    orange: colors.orangeLight,
  },
  dark: {
    background: colors.darkBackground,
    text: colors.darkTextTitle,
    paper: colors.darkPaper,
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    warning: colors.warning,
    error: colors.errorDark,
    orange: colors.orangeDark,
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  // 기타 변수들 ...
};

export default themes;
