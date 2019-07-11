import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #eee;
  border: 1px solid #ddd;
`;

const Title = styled.h4`
  font-weight: bold;
  color: #333;
`;

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: #888;
`;

const Node = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default Node;
