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
import learningActivityImg from "../images/shop/learning sheets/activity1.png.png";
import coloringImg from "../images/shop/coloring sheets/coloring.png";
import extraActivity from "../images/shop/extra activity/extra activity.png";
import Layout from "../component/Layout/Layout";
import CartDrawer from "../component/Common/CartDrawer";
// import cartimage from "../images/colorful/img1.png";
import {
  bookActivityData,
  learningActivityData,
  coloringActivityData,
  extraActivityData,
} from "../dummyData";
import { useDispatch } from "react-redux";
import { addItem } from "./features/Slice";

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Initialize with an empty array
  const dispatch = useDispatch(); // Initialize useDispatch hook
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "Tara's Dua Book",
  //     price: 10.0,
  //     quantity: 2,
  //     image: cartimage,
  //   },
  //   {
  //     id: 2,
  //     name: "Ramadan Coloring Book",
  //     price: 13.5,
  //     quantity: 1,
  //     image: cartimage,
  //   },
  //   {
  //     id: 3,
  //     name: "Worksheet",
  //     price: 25.0,
  //     quantity: 3,
  //     image: cartimage,
  //   },
  // ]);

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      // price: parseFloat(item.price.replace("$", "")),
      price:
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", ""))
          : item.price,
      quantity: 1,
      image: item.imgSrc,
    };
    dispatch(addItem(cartItem));
    setDrawerOpen(true);
  };

  const handleIncreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
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
                    sx={{ color: "white", fontSize: "1rem" }}
                  >
                    {card.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  className="addButton"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    background:
                      "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                    },
                  }}
                  // onClick={() => setDrawerOpen(true)} // Open drawer
                  onClick={() => handleAddToCart(card)}
                >
                  Add to Cart
                  <AddShoppingCartIcon sx={{ ml: 1 }} />
                </Button>
                <CartDrawer
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  cartItems={cartItems}
                  onIncreaseQty={handleIncreaseQty}
                  onDecreaseQty={handleDecreaseQty}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Learning Activities Section */}
        <Box component="section" sx={{ mt: 6 }}>
          <Box
            component="img"
            src={learningActivityImg}
            alt="Book"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              mt: 6,
              mb: 6,
            }}
          />

          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {learningActivityData.map((activity) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={activity.id}
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
                    image={activity.imgSrc}
                    alt={activity.title}
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
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: "1rem" }}
                    >
                      {activity.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    className="addButton"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 20px",
                      background:
                        "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      },
                    }}
                    // onClick={() => setDrawerOpen(true)} // Open drawer
                    onClick={() => handleAddToCart(activity)}
                  >
                    Add to Cart
                    <AddShoppingCartIcon sx={{ ml: 1 }} />
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Coloring Section */}
        <Box component="section" sx={{ mt: 6 }}>
          <Box
            component="img"
            src={coloringImg}
            alt="Book"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              mt: 6,
              mb: 6,
            }}
          />

          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {coloringActivityData.map((activity) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={activity.id}
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
                    image={activity.imgSrc}
                    alt={activity.title}
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
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: "1rem" }}
                    >
                      {activity.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    className="addButton"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 20px",
                      background:
                        "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      },
                    }}
                    // onClick={() => setDrawerOpen(true)} // Open drawer
                    onClick={() => handleAddToCart(activity)}
                  >
                    Add to Cart
                    <AddShoppingCartIcon sx={{ ml: 1 }} />
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Extras Section */}
        <Box component="section" sx={{ mt: 6 }}>
          <Box
            component="img"
            src={extraActivity}
            alt="Book"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              mt: 6,
              mb: 6,
            }}
          />

          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {extraActivityData.map((activity) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={activity.id}
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
                    image={activity.imgSrc}
                    alt={activity.title}
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
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontSize: "1rem" }}
                    >
                      {activity.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    className="addButton"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 20px",
                      background:
                        "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)",
                      },
                    }}
                    // onClick={() => setDrawerOpen(true)} // Open drawer
                    onClick={() => handleAddToCart(activity)}
                  >
                    Add to Cart
                    <AddShoppingCartIcon sx={{ ml: 1 }} />
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Shop;
