import PropTypes from 'prop-types';
import {
  FriendCard,
  OfflineIndicator,
  OnlineIndicator,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <FriendCard key={id}>
      {isOnline ? <OnlineIndicator /> : <OfflineIndicator />}
      <img src={avatar} alt={'User avatar'} width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
