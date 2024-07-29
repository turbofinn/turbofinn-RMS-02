import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import img1 from "../../../assets/Image/meal/dalBatiChurma.png";
import VegOrNon from "../vegOrNon/VegOrNon";
import CustmRating from "../CustmRating/CustmRating";
import OrderAgainButton from "../OrderAgainButton/OrderAgainButton";
function OrderHistoryCardWeb() {
  return (
    <Box
      sx={{
        width: "100%",

        height: "10.5rem",
      }}>
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid #fff",
          borderRadius: "15px",
        }}>
        <Paper
          elevation={1}
          sx={{
            border: "1px solid #f",
            borderRadius: "15px",
            height: "65%",
            paddingInline: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              height: "5.5rem",
            }}>
            <img
              src={img1}
              style={{
                height: "5.4rem",
                width: "5.4rem",
                objectFit: "cover",
                borderRadius: "50%",
              }}></img>
            <Box>
              <VegOrNon
                txtSize="0.8rem"
                txtValue="vegetarian"
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
                Cost Per Serving : ₹ 70
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "9.25rem",
            }}>
            <Typography
              sx={{
                color: "rgba(82,82,82,1)",
                fontWeight: "300",
                fontSize: "0.875rem",
              }}>
              Serving :
            </Typography>
            <Typography
              sx={{
                width: "4.75rem",
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.48)",
                borderRadius: "66px",
              }}>
              01
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            paddingInline: "3rem",
            width: "100%",
            height: "35%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <CustmRating value={4.5}></CustmRating>
          <Box sx={{ display: "flex", gap: '2rem' }}>
            <Box
              sx={{
                display: 'flex',
                width: "fit",
                alignItems: "center",
                textAlign: "center",
              }}>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "400",
                  width: "fit",
                  color: "rgba(82,82,82,1)",
                }}
                noWrap>
                Total Cost :
              </Typography>
              <Typography
                sx={{ fontSize: "0.95rem", fontWeight: "700", width: "5rem" }}
                noWrap>
                ₹ 70
              </Typography>
            </Box>
            <OrderAgainButton
              rad="20px"
              h="2.125rem"
              w="8.625rem"
              txtSize="0.75rem"
              txtWeight="700"></OrderAgainButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default OrderHistoryCardWeb;
