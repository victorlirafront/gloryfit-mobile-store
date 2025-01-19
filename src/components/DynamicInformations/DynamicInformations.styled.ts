import styled from 'styled-components';

export const StyledDynamicInformationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 80px 0 80px 0;
  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

export const StyledDynamicInformations = styled.div`
  background: #222222;
  width: 1200px;
  color: #fff;
  min-height: 500px;
  border-radius: 4px;
  padding: 40px;

  @media screen and (max-width: 425px) {
    padding: 20px;
  }

  .profile-header {
    height: 70px;
    display: flex;
    align-items: center;
    .back-arrow-wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      .profile-back-arrow {
        margin-right: 10px;
      }
    }
  }

  .profile-main {
    .background-image {
      height: 300px;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(https://ik.imagekit.io/Victorliradev/hunterstack/wallpaper_9BEWQCkcV.jpg?updatedAt=1737309171555);
      margin-bottom: 30px;

      @media screen and (max-width: 425px) {
        height: 200px;
      }
    }

    h1 {
      margin: 20px 0;
    }
  }
`;
