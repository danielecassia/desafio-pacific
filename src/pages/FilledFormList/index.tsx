import { Box, Button, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useUserData } from "../../utils/contexts/UserDataContext";

export function FilledFormList() {
  const { formList } = useUserData();
  const navigate = useNavigate();

  console.log(formList);
  return (
    <div>
      <div>
        <Button
          onClick={() => navigate(-1)}>Preencher novo formulário</Button>
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
      ><Typography>Formulários Preenchidos</Typography></Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 3,
        borderRadius: 1,
      }}>

        <div>
          <Paper elevation={3}>
            <List
              component="nav" aria-label="main mailbox folders"
              sx={{ width: '100%', bgcolor: 'background.paper' }}
            >
              {formList.map((listItem, index) =>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to={`../${listItem.name}/details`}>
                    <ListItemText primary={index + 1} />
                    <ListItemText primary={listItem.name} />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Paper>
        </div>
      </Box>
    </div>
  );
}