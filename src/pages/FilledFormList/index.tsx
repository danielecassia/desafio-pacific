import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useUserData } from "../../contexts/UserDataContext";
import { Link } from 'react-router-dom';

export function FilledFormList() {
  const { formList } = useUserData();
  console.log(formList);
  return (
    <div>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="contacts"
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
  );
}