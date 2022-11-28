import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { Head, Column, Raw } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box as="table" textAlign="center" color="accent">
      <Head>
        <tr>
          <Column>Type</Column>
          <Column>Amount</Column>
          <Column>Currence</Column>
        </tr>
      </Head>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Raw key={id}>
            <Column as="td"> {type}</Column>
            <Column as="td"> {amount}</Column>
            <Column as="td"> {currency}</Column>
          </Raw>
        ))}
      </tbody>
    </Box>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
