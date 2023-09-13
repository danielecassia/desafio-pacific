import { FormControl } from '@mui/base/FormControl';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { UserData, emptyUserData } from '../../utils/types/UserData';
import { useUserData } from '../../utils/contexts/UserDataContext';

export function UsersForm() {
  const { formList, addDataToFormList } = useUserData();
  const [formData, setFormData] = React.useState<UserData>(emptyUserData);

  function updateData(newFormData: Partial<UserData>) {
    // console.log(newFormData)
    setFormData({ ...formData, ...newFormData });
  }
  function handleSubmit() {
    addDataToFormList(formData)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>{JSON.stringify(formList)}</h2>
      <form>
        <FormControl defaultValue="" required>
          <div>
            <TextField
              id="standard-search"
              label="Nome"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ name: e.target.value })}
            />
            <TextField
              id="standard-search"
              label=" Email"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ email: e.target.value })}
            />
          </div>
          <div>
            <TextField
              id="standard-search"
              label="Telefone"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ phone: e.target.value })}
            />
            <TextField
              id="standard-search"
              label=" Data de Nascimento"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ birth: e.target.value })}
            />
          </div>
          <div>
            <TextField
              id="standard-search"
              label="Rua"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ street: e.target.value })}
            />
            <TextField
              id="standard-search"
              label=" Número"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ number: e.target.value })}
            />
          </div>
          <div>
            <TextField
              id="standard-search"
              label="CEP"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ cep: e.target.value })}
            />
            <TextField
              id="standard-search"
              label="Estado"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ state: e.target.value })}
            />
          </div>
          <div>
            <TextField
              id="standard-search"
              label="Raça/Cor"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ race: e.target.value })}
            />
            <TextField
              id="standard-search"
              label="Gênero"
              type="search"
              variant="standard"
              onChange={(e) => updateData({ gender: e.target.value })}
            />
          </div>
          <div>
            <Button
              onClick={handleSubmit}>Salvar Dados</Button>
          </div>
        </FormControl>
      </form>
    </Box>
  )
}