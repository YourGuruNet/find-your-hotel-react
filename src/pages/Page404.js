import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
const Page404 = () => {
  return (
    <Layout isLogin>
      <Container id="main">
        <div class="fof">
          <h1>Error 404</h1>
        </div>
      </Container>
    </Layout>
  );
};

export default Page404;

const Container = styled.div`
  font-family: "Lato", sans-serif;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  #main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
  }

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
