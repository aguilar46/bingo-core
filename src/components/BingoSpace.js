/**
 * Author: RSP Aguilar
 * Created: 2024
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Space = styled.button`
  position: relative;
  border: solid 1px black;
  text-shadow: 1px 1px white;
  font-size: 1em;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 75%;
  height: 75%;
  ${(props) => {
    const { x, y } = props.clientXY;
    return `
    left: ${x}px;
    top: ${y}px;
    `;
  }}
`;
const LabeDiv = styled.div`
  position: relative;
  height: 100%;
  align-content: center;
`;

const BingoSpace = (props) => {
  const { label, selected, onClick, bingoMark } = props;
  const [clientXY, setClientXY] = useState({ x: 20, y: 20 });

  return (
    <Space
      {..._.omit(props, ['label', 'onClick', 'selected'])}
      className="bingo-space"
      title={label}
      onClick={(e) => {
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const x_m = x + width / 2;
        const y_m = y + height / 2;
        const x_l = e.clientX - x_m;
        const y_t = e.clientY - y_m;
        setClientXY({ x: x_l, y: y_t });
        onClick(e);
      }}
    >
      {selected && (
        <StyledImg className="bingo-mark" src={bingoMark} clientXY={clientXY} />
      )}
      <LabeDiv>{label}</LabeDiv>
    </Space>
  );
};

BingoSpace.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
};

BingoSpace.displayName = 'BingoSpace';
export default BingoSpace;
