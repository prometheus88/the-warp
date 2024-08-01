import { XrplTx } from 'common/models/transaction/tx.types';

import AMMBidTransactionDetails from './AMMBidTransactionDetails/AMMBidTransactionDetails';
import AMMCreateTransactionDetails from './AMMCreateTransactionDetails/AMMCreateTransactionDetails';
import AMMDepositTransactionDetails from './AMMDepositTransactionDetails/AMMDepositTransactionDetails';
import AMMVoteTransactionDetails from './AMMVoteTransactionDetails/AMMVoteTransactionDetails';
import AMMWithdrawTransactionDetails from './AMMWithdrawTransactionDetails/AMMWithdrawTransactionDetails';
import GenericTransactionDetails from './GenericTransactionDetails/GenericTransactionDetails';
import PaymentTransactionDetails from './PaymentTransactionDetails/PaymentTransactionDetails';

export interface TransactionDetailsProps {
  className?: string;
  style?: React.CSSProperties;
  tx: XrplTx;
}

function TransactionDetails({ tx, ...rest }: TransactionDetailsProps) {
  switch (tx.TransactionType) {
    case 'AMMBid':
      return <AMMBidTransactionDetails tx={tx} {...rest} />;
    case 'AMMCreate':
      return <AMMCreateTransactionDetails tx={tx} {...rest} />;
    case 'AMMDeposit':
      return <AMMDepositTransactionDetails tx={tx} {...rest} />;
    case 'AMMVote':
      return <AMMVoteTransactionDetails tx={tx} {...rest} />;
    case 'AMMWithdraw':
      return <AMMWithdrawTransactionDetails tx={tx} {...rest} />;
    case 'Payment':
      return <PaymentTransactionDetails tx={tx} {...rest} />;
    default:
      return <GenericTransactionDetails tx={tx} {...rest} />;
  }
}

export default TransactionDetails;
