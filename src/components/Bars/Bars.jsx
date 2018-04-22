import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import PropTypes from 'prop-types'

export default class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#F3E5F5', '#7B1FA2'])
      .interpolate(interpolateLab)
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = (
      data.map(datum =>
        <rect
          key={datum.title}
          x={xScale(datum.title)}
          y={yScale(datum.value)}
          height={height - margins.bottom - scales.yScale(datum.value)}
          width={xScale.bandwidth()}
          fill={this.colorScale(datum.value)}
        />,
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}

Bars.propTypes = {
  scales: PropTypes.shape({
    xScale: PropTypes.function,
    yScale: PropTypes.funtion,
  }),
  svgDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  maxValue: PropTypes.number,
  margins: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  data: PropTypes.array,
}
