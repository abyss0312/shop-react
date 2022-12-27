import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SignupForm, SignupFormEmpty, SignupModel } from '@/models/signup.interface';
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert } from '@mui/material';
import { Spacer} from '@nextui-org/react';
import { AuthService } from '@/services';
import { SnackbarUtilities } from '@/utilities';

const theme = createTheme();

export const SignupPage = () => {

    const { register, handleSubmit,watch, formState:{errors} } = useForm<SignupForm>({
        defaultValues: SignupFormEmpty
    });

    const handleForm:SubmitHandler<SignupForm>  = async data => {
      
      const user:SignupModel = {
        firstname:data.firstname,
        lastname: data.lastname,
        birthdate: data.birthdate,
        username: data.username,
        password: data.password
      }

      try{
        await AuthService.signup(user);
        SnackbarUtilities.success('Registrado Correctamente');
      }
      catch(error){
        console.log(error);
      }
    
    };
 

    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleForm)}  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  {...register("firstname", {required:'el nombre es requeridos'})}
                />
              </Grid>
              <Spacer y={0.5} />
                {errors.firstname && <Alert severity="error">{errors.firstname?.message}</Alert>}
              <Grid item xs={12} >
                <TextField
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  autoComplete="family-name"
                  {...register("lastname", {required:'el  apellido es requerido'})}
                />
              </Grid>
              <Spacer y={0.5} />
                {errors.lastname && <Alert severity="error">{errors.lastname?.message}</Alert>}
                <Grid item xs={12} >
                     <TextField
                        fullWidth
                        id="date"
                        label="Fecha de nacimiento"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...register("birthdate", {required:'la fecha es requerido'})}
                      />
              </Grid>
              <Spacer y={0.5} />
                {errors.lastname && <Alert severity="error">{errors.lastname?.message}</Alert>}
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="usuername"
                  label="Usuario"
                  autoComplete="username"
                  {...register("username", {required:'el usuario es requerido'})}
                />
              </Grid>
              <Spacer y={0.5} />
                {errors.username && <Alert severity="error">{errors.username?.message}</Alert>}
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {required:'el password es requeridos'})}
                />
              </Grid>
              <Spacer y={0.5} />
                {errors.password && <Alert severity="error">{errors.password?.message}</Alert>}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label=" Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  {...register("confPass", {required:'la confirmacion es requerido', 
                    validate: (val: string) => {
                        if (watch('password') != val) {
                        return "Your passwords do no match";
                        }
                    }
                  })}
                />
              </Grid>
              <Spacer y={0.5} />
                {errors.confPass && <Alert severity="error">{errors.confPass?.message}</Alert>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}


