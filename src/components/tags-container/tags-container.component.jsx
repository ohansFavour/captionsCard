import React from "react";
import { connect } from "react-redux";

import {
  SearchContainer,
  SearchSymbol,
  SearchInput
} from "../styled-components/styled-search-box";
import {
  selectSixOfMany,
  filterArray,
  createInitialArray,
  changeValueOfIndex,
  checkIfAnySelected,
  countAmountInArray,
  getAllIndexes, getCorrespondingArray
} from "../../custom-functions/custom-functions";
import { StyledTagDiv } from "../styled-components/styled-tags-div";
import { StyledTagsSpinner } from "../styled-components/styled-tags-spinner";
import { selectTagsLoading, selectTagsArray } from "../../redux/selectors";
import Spinner from "../spinner/spinner.component";
import { StyledTagsContainer, StyledContainer } from "../styled-components/styled-tags-container";
import {
  StyledSend,
  StyledInput,
  StyledCreateTag
} from "../styled-components/styled-card";
import { StyledAddCaptionFooter } from "../styled-components/styled-text-area";
import { createNewTag, getCaptionsWithTag, getCaptionsWithTags } from "../../redux/api";
import StyledTagCard from "../styled-components/styled-tag-card";
import { StyledSendTagButton } from "../styled-components/styled-send-tag-button";

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTag: "",
      initial: true,
      newTag: "",
      selectedTags: [],
      sendButton: false,
      arrayOfTags: createInitialArray(this.props.tags.length)
    };
  }

  handleSearch = event => {
    this.setState(
      {
        ...this.state,
        searchTag: event.target.value
      },
      () => {
        if (this.state.searchTag.trim().length > 0) {
          this.setState({
            ...this.state,
            initial: false
          });
        } else {
          this.setState({
            ...this.state,
            initial: true
          });
        }
      }
    );
  };

  handleCreateTag = event => {
    this.setState({
      ...this.state,
      newTag: event.target.value
    });
  };

  handleTagSend = () => {
    this.props.createNewTag(this.state.newTag.toLowerCase());
    this.setState({
      ...this.state,
      newTag: ""
    });
    
  };

  handleViewCaptions = () => {
    if (countAmountInArray(this.state.arrayOfTags, true) === 1) {
      const tagId = this.state.arrayOfTags.indexOf(true) + 1;
      this.props.getCaptionsWithTag(tagId);
    } else {
      const arrayOfIndexes= getAllIndexes(this.state.arrayOfTags, true);
      const arrayOfTags = getCorrespondingArray(arrayOfIndexes, this.props.tags);
      this.props.getCaptionsWithTags(arrayOfTags);
    }
    this.setState({
      ...this.state,
      arrayOfTags: createInitialArray(this.props.tags.length)
    })
  };
  handleTagClick = tagId => {
    const newArray = changeValueOfIndex(this.state.arrayOfTags, tagId);
    this.setState({
      ...this.state,
      arrayOfTags: newArray
    });
  };
  render() {
    const { isLoadingTags, tags } = this.props;
    const tagsShown = this.state.initial
      ? selectSixOfMany(tags)
      : filterArray(tags, this.state.searchTag);

    return (
      <StyledTagsContainer>
        <SearchContainer>
          <SearchInput
            placeholder={`Search available tags`}
            onChange={this.handleSearch}
          />
          <SearchSymbol />
        </SearchContainer>
        <StyledTagDiv>
          {isLoadingTags ? (
            <StyledTagsSpinner>
              <Spinner size={20} />
            </StyledTagsSpinner>
          ) : (
            <React.Fragment>
              {tagsShown.map((eachTag, index) => (
                <StyledTagCard
                  color={this.state.arrayOfTags[index] ? `green` : `blue`}
                  onClick={() => this.handleTagClick(index + 1)}
                >
                  {eachTag}
                </StyledTagCard>
              ))}
            </React.Fragment>
          )}
        </StyledTagDiv>
        <StyledAddCaptionFooter>
          {checkIfAnySelected(this.state.arrayOfTags) ? (
            <StyledSendTagButton onClick={this.handleViewCaptions}>
              View Captions
            </StyledSendTagButton>
          ) : null}
          <StyledCreateTag>
            <StyledInput
              placeholder="Create new tag"
              onChange={this.handleCreateTag}
              value={this.state.newTag}
            />
            <StyledSend onClick={this.handleTagSend}>&#x27A4;</StyledSend>
          </StyledCreateTag>
        </StyledAddCaptionFooter>
      </StyledTagsContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTags: selectTagsLoading(state),
  tags: selectTagsArray(state)
});
const mapDispatchToProps = dispatch => ({
  createNewTag: tag => dispatch(createNewTag(tag)),
  getCaptionsWithTag: tagId => dispatch(getCaptionsWithTag(tagId)),
  getCaptionsWithTags: tags => dispatch(getCaptionsWithTags(tags))
});
export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer);
