
import { FormControl } from '@mui/base/FormControl';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useUserData } from '../../utils/contexts/UserDataContext';

export function DetailsFormData() {
  const { formList } = useUserData();
  const navigate = useNavigate();
  const { userName } = useParams();
  const formUser = formList.find((item) => item.name == userName)
  useEffect(() => {
    console.log(formUser);

  }, [])

  return (
    <div>
      <div>
        <Button
          onClick={() => navigate("/listFilledForms")}>Formulários preenchidos</Button>
        <Button
          onClick={() => navigate("/")}>Preencher novo formulário</Button>
      </div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          m: 2
        }}
        noValidate
        autoComplete="off"
      ><Typography variant="h5" color={'primary.main'}>Formulário Preenchido</Typography></Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 3,
          borderRadius: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <Paper elevation={3} sx={{ p: 2 }}>

          <FormControl defaultValue="" required>
            <div>
              <TextField
                id="standard-search"
                label="Nome"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.name}
              />
              <TextField
                id="standard-search"
                label=" Email"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.email}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Telefone"
                type="number"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.phone}
              />
              <TextField
                id="standard-search"
                label=" Data de Nascimento"
                type="date"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.birth}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Rua"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.street}
              />
              <TextField
                id="standard-search"
                label=" Número"
                type="number"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.number}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="CEP"
                type="number"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.cep}
              />
              <TextField
                id="standard-search"
                label="Estado"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.state}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Raça/Cor"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.race}
              />
              <TextField
                id="standard-search"
                label="Gênero"
                type="search"
                variant="standard"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{ shrink: true }}
                value={formUser?.gender}
              />
            </div>
          </FormControl>
        </Paper>
      </Box >
    </div>

  )
}