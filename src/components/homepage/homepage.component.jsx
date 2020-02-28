import React from "react";
import { connect } from "react-redux";


import { StyledCaptionsContainer } from "../styled-components/styled-captions-section";
import { StyledSecondSection } from "../styled-components/styled-text-area";
import { selectSixOfMany } from "../../custom-functions/custom-functions";
import { selectTagsLoading, selectTagsArray } from "../../redux/selectors";
import AddCaption from "../add-caption/add-caption.component";
import Header from "../header/header.component";
import Card from "../card/card.component";
import { fetchTags } from "../../redux/api";
import TagsContainer from "../tags-container/tags-container.component";

class HomepageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagSearch: ""
    };
  }
  componentDidMount() {
    this.props.fetchTags();
  }
  render() {
    const { captions} = this.props;
    return (
      <div>
        <Header />
        <StyledCaptionsContainer>
          {selectSixOfMany(captions).map(eachCaption => (
            <Card key={eachCaption.id} captionObj={eachCaption} />
          ))}
        </StyledCaptionsContainer>
        <StyledSecondSection>
          <TagsContainer/>
          <AddCaption />
        </StyledSecondSection>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingTags: selectTagsLoading(state),
  tags: selectTagsArray(state)
});
const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomepageComponent);
