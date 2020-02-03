import { connect } from "react-redux";
import { fetchMobOne, fetchMobTwo } from "../actions";
import Arena from "../components/Arena";

const mapStateToProps = state => ({
  mob1: state.mob1,
  mob2: state.mob2
});

const mapDispatchToProps = dispatch => ({
  fetchMobOne: name => dispatch(fetchMobOne(name)),
  fetchMobTwo: name => dispatch(fetchMobTwo(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arena);
