
import { FormControl } from '@mui/base/FormControl';
import { useParams } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useUserData } from '../../utils/contexts/UserDataContext';

export function DetailsFormData() {
  const { formList } = useUserData();
  const { userName } = useParams();
  const formUser = formList.find((item) => item.name == userName)
  useEffect(() => {
    console.log(formUser);

  }, [])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl defaultValue="" required>
        <div>
          <TextField
            id="standard-search"
            label="Nome"
            type="search"
            variant="standard"
            value={formUser?.name}
          />
          <TextField
            id="standard-search"
            label=" Email"
            type="search"
            variant="standard"
            value={formUser?.email}
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Telefone"
            type="search"
            variant="standard"
            value={formUser?.phone}
          />
          <TextField
            id="standard-search"
            label=" Data de Nascimento"
            type="search"
            variant="standard"
            value={formUser?.birth}
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Rua"
            type="search"
            variant="standard"
            value={formUser?.street}
          />
          <TextField
            id="standard-search"
            label=" Número"
            type="search"
            variant="standard"
            value={formUser?.number}
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="CEP"
            type="search"
            variant="standard"
            value={formUser?.cep}
          />
          <TextField
            id="standard-search"
            label="Estado"
            type="search"
            variant="standard"
            value={formUser?.state}
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Raça/Cor"
            type="search"
            variant="standard"
            value={formUser?.race}
          />
          <TextField
            id="standard-search"
            label="Gênero"
            type="search"
            variant="standard"
            value={formUser?.gender}
          />
        </div>
      </FormControl>
    </Box>
  )
}