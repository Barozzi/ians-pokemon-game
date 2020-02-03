import { connect } from "react-redux";
import { fetchMobOne, fetchMobTwo, startFight, doAttack } from "../actions";
import Arena from "../components/Arena";

const mapStateToProps = state => ({
  mob1: state.mob1,
  mob2: state.mob2,
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  fetchMobOne: name => dispatch(fetchMobOne(name)),
  fetchMobTwo: name => dispatch(fetchMobTwo(name)),
  startFight: () => dispatch(startFight()),
  doAttack: (mob1, mob2) => dispatch(doAttack(mob1, mob2))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arena);
