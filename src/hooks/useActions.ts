import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useAction = () => {
  const dispacth = useDispatch();

  return bindActionCreators(actionCreators, dispacth);
};