import View from "../index.js";
import { connect } from "react-redux";
import { setOutput } from "../../../actions/outputActions.js";
import { setMostRecentProgram } from "../../../actions/userDataActions.js";
import { togglePanel } from "../../../actions/uiActions.js";
import { loadProgram } from "../../../actions/viewActions.js";
import { CLOSED_PANEL_LEFT, OPEN_PANEL_LEFT, PANEL_SIZE } from "../../../constants";
import * as fetch from "../../../lib/fetch.js"

const mapStateToProps = state => {
  return {
    uid: state.userData.uid,
    screenWidth: state.ui.screenWidth,
    screenHeight: state.ui.screenHeight,
    panelOpen: state.ui.panelOpen,
    left: (state.ui.panelOpen ? OPEN_PANEL_LEFT : CLOSED_PANEL_LEFT) + PANEL_SIZE,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMostRecentProgram: value => dispatch(setMostRecentProgram(value)),
    runCode: (code, language) => dispatch(setOutput(code, language)),
    togglePanel: () => dispatch(togglePanel()),
    getProgram: (sketchID) => {
      fetch.getProgram(sketchID)
        .then(response => response.json())
        .then((json) => {
          if (json.ok) {
            dispatch(loadProgram(json.data));
          } else {
            //dispatch error
          }

        }).catch((err)=> {
          //dispatch an error
        })
    },
    // forkProgram: (sketchID) => {
    //   fetch.fork(this.state.uid, sketchID)
    //     .then(response => response.json())
    //     .then((json) => {
    //       if (json.ok) {
    //         // REDIRECT TO NEW SKETCH??
    //       } else {
    //         //dispatch error
    //       }
    //     }).catch((err)=> {
    //       //dispatch an error
    //     })
    // },
  };
};

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default ViewContainer;
