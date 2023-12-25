import basicToken from './baiscToken'
import mapToken from './mapToken'
import modelToken from './modelToken'
import { getChartsToken } from '../../basic'

const chartsToken = {
  ...getChartsToken(basicToken, mapToken, modelToken)
}

export default chartsToken