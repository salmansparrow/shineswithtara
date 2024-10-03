// src/pages/Shop.js

import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import imgBook from "../images/shop/books/books.198283298be9eac719d6.png";
import BookImg1 from "../images/shop/books/img1.png";
// import learningActivityImg from "../images/shop/learning sheets/activity1.png";
import activityImg from "../images/shop/learning sheets/learnImg.png";
// import coloringImg from "../images/shop/coloring sheets/coloring.png";
import imgColor from "../images/shop/coloring sheets/imgcolor.png";
// import extraActivity from "../images/shop/extra activity/extra activity.png";
import extraImg from "../images/shop/extra activity/extraimg.png";
import Layout from "../component/Layout/Layout";
import CartDrawer from "../component/Common/CartDrawer";
// import cartimage from "../images/colorful/img1.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQty,
  decreaseQty,
  selectCartItems,
} from "./features/Slice.js";

const bookActivityData = [
  { id: 1, title: "Tara's Dua Book", price: "$15", imgSrc: BookImg1 },
  { id: 2, title: "Ramadan Coloring Book", price: "$13", imgSrc: BookImg1 },
  { id: 3, title: "Book 3", price: "$25", imgSrc: BookImg1 },
  { id: 4, title: "Book 4", price: "$30", imgSrc: BookImg1 },
  { id: 5, title: "Book 5", price: "$35", imgSrc: BookImg1 },
  { id: 6, title: "Book 6", price: "$40", imgSrc: BookImg1 },
];

const learningActivityData = [
  { id: 1, title: "Worksheet", price: "$15", imgSrc: activityImg },
  { id: 2, title: "Ramadan Coloring Book", price: "$13", imgSrc: activityImg },
  { id: 3, title: "Book 3", price: "$25", imgSrc: activityImg },
  { id: 4, title: "Book 4", price: "$30", imgSrc: activityImg },
  { id: 5, title: "Book 5", price: "$35", imgSrc: activityImg },
  { id: 6, title: "Book 6", price: "$40", imgSrc: activityImg },
];

const coloringActivityData = [
  { id: 1, title: "Coloring Sheet", price: "$15", imgSrc: imgColor },
  { id: 2, title: "Coloring Sheet", price: "$13", imgSrc: imgColor },
];

const extraActivityData = [
  { id: 1, title: "Extra", price: "$15", imgSrc: extraImg },
  { id: 2, title: "Extra", price: "$13", imgSrc: extraImg },
  { id: 3, title: "Book 3", price: "$25", imgSrc: extraImg },
  { id: 4, title: "Book 4", price: "$30", imgSrc: extraImg },
];

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
    setDrawerOpen(true); // Open drawer after adding item
  };

  const handleIncreaseQty = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecreaseQty = (id) => {
    dispatch(decreaseQty(id));
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "rgb(171, 202, 255)",
          minHeight: "100vh",
          paddingBottom: "50px",
        }}
      >
        <Box sx={{ mt: 8, mb: 4 }}>{/* <MainNavbar /> */}</Box>
        {/* Books Section */}
        <Box
          component="img"
          src={imgBook}
          alt="Book"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            mt: 2,
            mb: 6,
          }}
        />
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          {bookActivityData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 4,
                  backgroundColor: "rgb(199, 120, 5)",
                  margin: "5px",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover .cardImage": {
                    filter: "blur(5px)",
                    transition: "filter 0.3s ease-in-out",
                  },
                  "&:hover .addButton": {
                    opacity: 1,
                    transition: "opacity 0.3s ease-in-out",
                  },
                }}
              >
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="300"
                  image={card.imgSrc}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <CardContent
                  sx={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.price}
                  </Typography>
                </CardContent>
                <Button
                  className="addButton"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: 0,
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={() => handleAddToCart(card)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Learning Activity Section */}
        <Grid container spacing={1} sx={{ justifyContent: "center", mt: 4 }}>
          {learningActivityData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 4,
                  backgroundColor: "rgb(199, 120, 5)",
                  margin: "5px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.imgSrc}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <CardContent
                  sx={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.price}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={() => handleAddToCart(card)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Color Activity Section */}
        <Grid container spacing={1} sx={{ justifyContent: "center", mt: 4 }}>
          {coloringActivityData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 4,
                  backgroundColor: "rgb(199, 120, 5)",
                  margin: "5px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.imgSrc}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <CardContent
                  sx={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.price}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={() => handleAddToCart(card)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Extra Activity Section */}
        <Grid container spacing={1} sx={{ justifyContent: "center", mt: 4 }}>
          {extraActivityData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 4,
                  backgroundColor: "rgb(199, 120, 5)",
                  margin: "5px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={card.imgSrc}
                  alt={card.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <CardContent
                  sx={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "1.2rem" }}
                  >
                    {card.price}
                  </Typography>
                </CardContent>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "green",
                    color: "white",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  onClick={() => handleAddToCart(card)}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cart Drawer */}
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Layout>
  );
};

export default Shop;
