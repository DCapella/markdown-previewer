import { connect } from "react-redux";

import * as actionCreators from "../actions/index.js";
import { MainDisplay } from "../components/index.js";


const mapStateToProps = state => state;

export const Container = connect(mapStateToProps, actionCreators)(MainDisplay);
