 
import PropTypes from 'prop-types';
import css from  './Profile.module.css'

export const Profile = ({ avatar, location, stats, tag, username }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
                  src={avatar}
                  alt="User avatar"
                  className={css.avatar}
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
              <p className="location">{location }</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.views}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }),
}