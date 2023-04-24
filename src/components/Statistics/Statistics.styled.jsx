import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px auto 32px;
  max-width: 100%;
  width: 360px;
  box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
  border-radius: 8px;
  font-size: 20px;
  background-color: white;
`;

export const Title = styled.h2`
  padding: 16px;
  border-bottom: 1px solid rgb(211, 213, 227);
  color: rgb(158, 2, 2);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 8px;
  width: 100%;
  height: 100%;
  text-shadow: rgb(0, 0, 0) 0px 0px 1px;
  background-color: ${getRandomHexColor};'
}
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: rgb(255, 255, 255);
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// background-color: ${
//     props =>
//     switch (props.label) {
//         case '.docx':
//             return 'red';
//         case '.pdf':
//             return 'red';
//         case '.mp3':
//             return 'red';
//         case '.psd':
//             return 'red';
//         default:
//             return 'rgb(166, 121, 50)'

//     }
//     }
