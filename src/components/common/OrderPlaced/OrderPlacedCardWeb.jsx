import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import VegOrNon from "../vegOrNon/VegOrNon";
import OrderAgainButton from "../OrderAgainButton/OrderAgainButton";

function OrderPlacedCardWeb({ img, name, category, cps, serving }) {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "9.5rem",
        marginBottom: "2rem",
        borderRadius: "15px",
      }}>
      <Paper
        sx={{
          height: "68%",
          width: "100%",
          borderRadius: "15px",
          paddingInline: "2.25rem",
        }}>
        <Box sx={{ display: "flex", paddingBlock: "0.6rem", gap: "1rem" }}>
          <img
            src={img}
            alt={name}
            style={{
              height: "5.5rem",
              width: "5.5rem",
              borderRadius: "50%",
            }}></img>
          <Box>
            <VegOrNon
              txtSize="0.8rem"
              txtValue={category}
              txtCol="#525252"
              txtWeight={600}
              space="0.25rem"></VegOrNon>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}>
              dal bati churma
            </Typography>
            <Typography
              sx={{
                fontWeight: "300",
                fontSize: "0.875rem",
                lineHeight: "18.2px",
              }}>
              Cost Per Serving : ₹ {cps}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Box sx={{ width: "90%", height: "32%", marginInline: "auto" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "2.5rem",
          }}>
          <Box
            sx={{
              width: "fit",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "10rem",
            }}>
            <Typography
              sx={{
                color: "rgba(82,82,82,1)",
                fontWeight: "300",
                fontSize: "0.875rem",
              }}
              noWrap>
              Serving :
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid rgba(0,0,0,0.48)",
                borderRadius: "66px",
                width: "4.75rem",
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
              display: "flex",
              width: "8.5rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "400",
                color: "rgba(82,82,82,1)",
              }}
              noWrap>
              Total Cost :
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", fontWeight: "700" }} noWrap>
              ₹ {cps * Number(serving)}
            </Typography>
          </Box>
          <Box sx={{ width: "8.75rem" }}>
            <OrderAgainButton
              rad="20px"
              h="2.125rem"
              w="8.625rem"
              txtSize="0.75rem"
              txtWeight="700"></OrderAgainButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default OrderPlacedCardWeb;
