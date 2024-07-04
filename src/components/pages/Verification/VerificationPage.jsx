import VerificationMobile from "./VerificationMobile";
import VerificationWebView from "./verificationWebView";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function VerificationPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return <>{matches ? <VerificationWebView /> : <VerificationMobile />}</>;
}
export default VerificationPage;
