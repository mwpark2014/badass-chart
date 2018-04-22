import React from 'react'
import PropTypes from 'prop-types'

import Axis from '../Axis/Axis'

export default function Axes({ scales, margins, svgDimensions }) {
  const { height, width } = svgDimensions

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
  }

  return (
    <g>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  )
}

Axes.propTypes = {
  scales: PropTypes.shape({
    xScale: PropTypes.function,
    yScale: PropTypes.funtion,
  }),
  margins: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  svgDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

