import AddToMealWeb from "./AddToMealWeb";
import AddToMealMob from "./AddToMealMob";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function AddToMeal() {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  return <>{aspect ? <AddToMealWeb /> : <AddToMealMob />}</>;
}
export default AddToMeal;
