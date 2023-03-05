import styled from "styled-components";

interface InputLengthProps {
  value: string;
  maxLength: number;
}
export const InputLength = ({ value, maxLength }: InputLengthProps) => {
  return (
    <InputLengthCounterContainer>
      <InputLengthCounter>
        {value.length}/{maxLength}
      </InputLengthCounter>
    </InputLengthCounterContainer>
  );
};

const InputLengthCounterContainer = styled.div`
  text-align: end;
`;

const InputLengthCounter = styled.span`
  font-size: 0.85em;
  color: ${({ theme }) => theme["gray-700"]};
`;
