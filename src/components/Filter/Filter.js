import React from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

import { IoMdCheckmark } from "react-icons/io";

const CheckboxContainer = styled.div`
  align-items: center;
  background: ${props => (props.active ? "#b6f7c1" : "transparent")};
  border-radius: 3px;
  border: ${props =>
    props.active ? "2px solid transparent" : "2px solid #b6f7c1"};
  display: flex;
  height: 24px;
  justify-content: center;
  left: 0.5rem;
  overflow: hidden;
  position: absolute;
  top: calc(50% - 12px);
  transition: 0.25s ease-out all;
  width: 24px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-content: center;
  justify-items: center;
  background: "#373640";
  height: 3rem;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const Checkbox = ({ active }) => {
  return (
    <CheckboxContainer active={active} style={{ pointerEvents: "none" }}>
      <IoMdCheckmark
        color={active ? "#333" : "transparent"}
        size="24"
        style={{ display: active ? "block" : "none" }}
      />
    </CheckboxContainer>
  );
};

const Option = props => {
  const { isSelected, label, value } = props;
  return (
    <OptionContainer title={`${label} (${value})`}>
      <Checkbox active={isSelected} />

      <components.Option {...props} />
    </OptionContainer>
  );
};

const DefaultValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);

const ValueContainer = props => <DefaultValueContainer {...props} />;

const customStyles = {
  control: (base, state) => {
    return {
      ...base,
      border: "none",
      color: "red",
      margin: 0,
      minHeight: "3rem",
      padding: 0,
      backgroundColor: "#373640"
    };
  },

  container: base => ({
    ...base,
    padding: 0
  }),

  menu: base => {
    return {
      ...base,
      background: "#373640",
      transition: "0.25s ease-out all",
      boxShadow: "0 2px 4px 0 rgba(168, 179, 199, 0.35)"
    };
  },

  option: (base, state) => {
    const { isSelected } = state;
    return {
      ...base,
      backgroundColor: isSelected ? "#6c6b78" : "#373640",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      ":hover": {
        color: "#b6f7c1"
      },
      fontSize: "1rem",
      minHeight: "40px",
      paddingLeft: "3rem",
      transition: "0.25s ease-out all"
    };
  }
};

const Filter = ({ items, onUpdate }) => {
  const handleChange = selected => {
    console.log(selected);
    onUpdate && onUpdate(selected);
  };
  return (
    <Wrapper>
      <Select
        isSearchable={false}
        options={items}
        onChange={selected => handleChange(selected)}
        blurInputOnSelect
        styles={customStyles}
        placeholder="Sort"
        components={makeAnimated({
          IndicatorSeparator: () => null,
          Option,
          ValueContainer
        })}
      />
    </Wrapper>
  );
};

export default Filter;
