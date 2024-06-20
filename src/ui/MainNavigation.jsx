import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNavigation() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/myday">
            <WbSunnyIcon />
            <span>My Day</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/important">
            <StarBorderIcon />
            <span>Important</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/planned">
            <ArticleIcon />
            <span>Planned</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/all">
            <AllInclusiveIcon />
            <span>All</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/completed">
            <CheckCircleOutlineIcon />
            <span>Completed</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/assigned">
            <AccountCircleIcon />
            <span>Assigned to me</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tasks">
            <HomeIcon />
            <span>Tasks</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNavigation;
