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
import Layout from "../component/Layout/Layout";
import CartDrawer from "../component/Common/CartDrawer";
import { useDispatch } from "react-redux";
import { addItem } from "./features/Slice";
import productService from "../service/addproduct/addProduct";
import book from "../images/book.png";
import activity from "../images/activity.png";
import coloring from "../images/coloring.png";
import extra from "../images/extra.png";

const Shop = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Fetch products
  const fetchProducts = async (category = "") => {
    try {
      const productData = await productService.getProducts({ category });
      setProducts(productData || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item._id,
      name: item.bookName,
      price: item.bookPrice,
      quantity: 1,
      image: `http://localhost:3000/${item.imageUrl}`,
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

  // Function to render products for each category
  const renderProductSection = (
    categoryImage,
    categoryName,
    categoryProducts
  ) => {
    return (
      <Box
        key={categoryName}
        sx={{ mb: 6, paddingBottom: "70px", paddingTop: "20px" }}
      >
        <CardMedia
          component="img"
          image={categoryImage} // Category image
          alt={categoryName}
          sx={{ objectFit: "cover", mb: 2, borderRadius: 4 }}
        />
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          {categoryProducts.length > 0 ? (
            categoryProducts.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={product._id}
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
                    image={`http://localhost:3000/${product.imageUrl}`}
                    alt={product.bookName}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />
                  <CardContent sx={{ padding: "16px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        {product.bookName}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", fontSize: "1.1rem" }}
                      >
                        ${product.bookPrice}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "white", fontSize: "1rem" }}
                      >
                        Category: {product.category}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Button
                    variant="contained"
                    className="addButton"
                    onClick={() => handleAddToCart(product)}
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
            ))
          ) : (
            <Typography variant="h6" sx={{ color: "white" }}>
              <h2>Coming Soon</h2>
            </Typography>
          )}
        </Grid>
      </Box>
    );
  };

  // Filter products by category
  const books = products.filter((item) => item.category === "Books");
  const learningSheets = products.filter(
    (item) => item.category === "Activity-Sheets"
  );
  const coloringSheets = products.filter(
    (item) => item.category === "Coloring"
  );
  const extraSheets = products.filter(
    (item) => item.category === "Extra-Sheets"
  );

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "rgb(171, 202, 255)",
          minHeight: "100vh",
          paddingBottom: "50px",
        }}
      >
        <Box sx={{ mt: 8, mb: 4 }} />

        {/* Render each category with its image and products */}
        {renderProductSection(book, "Books", books)}
        {renderProductSection(activity, "Learning Sheets", learningSheets)}
        {renderProductSection(coloring, "Coloring Sheets", coloringSheets)}
        {renderProductSection(extra, "Extra Sheets", extraSheets)}

        {/* Cart Drawer */}
        <CartDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          cartItems={cartItems}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
        />
      </Box>
    </Layout>
  );
};

export default Shop;
