// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  MainHeading,
  Advice,
  UserInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [userPassword, setPassword] = useState('')

  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <MainHeading> Password Validator </MainHeading>
        <Advice> Check how strong and secure is your password </Advice>
        <UserInput type="password" onChange={changePassword} />
        {userPassword.length < 8 && (
          <p> Your password must be at least 8 characters </p>
        )}
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
