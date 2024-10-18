/**
 * Author: RSP Aguilar
 * Create Date: 2021-02-06T02:26:19.730Z
 */

import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { ModalBtn } from './ModalComponents';
import ModalView from './ModalView';
import { Listbox } from 'react-widgets/cjs';

const Spacer = styled.div`
  height: 15px;
`;

const StyledList = styled(Listbox)`
  .rw-list-option {
    border-top: solid 1px black;
  }

  .rw-list-option:first-child {
    border-top: none;
  }
`;

const OptionsModal = (props) => {
  const { onRequestClose, options } = props;

  return (
    <Modal {...props}>
      <ModalView>
        <StyledList data={options} />
        <Spacer />
        <ModalBtn onClick={onRequestClose}> Close </ModalBtn>
      </ModalView>
    </Modal>
  );
};

export default OptionsModal;
