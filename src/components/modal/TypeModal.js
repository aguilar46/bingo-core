import React from 'react';
import { atoms, bingoTypes } from '../../data';
import { useAtom } from 'jotai';
import { Listbox } from 'react-widgets/cjs';
import ReactModal from 'react-modal';
import ModalView from './ModalView';
import { ModalBtn } from './ModalComponents';
import { getBingoTypeDisplayName } from '../../util';

const bingoTypeData = Object.values(bingoTypes).map((value) => ({
  key: value,
  value: getBingoTypeDisplayName(value),
}));

const TypeModal = (props) => {
  const { onRequestClose } = props;
  const [type, setType] = useAtom(atoms.bingoType);

  return (
    <ReactModal {...props}>
      <ModalView>
        Select BINGO Type:
        <br />
        <br />
        <Listbox
          data={bingoTypeData}
          dataKey="key"
          textField="value"
          value={type}
          onChange={(newType) => {
            setType(newType.key);
            onRequestClose({});
          }}
        />
        <br />
        <ModalBtn onClick={onRequestClose}>Cancel</ModalBtn>
      </ModalView>
    </ReactModal>
  );
};

export default TypeModal;
