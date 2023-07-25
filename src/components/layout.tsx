import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from './header'

type Props = {
children:ReactNode,
}

export const Layout: FC<Props>=(props)=> {
    const {children} =props
    return (
        <SContainer>
            <main>{children}</main>
            <Header/>
            </SContainer>
    )
}

const SContainer = styled.div`
margin:auto;
max-width:480px;
`