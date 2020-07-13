import React, { useRef, useCallback, MouseEvent } from 'react';
import { MdClose } from 'react-icons/md';

import { Overlay, Container, CloseButton } from './styles';

interface IAnswerModalProps {
  visible: boolean;
  onCancel(): void;
}

const AnswerModal: React.FC<IAnswerModalProps> = ({
  visible,
  children,
  onCancel,
}) => {
  const ref = useRef(null);

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === ref.current) {
        onCancel();
      }
    },
    [onCancel, ref],
  );

  return (
    <Overlay visible={visible} onClick={handleOverlayClick} ref={ref}>
      <Container>
        <CloseButton onClick={onCancel}>
          <MdClose />
        </CloseButton>
        {children}
      </Container>
    </Overlay>
  );
};

export default AnswerModal;
