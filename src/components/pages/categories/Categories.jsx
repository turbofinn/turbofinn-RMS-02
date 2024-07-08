import CategoriesWeb from "./CategoriesWeb";
import CategoriesMob from "./CategoriesMob";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Categories() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return <>{matches ? <CategoriesWeb /> : <CategoriesMob />}</>;
}
export default Categories;
