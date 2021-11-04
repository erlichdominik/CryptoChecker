import DashboardMainChart from "./dashboard-main/DashboardMainChart";
import DashboardMainHistory from "./dashboard-main/DashboardMainHistory";
import DashboardMainOptions from "./dashboard-main/DashboardMainOptions";
import DashboardMainTitle from "./dashboard-main/DashboardMainTitle";
import DashboardMainTrend from "./dashboard-main/DashboardMainTrend";
import DashboardMainWallet from "./dashboard-main/DashboardMainWallet";
import DashboardMenuItem from "./dashboard-menu-item/DashboardMenuItem";
import DashboardMenuItemTitle from "./dashboard-menu-item/DashboardMenuItemTitle";
import {
  StyledDashboardContainer,
  StyledDashboardMain,
  StyledDashboardMainOptions,
  StyledDashboardMainTitle,
  StyledDashboardMenu,
  StyledDashboardMainWallet,
  StyledDashboardMainChart,
  StyledDashboardMainTrend,
  StyledDashboardMainHistory,
} from "./dashboard.styled";

const Dashboard = () => {
  return (
    <StyledDashboardContainer>
      <StyledDashboardMenu>
        <DashboardMenuItemTitle />
        <DashboardMenuItem name="Dashboard" />
        <DashboardMenuItem name="Wallet" />
      </StyledDashboardMenu>
      <StyledDashboardMain>
        <StyledDashboardMainTitle>
          <DashboardMainTitle />
        </StyledDashboardMainTitle>
        <StyledDashboardMainOptions>
          <DashboardMainOptions />
        </StyledDashboardMainOptions>
        <StyledDashboardMainWallet>
          <DashboardMainWallet />
        </StyledDashboardMainWallet>
        <StyledDashboardMainChart>
          <DashboardMainChart />
        </StyledDashboardMainChart>
        <StyledDashboardMainTrend>
          <DashboardMainTrend />
        </StyledDashboardMainTrend>
        <StyledDashboardMainHistory>
          <DashboardMainHistory />
        </StyledDashboardMainHistory>
      </StyledDashboardMain>
    </StyledDashboardContainer>
  );
};

export default Dashboard;
