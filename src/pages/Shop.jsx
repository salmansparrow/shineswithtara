import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { addItem } from "./features/Slice";
import productService from "../service/addproduct/addProduct";

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Initialize with an empty array
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const fetchProducts = async (page = 1, limit = 10, category = "") => {
    try {
      const productData = await productService.getProducts({
        page,
        limit,
        category,
      }); // Use productService
      console.log("Fetched Products:", productData); // Log fetched products
      setProducts(productData || []); // Set products to the response data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.title,
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
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={product.id}
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
                  image={product.imgSrc}
                  alt={product.title}
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
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "1rem" }}
                  >
                    {product.price}
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
                  onClick={() => handleAddToCart(product)}
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
      </Box>
    </Layout>
  );
};

export default Shop;
