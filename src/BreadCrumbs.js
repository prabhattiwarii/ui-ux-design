import React from 'react';
import styled from 'styled-components';
import color from './constants/Colors';
import c from './constants/Constant';
import { arroIcon, homeIcon } from './helpers/Icon';

const BreadcrumbWrap = styled.div`
    width:100%;background:${color.lightGray};
    & .breadcrumb-section{
        width:100%;max-width:${c.width};display:flex; margin:0 auto;padding:20px;flex-direction:column;row-gap:5px;
        & .title{font-size:20px;font-weight:600;color:${color.black};text-transform:capitalize;}
        & .lists{
            margin:0;padding:0;list-style:none;display:flex;align-items:center;column-gap:5px;
            & .list{
                display:flex;align-items:center;column-gap:5px;
                & .link{
                    display:flex;align-items:center;column-gap:5px;color:${color.black};
                    &:hover{text-decoration:underline;}
                }
            }
        }
    }

    @media (max-width:479px){
        & .title{font-size:18px !important;}
        & .link{font-size:14px;}
    }
`;
const Breadcrumb = ({ breadcrumbs }) => {
    if (!breadcrumbs) {
        return;
    }
    return (
        <BreadcrumbWrap>
            <div className='breadcrumb-section'>
                {breadcrumbs.map((crumb, index) => (<div key={index} className='title'>{crumb.name}</div>))}
                <ul className='lists'>
                    <li className='list'>
                        <a className='link' href={c.BASE_URL}>{homeIcon({ width: "14", height: "14" })} Home</a>
                    </li>
                    {breadcrumbs.map((crumb, index) => (
                        <li key={index} className='list'>{arroIcon({ width: "14", height: "14" })}
                        <a className='link' href={crumb.path}>{crumb.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </BreadcrumbWrap>
    );
}

export default Breadcrumb;
