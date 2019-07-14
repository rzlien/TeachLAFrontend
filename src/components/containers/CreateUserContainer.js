import CreateUser from "../CreateUser.js";
import { connect } from "react-redux";
import { setDisplayName } from "../../actions/userDataActions";
import { withFirestore } from "react-redux-firebase";
import { compose } from "redux";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setDisplayName: name => dispatch(setDisplayName(name)),
  };
};

const CreateUserPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFirestore,
)(CreateUser);

export default CreateUserPage;
