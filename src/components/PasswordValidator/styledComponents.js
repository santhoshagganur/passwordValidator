// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #475569;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border-width: 0;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
`

export const Advice = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #edeeff;
`

export const UserInput = styled.input`
  background-color: #edeeff;
  border-width: 1px;
  padding: 10px;
  height: 30px;
  width: 300px;
`
