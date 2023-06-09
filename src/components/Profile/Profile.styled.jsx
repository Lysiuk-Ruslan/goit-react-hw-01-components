import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;
  margin: 40px auto 32px;
  padding-top: 50px;
  max-width: 100%;
  width: 300px;
  border-radius: 8px;
  background-color: rgb(252, 252, 253);
  border: 1px solid black;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const ProfileAvatar = styled.img`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: rgb(255, 255, 255) -3px -3px 7px, rgb(206, 206, 209) 3px 3px 5px;
  object-fit: cover;
  margin-bottom: 30px;
`;

export const ProfileName = styled.p`
  color: rgb(158, 2, 2);
  font-size: 32px;
  font-weight: 500;
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  margin-bottom: 10px;
`;

export const ProfileNic = styled.p`
  color: rgb(43, 49, 98);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
  color: rgb(26, 35, 106);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  font-size: 16px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  gap: 10px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background-color: rgba(211, 211, 211, 0.737);
  border-top: 1px solid black;
`;

export const ProfileInfo = styled.li`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* border-right: thin solid #ccc; */
  border-right: 0;

  border-right: 1px solid black;
`;

export const ProfileLabel = styled.span`
  font-weight: 400;
  margin: 0px 5px;
  color: rgb(43, 49, 98);
  font-size: 16px;
`;

export const ProfileQuantity = styled.span`
  color: rgb(26, 35, 106);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-weight: 700;
  margin: 0px 5px;
  font-size: 16px;
`;
