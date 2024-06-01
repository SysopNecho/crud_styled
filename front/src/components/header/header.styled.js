import styled from 'styled-components';

export const Container = styled.header`
  border: 1px solid ${(props) => props.theme.color1};
  background-color: ${(props) => props.theme.color2}
`;

export const ButtonTheme = styled.button`
  background-color: green;
`