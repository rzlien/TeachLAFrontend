import View from "../index.js";
import { connect } from "react-redux";
import { setOutput } from "../../../actions/outputActions.js";
import { setMostRecentProgram } from "../../../actions/userDataActions.js";
import { togglePanel } from "../../../actions/uiActions.js";
import { getProgram } from "../../../actions/viewActions.js";

const mapStateToProps = state => {
  return {
    uid: state.userData.uid,
    screenWidth: state.ui.screenWidth,
    screenHeight: state.ui.screenHeight,
    panelOpen: state.ui.panelOpen,
    sketchid: viewParams.sketchid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMostRecentProgram: value => dispatch(setMostRecentProgram(value)),
    runCode: (code, language) => dispatch(setOutput(code, language)),
    togglePanel: () => dispatch(togglePanel()),
    getProgram: (sketchid) => dispatch(getProgram)
  };
};

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default ViewContainer;
