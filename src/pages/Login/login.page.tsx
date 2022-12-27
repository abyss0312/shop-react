import React, { useEffect, useState } from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import { Login, LoginEmpty } from '@/models';
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from '@mui/material/Alert';
import { AuthService } from '@/services';
import { SnackbarUtilities } from '@/utilities';


export const  LoginPage = () => {

  const { register, handleSubmit, formState:{errors} } = useForm<Login>({
    defaultValues:LoginEmpty
  });


  const handleForm = async (user: Login) =>{

  
    try{
      const result =  await AuthService.login(user);

      console.log(result)
    }
    catch(err){
      console.log(err);
    }
   

  }

  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '20px' }}
      >
          <form onSubmit={handleSubmit(handleForm)}>
        <Card css={{w:'80vh', p: '50px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Entra Credenciales
          </Text>
        
          <Input
            size="lg"
            labelPlaceholder="Email"
            {...register("username", {required:'El email es requerido'})}
          />
           <Spacer y={0.5} />
           {errors.username && <Alert severity="error">{errors.username?.message}</Alert>}
          <Spacer y={2} />
          <Input.Password labelPlaceholder="Password"    size='lg' 
            {...register("password",{required:'el pass requerido', minLength:{value:4,message:'debe ser mayor a 4 caracteres'}})}/>
          <Spacer y={0.5} />
          {errors.password && <Alert severity="error">{errors.password?.message}</Alert>}
          <Spacer y={1} />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <Spacer y={1} />
          <Button type='submit'>Sign in</Button>
        </Card>
        </form>
      </Container>
    </div>
  );
}