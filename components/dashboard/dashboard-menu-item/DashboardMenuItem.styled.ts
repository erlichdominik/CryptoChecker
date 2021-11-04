import styled from "styled-components";

interface IStyledDashboardMenuItem {
  isLogo?: boolean;
}

export const StyledDashboardMenuItem = styled.div<IStyledDashboardMenuItem>`
  display: flex;
  margin-left: 50px;

  margin-bottom: ${(props) => (props.isLogo ? "50px" : "0px")};
`;
