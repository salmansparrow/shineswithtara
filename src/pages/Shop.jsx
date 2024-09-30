import React from "react";
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
import learningActivityImg from "../images/shop/learning sheets/activity1.png.png";
import activityImg from "../images/shop/learning sheets/learnImg.png";
import coloringImg from "../images/shop/coloring sheets/coloring.png";
import imgColor from "../images/shop/coloring sheets/imgcolor.png";
import extraActivity from "../images/shop/extra activity/extra activity.png";
import extraImg from "../images/shop/extra activity/extraimg.png";
import Layout from "../component/Layout/Layout";

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
  return (
    <Layout>
      <Box sx={{ backgroundColor: "rgb(171, 202, 255)", minHeight: "100vh" ,paddingBottom:"50px" }}>
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
                >
                  Add to Cart
                  <AddShoppingCartIcon sx={{ ml: 1 }} />
                </Button>
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
