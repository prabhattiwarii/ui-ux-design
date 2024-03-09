import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "./constants/Colors";
import c from "./constants/Constant";

const BreadcrumbsWrapper = styled.div`
    width:100%;background:${colors.lightGray};
  & .breadcrumbs {
    max-width:100%;width:${c.width};margin:0 auto;padding:28px;list-style-type: none;display: flex;align-items: center;
  }

  & .list {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }

    & .link {
      color: ${colors.black};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const BreadCrumbs = ({crumbs}) => {
  const location = useLocation();

  return (
    <BreadcrumbsWrapper>
      <ul className="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <li className="list" key={index}>
            <Link className="link" to={crumb.path}>
              {location.pathname === crumb.path ? crumb.name : crumb.name}
            </Link>
          </li>
        ))}
      </ul>
    </BreadcrumbsWrapper>
  );
};

export default BreadCrumbs;
