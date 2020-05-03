import styled from "styled-components";

interface TitleProps {
  readonly isActive: boolean;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;

export { Title };
