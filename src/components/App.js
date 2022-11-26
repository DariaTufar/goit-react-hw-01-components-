import { Profile } from "./Profile/Profile";
import  user  from "../data/user";
import { Statistics } from "./Statistics/Statistics";
import data from "../data/data"

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
      // title = {}
      />
    </div>
  );
};