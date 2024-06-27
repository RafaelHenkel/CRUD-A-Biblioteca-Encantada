import styled from 'styled-components';

const HeaderDefaultStyled = styled.header`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default HeaderDefaultStyled;
