import React from "react";
import { connect } from "react-redux";

import {
  selectCaptionsLoading,
  selectCaptionsArray
} from "../../redux/selectors";
import Spinner from "../../components/spinner/spinner.component";
import { StyledSpinnerContainer } from "../../components/styled-components/styled-homepage-container";
import HomepageComponent from "../../components/homepage/homepage.component";
import { fetchCaptions } from "../../redux/api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCaptions();
  }
  render() {
    const { isLoadingCaptions } = this.props;
    return (
      <div>
        {" "}
        {isLoadingCaptions ? (
          <StyledSpinnerContainer>
            <Spinner />
          </StyledSpinnerContainer>
        ) : (
          <HomepageComponent captions={this.props.captions} />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
