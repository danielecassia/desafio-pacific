import { Box, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
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
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 1,
        m: 5,
        borderRadius: 1,
      }}>

        <div>
          <List
            component="nav" aria-label="main mailbox folders"
            sx={{ width: '100%', bgcolor: 'background.paper' }}
          >
            {formList.map((listItem) =>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to={`../${listItem.name}/details`}>
                  <ListItemText primary={listItem.name} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </div>
      </Box>
    </div>
  );
}