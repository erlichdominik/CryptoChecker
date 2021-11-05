import { StyledDashboardMenuItem } from "./DashboardMenuItem.styled";
import Link from "next/link";

interface IDashboardMenuItem {
  name: string;
  pageName: string;
  isLogo?: boolean;
}

//TODO add icons before text
//TODO change color based on current page

const DashboardMenuItem = (props: IDashboardMenuItem) => {
  return (
    <StyledDashboardMenuItem isLogo={props.isLogo}>
      <Link href={props.pageName}>
        <a>{props.name}</a>
      </Link>
    </StyledDashboardMenuItem>
  );
};

export default DashboardMenuItem;
