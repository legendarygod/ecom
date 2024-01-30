import React from 'react'
// import { DevTool } from '@hookform/devtools'
// import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {  FormControl } from '@mui/material'


const LoginSignUp = () => {
  // const loginForm = useForm()
  // console.log(loginForm)
  // const { handleSubmit, formState, register, control } = loginForm

  // const { errors } = formState

  // const onSubmit = async (data) => {
  //   console.log("FORM SUBMITTED", data)
  // // }
  
  return (
    <Container>
      <FormHeader><span>Log In</span></FormHeader>
      <Form noValidate>
        <FormControl>
          
        </FormControl>
      </Form>
    </Container>
  )
    
}

export default LoginSignUp

const FormHeader = styled.div``
const Container = styled.div``
const Form = styled.form``