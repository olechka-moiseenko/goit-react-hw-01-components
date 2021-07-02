//data
import user from "./components/profile/user.json";
import statisticalData from "./components/statistics/statistical-data.json";
import friends from "./components/friendList/friends.json";
import transactions from "./components/transactionsHistory/transactions.json";
//components
import Profile from "./components/profile/profile";
import Statistics from "./components/statistics/statistics";
import FriendList from "./components/friendList/friendList";
import TransactionHistory from "./components/transactionsHistory/transactions";
//
export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
