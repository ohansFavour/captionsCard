import React from "react";
import { connect } from "react-redux";

import {
  SearchContainer,
  SearchSymbol,
  SearchInput
} from "../../components/styled-components/styled-search-box";
import Card from "../../components/card/card.component";
import { StyledCaptionsContainer } from "../../components/styled-components/styled-captions-section";
import {
  selectCaptionsLoading,
  selectCaptionsArray
} from "../../redux/selectors";
import {
  selectTwentyOfMany,
  filterCaptionsArray
} from "../../custom-functions/custom-functions";
import Spinner from "../../components/spinner/spinner.component";
import { StyledSpinnerContainer } from "../../components/styled-components/styled-homepage-container";
import { fetchCaptions } from "../../redux/api";
import Header from "../../components/header/header.component";

class CaptionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCaption: "",
      initial: true
    };
  }
  conponentDidMount() {
    this.props.fetchCaptions();
  }

  handleSearch = event => {
    this.setState(
      {
        ...this.state,
        searchCaption: event.target.value
      },
      () => {
        if (this.state.searchCaption.trim().length > 0) {
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
  render() {
    const { isLoadingCaptions, captions } = this.props;
    const captionsShown = this.state.initial
      ? selectTwentyOfMany(captions)
      : filterCaptionsArray(captions, this.state.searchCaption);
    return (
      <div>
          <Header />
        {isLoadingCaptions ? (
          <StyledSpinnerContainer>
            <Spinner />
          </StyledSpinnerContainer>
        ) : (
          <React.Fragment>
            {" "}
            <SearchContainer>
              <SearchInput
                placeholder={`Search captions`}
                onChange={this.handleSearch}
                value={this.state.searchCaption}
              />
              <SearchSymbol />
            </SearchContainer>
            <StyledCaptionsContainer>
              {captionsShown.map(eachCaption => (
                <Card key={eachCaption.id} captionObj={eachCaption} />
              ))}
            </StyledCaptionsContainer>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingCaptions: selectCaptionsLoading(state),
  captions: selectCaptionsArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCaptions: () => dispatch(fetchCaptions())
});
export default connect(mapStateToProps, mapDispatchToProps)(CaptionsPage);
