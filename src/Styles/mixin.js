import { css } from 'styled-components';

export const flexCenter = (flex, justify, align) => css`
  display: ${flex};
  justify-content: ${justify};
  align-items: ${align};
`;

// `
// ${flexCenter('flex', 'center', 'center')}
// `;
