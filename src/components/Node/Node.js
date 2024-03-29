import React, { PureComponent } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import dateFns from "date-fns";
import sanitizeHtml from "sanitize-html";
import { GithubPicker as Picker } from "react-color";

import { IoIosClose } from "react-icons/io";

const Container = styled.div`
  transition: 0.32s cubic-bezier(0.165, 0.84, 0.44, 1) all;
  position: relative;
  background: ${props => (props.color ? props.color : `#fffcc1`)};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.7);
  &:hover {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.7);
  }
`;

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: #888;
  line-height: 1.5;
  & > p {
    min-height: 100px;
  }
`;

const ColorPicker = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -75px;
  right: -10px;
`;

const ColorButton = styled.button`
  transition: 0.32s cubic-bezier(0.165, 0.84, 0.44, 1) all;
  position: absolute;
  background: ${props => props.color};
  padding: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -0.5rem;
  right: -0.5rem;
  z-index: 1;
  border: 2px solid #000;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.47);
  &:hover {
    background: #7e97a6;
  }
`;

const CloseButton = styled.button`
  transition: 0.32s cubic-bezier(0.165, 0.84, 0.44, 1) all;
  position: absolute;
  background: #373640;
  padding: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -0.5rem;
  right: -0.5rem;
  z-index: 1;
  border: 2px solid #fff;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.47);
  &:hover {
    background: #7e97a6;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: #333;
  font-size: 2rem;
  max-width: 300px;
  border: 1px dashed #333;
`;

const Updated = styled.div`
  font-size: 0.85rem;
  font-style: italic;
  padding-bottom: 1rem;
`;

const sanitizeConf = {
  allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  allowedAttributes: { a: ["href"] }
};

class Node extends PureComponent {
  //NOTE: Not particularly robust. Re-render may drop data
  state = {
    isSwatchVisible: false,
    title: this.props.title,
    content: this.props.content,
    color: this.props.color
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      content: nextProps.content,
      color: nextProps.color
    });
  }

  handleClose = id => {
    const { onDelete } = this.props;
    onDelete && onDelete(id);
  };

  handleChange = (evt, field) => {
    this.setState({
      ...this.state,
      [field]: evt.target.value
    });
  };

  handleColorSwatchClick = () => {
    this.setState({
      isSwatchVisible: !this.state.isSwatchVisible
    });
  };

  handleColorChange = (color, event) => {
    const { id, onUpdate } = this.props;
    const { title, content } = this.state;

    this.setState(
      {
        color: color.hex,
        isSwatchVisible: false
      },
      () => {
        onUpdate && onUpdate(id, title, content, color.hex);
      }
    );
  };

  handleSanitize = id => {
    const { onUpdate } = this.props;
    const { title, content } = this.state;
    this.setState(
      {
        title: sanitizeHtml(title, sanitizeConf),
        content: sanitizeHtml(content, sanitizeConf)
      },
      () => {
        onUpdate && onUpdate(id, title, content);
      }
    );
  };

  render() {
    const { id, updated } = this.props;
    const { isSwatchVisible, title, color } = this.state;
    return (
      <Container color={color}>
        <Updated>
          Last updated: {dateFns.format(updated, "MM/DD/YYYY hh:mm a")}
        </Updated>
        <Title>
          <ContentEditable
            html={title}
            onChange={evt => this.handleChange(evt, "title")}
            onBlur={() => this.handleSanitize(id)}
            tagName="h4"
          />
        </Title>
        <Content>
          <ContentEditable
            html={this.state.content}
            onChange={evt => this.handleChange(evt, "content")}
            onBlur={() => this.handleSanitize(id)}
            tagName="p"
          />
        </Content>
        <CloseButton onClick={() => this.handleClose(id)}>
          <IoIosClose size={24} />
        </CloseButton>
        <ColorButton
          title="Note color"
          onClick={() => this.handleColorSwatchClick()}
          color={color}
        />
        {isSwatchVisible && (
          <ColorPicker>
            <Picker
              color={color}
              triangle="top-right"
              onChangeComplete={this.handleColorChange}
            />
          </ColorPicker>
        )}
      </Container>
    );
  }
}

export default Node;
