import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import TitleList from '../src/components/titleList';
import { UseContext } from '../src/provider/UseProvider'
import YoutubeList from '../src/components/YoutubeList'

type Context = {
categories: Array<string>,
  }

  export default function MovieList(e:any) {
  const context: Context = useContext(UseContext);
  const { categories } = context;
    const [title, setTitle] = useState(categories[0]);

    const [isListOn,setIsListOn] = useState(false);
    const onClickTitle = (e: React.MouseEvent<any>) => {
      setIsListOn(!isListOn);
      setTitle(e.currentTarget.textContent);
    }
    return (
    <div>
        <SHeader1 onClick={onClickTitle}>{title}</SHeader1>
        <SList>
          {isListOn ? (<TitleList onClickTitle={onClickTitle}/>):(<></>)}
        </SList>
        <YoutubeList Title={title}/>
    </div>
    )
    }

const SHeader1 = styled.h1`
    border:1px solid #ddd;
    padding:10px 10px;
    cursor: pointer;
    margin-bottom: 0;
    `
    const SList=styled.ul`
      padding-left:0;
      margin:0;
      font-size:18px;
      list-style:none;
`