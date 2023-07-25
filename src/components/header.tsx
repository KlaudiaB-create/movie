import Link from 'next/link'
import React from 'react'
import {PlayIcon, PlusCircleIcon, StarIcon, UserIcon} from '@heroicons/react/24/outline'
import styled from 'styled-components'


export const Header = () => {
const items = [
{
label: '今日観るに追加',
href: '/',
icon:
<PlusCircleIcon />,
},
{
label: '動画一覧',
href: '/movie-list',
icon:
<PlayIcon />,
},
{
label: 'お気に入り',
href: '/favorite',
icon:
<StarIcon />,
},
{
label: 'マイページ',
href: '/my-page',
icon:
<UserIcon />,
},
]
return (
<div className='container'>
    <SNav>
        {items.map((item,id) => (
        <SItem key={id}>
            <SLink href={ item.href}>
                <SIcon>
                    {item.icon}
                </SIcon>
                <SParagraph>{ item.label}</SParagraph>
            </SLink>
        </SItem>
        ))
        }
    </SNav>
</div>
)
}

const SNav=styled.ul`
display:flex;
align-items:center;
justify-content:space-between;
list-style: none;
margin: 0;
padding-left: 0;
position:fixed;
bottom:0;
left: 50%;
width: 100%;
max-width:480px;
transform:translateX(-50%)
`

const SItem=styled.li`
width: 25%;
border:1px solid #ddd;
transition:.3s;
background:#fff;
&:hover{
    background-color:#eee;
}
`
const SIcon = styled.p`
width: 35%;
`

const SLink=styled(Link)`
display:flex;
flex-direction:column;
align-items:center;
`
const SParagraph=styled.p`
margin-top:-12px;
margin-bottom: 8px;
font-size:14px;
`