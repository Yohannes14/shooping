
import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container =styled.div`
      height: 60px;
    ` 
const Wrapper =styled.div`
       padding: 10px 20px;
       display : flex;
      align-items: center;
       
    ` 
const Left =styled.div `
      flex:1;
      display: flex;
     align-items :center;
`
const Right =styled.div `
       flex:1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
       `
const Center =styled.div `
       flex:1;
       display: flex;
      justify-content: space-between;
      text-align: center;
       `
const Language =styled.span`
      font-size: 14px;
      cursor: pointer;
`
const SearchContainer =styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input =styled.input`
      border:none;
`
const Logo =styled.h1`
       font-weight: bold;
       `
const MenuItem =styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        `
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style ={{color:'gray', fontSize:'16px'}}/>
          </SearchContainer>
          </Left> 
        <Center><Logo>JOO.</Logo> </Center>
        <Right>
          <MenuItem> Register</MenuItem>
          <MenuItem> SignIn</MenuItem>
          <MenuItem>
          <Badge badgeContent={3} color="success">
          <ShoppingCartOutlinedIcon/>
      </Badge> 
          </MenuItem>
        </Right>
      </Wrapper>
      </Container>
  )
}

export default Navbar