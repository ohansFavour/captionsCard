import React from "react";
import { connect } from "react-redux";

import {
  SearchContainer,
  SearchSymbol,
  SearchInput
} from "../../components/styled-components/styled-search-box";
import {
  selectTwentyOfMany,
  filterArray
} from "../../custom-functions/custom-functions";
import { StyledTagDiv } from "../../components/styled-components/styled-tags-div";
import { StyledTagsSpinner } from "../../components/styled-components/styled-tags-spinner";
import { selectTagsLoading, selectTagsArray } from "../../redux/selectors";
import TagCard from "../../components/tag-card/tag-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { StyledTagsContainer, StyledContainer } from "../../components/styled-components/styled-tags-container";
import {
  StyledSend,
  StyledInput,
  StyledCreateTag
} from "../../components/styled-components/styled-card";
import { StyledAddCaptionFooter } from "../../components/styled-components/styled-text-area";
import { createNewTag } from "../../redux/api";
import Header from "../../components/header/header.component";

class TagsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTag: "",
      initial: true,
      newTag: ""
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

  render() {
    const { isLoadingTags, tags } = this.props;
    const tagsShown = this.state.initial
      ? selectTwentyOfMany(tags)
      : filterArray(tags, this.state.searchTag);

    return (
        <StyledContainer>
            <Header/>
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
              {tagsShown.map(eachTag => (
                <TagCard title={eachTag} />
              ))}
            </React.Fragment>
          )}
        </StyledTagDiv>
        <StyledAddCaptionFooter>
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
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTags: selectTagsLoading(state),
  tags: selectTagsArray(state)
});
const mapDispatchToProps = dispatch => ({
  createNewTag: tag => dispatch(createNewTag(tag))
});
export default connect(mapStateToProps, mapDispatchToProps)(TagsPage);
