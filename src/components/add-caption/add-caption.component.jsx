import React from "react";
import { connect } from "react-redux";

import {
  StyledTextArea,
  StyledAddCaptionContainer,
  StyledAddCaptionFooter
} from "../styled-components/styled-text-area";

import { StyledSend, StyledInput } from "../styled-components/styled-card";
import { splitString } from "../../custom-functions/custom-functions";
import { createNewCaption, createNewCaptionWithTags } from "../../redux/api";

class AddCaption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      tags: ""
    };
  }
  handleCaption = event => {
    this.setState({
      ...this.state,
      caption: event.target.value
    });
  };
  handleTag = event => {
    this.setState({
      ...this.state,
      tags: event.target.value
    });
  };
  handleSend = () => {
    const { tags, caption } = this.state;

    if (tags.length > 0 && caption.length > 0) {
      this.props.createNewCaptionWithTags(caption, splitString(tags));
      this.setState({
        ...this.state,
        caption: "",
        tags: ""
      });
    }
    if (caption.length > 0 && tags.length === 0) {
      createNewCaption(caption);
      this.setState({
        ...this.state,
        caption: "",
        tags: ""
      });
    }
    this.setState({
      ...this.state,
      caption: "",
      tags: ""
    });
  };
  render() {
    return (
      <StyledAddCaptionContainer>
        <StyledTextArea
          placeholder="Create new caption"
          autocomplete="off"
          role="textbox"
          aria-autocomplete="list"
          aria-haspopup="true"
          onChange={this.handleCaption}
          value={this.state.caption}
        />
        <StyledAddCaptionFooter>
          <StyledInput placeholder="Add tag(s)" onChange={this.handleTag} />
          <StyledSend onClick={this.handleSend}>&#x27A4;</StyledSend>
        </StyledAddCaptionFooter>
      </StyledAddCaptionContainer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createNewCaptionWithTags: (caption, tags) =>
    dispatch(createNewCaptionWithTags(caption, tags))
});
export default connect(null, mapDispatchToProps)(AddCaption);
