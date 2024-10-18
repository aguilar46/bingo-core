import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { generateClassname } from '.';

export const useModal = (ModalComp = Modal, defaultProps) => {
  const [props, setProps] = useState({ isOpen: false });

  const setVisible = (isOpen) => setProps((p) => ({ ...p, isOpen }));

  //set default props only once
  useEffect(() => {
    setProps((props) => ({ ...props, ...defaultProps }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const show = (showProps) =>
    new Promise((resolve) => {
      const onRequestClose = ({ returnValue }) => {
        resolve(returnValue);
        setVisible(false);
      };

      setProps((p) => ({
        ...p,
        ...showProps,
        onRequestClose,
      }));

      setVisible(true);
    });

  const modalInst = (
    <ModalComp
      transparent
      className={generateClassname(props.className, 'modal')}
      {...props}
    />
  );

  return { modal: modalInst, show };
};
