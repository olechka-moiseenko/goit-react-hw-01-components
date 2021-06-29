import user from "./components/user.json";
import Profile from "./components/profile.js";
import statisticalData from "./components/statistics/statistical-data.json";
import Statistics from "./components/statistics/statistics";
import friends from "./components/friendList/friends.json";
import FriendList from "./components/friendList/friendList.js";
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
    </div>
  );
}
