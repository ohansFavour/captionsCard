import React from "react";
import { connect } from "react-redux";

import { checkIfAvailableInArray } from "../../custom-functions/custom-functions";
import {
  StyledCardContainer,
  StyledCardFooter,
  StyledCardContent,
  StyledSend,
  StyledPrompt,
  StyledInput,
  StyledAddSign
} from "../styled-components/styled-card";
import { selectTagsLoading, selectTagsArray,selectAdddingTagToCaptionBoolean} from "../../redux/selectors";
import Spinner from "../spinner/spinner.component";
import { addTagToCaption } from "../../redux/api";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
      prompt: "add",
      tag: ""
    };
  }
  handleInput = event => {
    const tag = event.target.value;
    this.setState({
      ...this.state,
      tag: tag
    });
  };
  handlePromptSend = () => {
    this.setState({
      ...this.state,
      prompt: "send",
      initial: false
    });
  };
  handleSend = captionId => {
    // check if tag is already in the database
    const inDatabase = checkIfAvailableInArray(this.state.tag, this.props.tags);
    if (inDatabase.available & this.state.tag.length > 0 ) {
      
      this.props.addTagToCaption(captionId, inDatabase.id);
    }
    this.setState({
      ...this.state,
      prompt: "add",
      initial: true,
      tag:""
    });
  };
  render() {
    const { isLoadingTags, tags, captionObj,isAddingTagToCaption } = this.props;
    return (
      <StyledCardContainer>
        <StyledCardContent>{captionObj.caption}</StyledCardContent>
        <StyledCardFooter>
          {isLoadingTags || isAddingTagToCaption ? (
            <Spinner size={10} />
          ) : (
            <React.Fragment>
              {this.state.initial ? (
                <StyledPrompt>Add tag</StyledPrompt>
              ) : (
                <StyledInput
                  placeholder="Enter tag"
                  value={this.state.tag}
                  onChange={this.handleInput}
                />
              )}

              {this.state.prompt === "add" ? (
                <StyledAddSign onClick={this.handlePromptSend} />
              ) : (
                <StyledSend
                  onClick={props => {
                    this.handleSend(captionObj.id);
                  }}
                >
                  &#x27A4;
                </StyledSend>
              )}
            </React.Fragment>
          )}
        </StyledCardFooter>
      </StyledCardContainer>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingTags: selectTagsLoading(state),
  tags: selectTagsArray(state),
  isAddingTagToCaption: selectAdddingTagToCaptionBoolean(state)
});
const mapDispatchToProps = dispatch => ({
  addTagToCaption: (captionId, tagId) =>
    dispatch(addTagToCaption(captionId, tagId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
