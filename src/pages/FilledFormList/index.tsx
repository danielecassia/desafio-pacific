import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import { useUserData } from "../../utils/contexts/UserDataContext";

export function FilledFormList() {
  const { formList } = useUserData();
  console.log(formList);
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 1,
      m: 15,
      borderRadius: 1,
    }}>
      <div>
        <List
          component="nav" aria-label="main mailbox folders"
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
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
  );
}