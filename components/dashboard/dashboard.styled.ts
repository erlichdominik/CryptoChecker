import styled from "styled-components";

export const StyledDashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "dashboard main main"
    "dashboard main main"
    "dashboard main main";

  height: 100vh;
`;

export const StyledDashboardMenu = styled.section`
  grid-area: dashboard;
  background-color: #fff6f0;
  padding-top: 30px;
`;

export const StyledDashboardMain = styled.section`
  grid-area: main;
  background-color: ##f9f9fc;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 0.2fr 0.3fr 1fr 0.7fr;
  gap: 0px 0px;
  grid-template-areas:
    "title options"
    "wallets wallets"
    "chart chart"
    "trend history";
`;

export const StyledDashboardMainTitle = styled.div`
  grid-area: title;
`;

export const StyledDashboardMainOptions = styled.div`
  grid-area: options;
`;

export const StyledDashboardMainWallet = styled.div`
  grid-area: wallets;
`;

export const StyledDashboardMainChart = styled.div`
  grid-area: chart;
`;

export const StyledDashboardMainTrend = styled.div`
  grid-area: trend;
`;

export const StyledDashboardMainHistory = styled.div`
  grid-area: history;
`;
