import React, { useContext } from 'react'
import styled from 'styled-components';
import { UseContext } from '../provider/UseProvider';

type Context = {
categories: Array<string>,
    }

type Props = {
    onClickTitle:(e: React.MouseEvent<HTMLElement>)=>void;
}
export default function TitleList(props: Props) {
        const {onClickTitle}=props
    const context: Context = useContext(UseContext);
    const { categories } = context;
    return (
    <>
        {
        categories.map((category,id) => (
        <SItem key={id} onClick={onClickTitle}>{category}</SItem>
        ))
        }
    </>
    )
    }

    const SItem=styled.li`
    cursor: pointer;
        padding:15px 10px;
        border:1px solid #ddd;
        border-top:transparent;
        transition:.3s;
        &:hover{
            background-color:#eee;
        }
    `