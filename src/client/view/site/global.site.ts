import styled from "styled-components";

export const SiteStyled = styled.div`
.ant-layout-header, .ant-menu {
    background: #00CC99;
}
.ant-menu-item:focus {
    background: #FF0000;
}
.logo {
    width: 150px;
    height: 64px;
    background: #00CC99;
    margin: 16px 24px 16px 0;
    float: left;
    background-image: url("/assets/images/logo-milk.png");
    background-repeat: no-repeat;
      background-size: contain;
      padding: 0px;
      margin: 0px;
      width: 150px;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
  }
`;
