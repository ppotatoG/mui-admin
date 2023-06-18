import styled from 'styled-components';

const Button = styled.button<IButton>`
  font-size: var(--medium);
  padding: 8px 16px;
  border-radius: 4px;

  background-color: ${({ theme, variant, color }) => {
    if (variant === 'fill') {
      return theme[color];
    }
  }};

  color: ${({ theme, variant, color }) => {
    if (variant === 'outline' || variant === 'text') {
      return theme[color];
    } else {
      return theme['text'];
    }
  }};

  border: ${({ theme, variant, color }) => {
    if (variant === 'outline') {
      return `${theme[color]} 1px solid`;
    }
  }};
`;

export { Button };
