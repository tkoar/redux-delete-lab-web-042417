let id = 0
export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++
      const band = Object.assign({}, action.band, { id: id })
      return { bands: state.bands.concat(band) }
      case 'DELETE_BAND':
        const removalIndex = state.bands.findIndex(el => el.id === action.id)
        return { bands: [...state.bands.slice(0, removalIndex), ...state.bands.slice(removalIndex + 1)] }
    default:
      return state;
  }
};
