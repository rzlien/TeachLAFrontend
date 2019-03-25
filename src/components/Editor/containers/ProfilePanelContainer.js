import ProfilePanel from "../components/ProfilePanel";
import { connect } from "react-redux";
import { setDisplayName } from "../../../actions/userDataActions";

const mapStateToProps = (state, ownProps) => {
  return {
    displayName: state.userData.displayName,
    uid: state.userData.uid,
    // photoURL: state.userData.photoURL,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // collectUserDisplayName: () => {
    //   let displayNameElement = document.querySelector("." + DISPLAY_NAME_WRAPPER);
    //   let input = document.querySelector("." + DISPLAY_NAME_INPUT);
    //   const handleEnter = event => {
    //     handleOnEnter(event, dispatch, displayNameElement);
    //   };
    //   if (!input) {
    //     displayNameElement.addEventListener("keyup", handleEnter);
    //     displayNameElement.innerHTML = `
    //       <input class=${DISPLAY_NAME_INPUT} type="text"/>
    //     `;
    //   }
    // },
    collectUserPhoto: () => {},
    setDisplayName: name => dispatch(setDisplayName(name)),
  };
};

const ProfilePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePanel);

export default ProfilePanelContainer;
