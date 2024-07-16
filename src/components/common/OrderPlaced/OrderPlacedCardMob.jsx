import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import VegOrNon from "../vegOrNon/VegOrNon";
import OrderMoreButton from "../OrderMoreButton/OrderMoreButton";

function OrderPlacedCardMob({
  img,
  name,
  category,
  serving,
  servingType,
  cps,
}) {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          border: "1.5px solid rgba(0, 0, 0, 0.38)",
          width: "100%",
          height: "10.5rem",
          borderRadius: "20px",
          boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)",
        }}>
        <Paper
          elevation={0}
          sx={{
            border: "1.5px solid rgba(0, 0, 0, 0.38)",
            height: "70%",
            borderRadius: "20px",
            width: "100%",
            boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)",
          }}>
          <Box
            sx={{
              width: "90%",
              marginInline: "auto",
              display: "flex",
              marginTop: "0.75rem",
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                height: "5.5rem",
              }}>
              <img
                src={img}
                style={{
                  height: "5.4rem",
                  width: "5.4rem",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}></img>
              <Box>
                <VegOrNon
                  txtSize="0.5rem"
                  txtValue={category}
                  txtCol="rgba(82, 82, 82, 1)"
                  txtWeight={500}
                  space="0.25rem"></VegOrNon>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginTop: "0.3rem",
                    colot: "rgba(0, 0, 0, 0.86)",
                  }}>
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "0.75rem",
                    lineHeight: "18.2px",
                    marginTop: "0.5rem",
                  }}>
                  Total Cost :{" "}
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      marginLeft: "0.75rem",
                    }}>
                    ₹ {Number(cps) * Number(serving)}
                  </span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ height: "30%", width: "100%" }}>
          <Box
            sx={{
              height: "100%",
              width: "90%",
              marginInline: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Box
              sx={{
                maxWidth: "10rem",
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Typography
                sx={{
                  color: "rgba(82,82,82,1)",
                  fontWeight: "300",
                  fontSize: "0.95rem",
                  textTransform: "capitalize",
                  width: "fit",
                }}
                noWrap>
                {servingType} :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1.5px solid rgba(0,0,0,0.48)",
                  borderRadius: "66px",
                  width: "4.75rem",
                  height: "1.75rem",
                  paddingInline: "0.5rem",
                }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "rgba(69, 192, 219, 1)",
                    textAlign: "center",
                    lineHeight: "20.5px",
                  }}>
                  -
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "rgba(0, 0, 0, 0.67)",
                    lineHeight: "20.5px",
                  }}>
                  {serving}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "rgba(69, 192, 219, 1)",
                    textAlign: "center",
                    lineHeight: "20.5px",
                  }}>
                  +
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "fit",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}>
              <OrderMoreButton
                rad={66}
                h="1.9rem"
                w="9rem"
                borderCol="rgba(0, 0, 0, 0.48)"
                borderThick="1.3px"
                txtCol="rgba(20, 116, 113, 0.88)"></OrderMoreButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default OrderPlacedCardMob;
