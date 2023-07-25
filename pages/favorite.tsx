import React, { SetStateAction, useContext } from 'react'
import styled from 'styled-components';
import { UseContext } from '../src/provider/UseProvider'

type Context = {
      categories: Array<string>,
  favorite: Array<string>,
      setCategory: (category: SetStateAction<string[]>) => void,
  setFavorite: (favorite: SetStateAction<string[]>) => void,
}

export default function Favorite() {
  const context = useContext(UseContext);
  const { categories, favorite, setCategory, setFavorite } = context;

  return (
    <div>
      <h1>お気に入り</h1>
      <SList>
        {favorite.map((favo,id)=>(
          <SItem key={id}>{favo}</SItem>
        ))}
      </SList>
    </div>
  )
}
 const SItem=styled.li`
   padding:20px 10px;
   border-bottom:1px solid #eee;
   transition:.3s;
   &:hover{
     background-color:#eee;
   }
 `
 const SList=styled.ul`
   padding-left: 0;
   margin: 0;
   list-style:none;
 `
