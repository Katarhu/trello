import styled from "styled-components";

interface DividerProps {
  horizontal?: boolean;
}

export const Divider = ({ horizontal }: DividerProps) => {
  return <AppDivider horizontal={horizontal} />;
};

Divider.defaultProps = {
  horizontal: false,
};

const AppDivider = styled.div<DividerProps>`
  flex-shrink: 0;
  width: ${(props) => (props.horizontal ? "100%" : "1px")};
  height: ${(props) => (props.horizontal ? "1px" : "100%")};

  background: ${({ theme }) => theme["gray-500"]};
`;
