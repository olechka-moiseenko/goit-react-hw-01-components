import PropTypes from "prop-types";
import styles from "./transactions.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table class={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((x) => (
          <tr key={x.id}>
            <td>{x.type}</td>
            <td>{x.amount}</td>
            <td>{x.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
