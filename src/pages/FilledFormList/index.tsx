import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import { useUserData } from "../../utils/contexts/UserDataContext";

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