import { Fragment, useState } from 'react';
import ReceiveModal from 'ui/transaction/container/ReceiveModal/ReceiveModal';

import Button from '../../../common/components/input/Button/Button';
import { useTranslate } from '../../../locale';

export default function ReceiveModalButton() {
  const translate = useTranslate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <Button variant="secondary" onClick={() => setModalOpen(true)}>
        {translate('send')}
      </Button>
      <ReceiveModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Fragment>
  );
}
