import React from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";

const Container = styled.div`
  position: relative;
  background: #eee;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  color: #333;
  max-width: 300px;
`;

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: #888;
`;

const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  height: 30px;
  width: 30px;
  display: block;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Node = ({ id, title, content, onUpdate, onDelete }) => {
  const handleClose = () => {
    onDelete && onDelete(id);
  };

  const handleBlur = evt => {
    onUpdate && onUpdate(id, evt.target.value, content);
  };

  return (
    <Container>
      <Title>
        <ContentEditable html={title} onChange={handleBlur} tagName="h4" />
      </Title>
      <Content>{content}</Content>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </Container>
  );
};

export default Node;
