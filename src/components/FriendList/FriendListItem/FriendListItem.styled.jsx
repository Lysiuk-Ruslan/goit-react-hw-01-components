import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 240px;
  align-items: center;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px rgba(217, 206, 217, 0.5);
`;

export const OfflineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
`;
export const OnlineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: green;
`;
