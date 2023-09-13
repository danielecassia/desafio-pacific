import {
  Avatar, Box, Button, Divider, List,
  ListItem, ListItemButton, ListItemText, Typography
} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useUserData } from "../../utils/contexts/UserDataContext";

export function FilledFormList() {
  const { formList } = useUserData();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Button
          size="small"
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
      ><Typography variant="h5" color={'primary.main'}>Formulários Preenchidos</Typography></Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 3,
        borderRadius: 1,
      }}>

        <div>
          {/* <Paper elevation={3} */}
          {/* sx={{ minHeight: '20vw' }}> */}
          <List
            component="nav" aria-label="main mailbox folders"
            sx={{ width: '100%', bgcolor: 'background.paper', minWidth: '40vw' }}
          >
            {formList.map((listItem) =>
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      flexDirection: 'row',
                      display: 'flex',
                      gap: 2,
                    }}
                    component={Link}
                    to={`../${listItem.name}/details`}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{listItem.name[0].toUpperCase()}</Avatar>
                    <ListItemText primary={listItem.name} />
                  </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            )}
          </List>
          {/* </Paper> */}
        </div>
      </Box >
    </div >
  );
}