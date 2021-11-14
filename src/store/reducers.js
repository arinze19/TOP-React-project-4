import stateBlueprint from './stateBlueprint';
import { toggleCart } from './actionTypes';

export default function reducers(state = stateBlueprint, action) {
  switch (action.type) {
    case toggleCart:
      return { ...state, cartIsOpen: !state.cartIsOpen };
    default:
      return state;
  }
}
