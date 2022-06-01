export const formatSuperficie = (superficie) => {
  if (superficie?.includes('m2')) {
    return superficie?.replace('m2', '')
  }
}

export const dormitoriosText = (dormitorios) => {
  if (dormitorios === 0) return null
  if (dormitorios === 1) return 'dormitorio'
  return 'dormitorios'
}

export const pisoText = (piso) => {
  switch (piso) {
    case 1:
    case 3:
      return 'er'
    case 2:
      return 'do'
    case 4:
    case 5:
    case 6:
      return 'to'
    case 7:
    case 10:
      return 'mo'
    case 8:
      return 'vo'
    case 9:
      return 'no'
    default:
      return 'er'
  }
}