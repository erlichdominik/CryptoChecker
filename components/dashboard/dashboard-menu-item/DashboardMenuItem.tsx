import { StyledDashboardMenuItem } from "./DashboardMenuItem.styled";

interface IDashboardMenuItem {
  name: string;
  isLogo?: boolean;
}

//TODO add icons before text
//TODO change color based on current page

const DashboardMenuItem = (props: IDashboardMenuItem) => {
  return (
    <StyledDashboardMenuItem isLogo={props.isLogo}>
      <p>{props.name}</p>
    </StyledDashboardMenuItem>
  );
};

export default DashboardMenuItem;
