import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import imgBook from "../images/shop/books/books.198283298be9eac719d6.png";
import MainNavbar from "../component/Common/MainNavbar";
import BookImg1 from "../images/shop/books/img1.png";

const cardsData = [
  { id: 1, title: "Tara's Dua Book", price: "$15", imgSrc: BookImg1 },
  { id: 2, title: "Ramadan Coloring Book", price: "$13", imgSrc: BookImg1 },
  { id: 3, title: "Book 3", price: "$25", imgSrc: BookImg1 },
  { id: 4, title: "Book 4", price: "$30", imgSrc: BookImg1 },
  { id: 5, title: "Book 5", price: "$35", imgSrc: BookImg1 },
  { id: 6, title: "Book 6", price: "$40", imgSrc: BookImg1 },
];

const Shop = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(171, 202, 255)', minHeight: '100vh' }}>
      <Box sx={{ mt: 3, mb: 4 }}>
        <MainNavbar />
      </Box>
      <Box
        component="img"
        src={imgBook}
        alt="Book"
        sx={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          mt: 2,
        }}
      />
      <Grid container spacing={1} sx={{ mt: 4, justifyContent: 'center' }}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} key={card.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                width: '90%',
                maxWidth: 400,
                borderRadius: 4,
                backgroundColor: 'orange',
                margin: '5px',
                overflow: 'hidden',
                position: 'relative',
                '&:hover .cardImage': {
                  filter: 'blur(5px)',
                  transition: 'filter 0.3s ease-in-out',
                },
                '&:hover .addButton': {
                  opacity: 1,
                  transition: 'opacity 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                className="cardImage" 
                component="img"
                height="300" 
                image={card.imgSrc}
                alt={card.title}
                sx={{ objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
              />
              <CardContent sx={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: 'white', fontSize: '1.2rem' }}>{card.title}</Typography>
                <Typography variant="body1" sx={{ color: 'white', fontSize: '1rem' }}>{card.price}</Typography>
              </CardContent>
              <Button
                variant="contained"
                className="addButton" 
                sx={{
                  position: 'absolute',
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  opacity: 0, 
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)',
                  borderRadius: '20px',
                  fontWeight: 'bold', // Added bold font weight
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgb(106, 57, 162) 0%, rgb(106, 57, 162) 100%)',
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
  );
};

export default Shop;
