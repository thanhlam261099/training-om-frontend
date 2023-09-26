import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  position: relative;

  h1 {
    font-size: 5vmin;
    font-weight: 700;
  }

  input {
    background-color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 4vmin;
    }
  }

  /* @media screen and (max-width: 768px) {
    h1 {
      font-size: 4vmin;
    }
  } */

  @media screen and (max-width: 425px) {
    background-color: #4c78ae;

    h1 {
      font-size: 8vmin;
      text-align: center;
      margin-top: 5%;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 12vmin;
      margin-bottom: 18%;
    }
  }
`;

export const FormContainer = styled.div`
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 2%;
  border-radius: 20px;

  .ant-row {
    margin-bottom: 3.5%;
    align-items: center;
  }

  .ant-row:first-child {
    margin-top: 8%;
  }

  .ant-row:last-child {
    margin-top: 12%;
    margin-bottom: 0%;

    button {
      width: 100%;
      height: 100%;
      font-size: 1.8vmin;
      padding: 2.5%;
      border-radius: 2rem;
      border: 3px solid #4c78ae;
      color: #4c78ae;
      font-weight: 600;
      transition: all 200ms ease-in-out;

      &:hover {
        background-color: #4c78ae;
        color: #ffffff;
      }
    }
  }

  .ant-input-prefix {
    margin-right: 1rem;
  }

  .ant-input-password-icon {
    font-size: 1.8vmin;
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
  }

  .ant-input-affix-wrapper-status-error {
    box-shadow: none !important;
    border: none !important;
  }

  .ant-input {
    background-color: #ffffff !important;
    border: none !important;
    border-bottom: 2px solid rgba(0, 0, 0, 0.39) !important;
    outline: none !important;
    padding: 2%;
    font-size: 2vmin;
    width: 80%;
    transition: all 150ms ease-in-out;
  }

  #normal_login_userId:focus,
  #normal_login_password:focus {
    width: 100%;
    border-bottom: 3px solid rgba(76, 120, 174, 1) !important;
  }

  .ant-input-prefix .anticon {
    font-size: 2.5vmin;
  }

  span {
    border: none;
    padding: 0;

    .ant-input {
      padding: 2%;
    }
  }

  .ant-checkbox {
    margin-right: 0.5rem;
  }

  #normal_login_rememberMe,
  .ant-checkbox-inner {
    width: 1.2rem;
    height: 1.1rem;
  }

  /* #checkbox-label {
    font-size: 1.8vmin;
  } */

  .ant-checkbox-inner {
    border: 2px solid #4c78ae;
    &::after {
      transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 65%;

    .ant-input {
      padding: 2%;
      font-size: 1.5vmin;
    }

    .ant-row:last-child {
      button {
        font-size: 1.5vmin;
        padding: 2.5%;
        border-radius: 2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 75%;
  }

  @media screen and (max-width: 425px) {
    width: 85%;
    padding: 7%;

    .ant-row {
      margin-bottom: 6%;
    }

    .ant-row:first-child {
      margin-top: 12%;
    }

    .ant-row:last-child {
      margin-top: 18%;
      margin-bottom: 5%;

      button {
        font-size: 4vmin;
      }
    }

    .ant-input {
      font-size: 4vmin;
    }

    .ant-input-password-icon {
      font-size: 4vmin;
    }

    .ant-input-prefix .anticon {
      font-size: 3.5vmin;
    }

    .ant-input-prefix {
      margin-right: 0.7rem;
    }
  }

  @media screen and (max-width: 320px) {
    width: 90%;
    padding: 10%;

    .ant-row {
      margin-bottom: 8%;
    }

    .ant-row:last-child {
      margin-top: 22%;
      margin-bottom: 8%;

      button {
        font-size: 5vmin;
      }
    }

    .ant-input {
      font-size: 5.5vmin;
    }

    .ant-input-password-icon {
      font-size: 5.5vmin;
    }

    .ant-input-prefix .anticon {
      font-size: 5vmin;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: #ffffff;

  #hero {
    position: relative;
    z-index: 2;
    width: 50%;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  #background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    #hero {
      width: 65%;
    }
  }

  @media screen and (max-width: 768px) {
    #hero {
      width: 80%;
    }
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
