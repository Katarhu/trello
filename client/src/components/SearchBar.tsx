import { TextField } from "@common/components";
import { ChangeEventHandler, useId, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const id = useId();

  const handleQueryChange: ChangeEventHandler = (event) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  return (
    <AppSearchBar role="search">
      <TextField value={query} onChange={handleQueryChange} id={id} />
      <IconLabel htmlFor={id}>
        <FiSearch />
      </IconLabel>
    </AppSearchBar>
  );
};

const AppSearchBar = styled.section`
  width: 100%;
  max-width: 27em;
  background: ${({ theme }) => theme["gray-300"]};
  border-radius: var(--borderRadius-700);
  padding: 0.25em 0.75em;

  display: flex;
  align-items: center;
  gap: var(--gap-300);
`;

const IconLabel = styled.label`
  cursor: pointer;
`;
