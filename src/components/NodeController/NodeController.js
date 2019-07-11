import React from "react";
import styled from "styled-components";
import Node from "../../components/Node/Node";

const Container = styled.div`
  border-bottom: 1px solid #eee;
`;

const NodeController = ({ nodes }) => {
  return (
    <Container>
      {nodes.length > 0 &&
        nodes.map((node, index) => <Node key={index} {...node} />)}
    </Container>
  );
};

export default NodeController;
