import PropTypes from 'prop-types';
import {
  FriendCard,
  OfflineIndicator,
  OnlineIndicator,
  FriendCardWrapper,
} from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendCardWrapper>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendCard key={id}>
            {isOnline ? <OnlineIndicator /> : <OfflineIndicator />}
            <img src={avatar} alt={'User avatar'} width="48" />
            <p>{name}</p>
          </FriendCard>
        );
      })}
    </FriendCardWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
