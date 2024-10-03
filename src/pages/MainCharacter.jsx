import React, { useState, useEffect } from "react";
import Layout from "../component/Layout/Layout";
import HeroPage from "../component/Hero/Hero";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";
import flower from "../images/maincharacter/flower.png";
import character1 from "../images/maincharacter/character1.jpg";
import character2 from "../images/maincharacter/character2.jpg";
import character3 from "../images/maincharacter/character3.jpg";
import character4 from "../images/maincharacter/character4.jpg";
import team1 from "../images/maincharacter/team1.png";
import team2 from "../images/maincharacter/team2.png";
import team3 from "../images/maincharacter/team3.png";

const MainCharacter = () => {
  const [isMainBlue, setIsMainBlue] = useState(true);

  // Data for main characters and team members
  const mainCharatersData = [
    { id: 1, imgSrc: character1 },
    { id: 2, imgSrc: character2 },
    { id: 3, imgSrc: character3 },
    { id: 4, imgSrc: character4 },
    { id: 5, imgSrc: character2 },
    { id: 6, imgSrc: character1 },
  ];

  const teamData = [
    {
      id: 1,
      imgSrc: team1,
      name: "Sohaib Ali Khan",
      title: "Social Media Content Writer",
      email: "sohaibalikhann@gmail.com",
    },
    {
      id: 2,
      imgSrc: team2,
      name: "Onam",
      title: "Animator, Storyboard, Illustrator, Character",
      email: "archiotshimo@gmail.com",
    },
    {
      id: 3,
      imgSrc: team2,
      name: "Person 3",
      title: "Position",
      email: "email@example.com",
    },
    {
      id: 4,
      imgSrc: team1,
      name: "Person 4",
      title: "Position",
      email: "email@example.com",
    },
  ];

  // useEffect to toggle colors every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMainBlue((prev) => !prev); // Toggle the color state
    }, 1000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, 1000); // Run once on mount

  return (
    <Layout>
      <HeroPage
        follow={<Typography variant="h2">Unveil The Stories Behind</Typography>}
        explore={
          <Typography variant="h2">
            <span style={{ color: "rgb(254, 157, 4)" }}>Our</span>{" "}
            <span style={{ color: isMainBlue ? "rgb(2, 27, 81)" : "white" }}>Main</span>
            <span style={{ color: isMainBlue ? "white" : "rgb(235, 87, 119)" }}>
              {" "}Characters
            </span>
          </Typography>
        }
        subtitle={
          <Typography variant="h4">Click To See Latest Adventures!</Typography>
        }
      />

      <Box
        sx={{
          backgroundColor: "rgb(171, 202, 255)",
          padding: { xs: 2, md: 4 },
          marginTop: "0",
          marginBottom: "0",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          Let's Learn More About The Enchanted World Of Shine With Tara
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
            mb: "25px",
          }}
        >
          <img
            src={flower}
            alt="flower"
            style={{ width: "60px", marginRight: "8px" }}
          />
          <Typography
            variant="h4"
            sx={{
              display: "inline-block",
              color: "rgb(106, 57, 162)",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Main Characters
          </Typography>
          <img
            src={flower}
            alt="flower"
            style={{ width: "60px", marginLeft: "8px" }}
          />
        </Box>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {mainCharatersData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "8px",
              }}
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
                  border: "8px solid rgb(106, 57, 162)",
                  borderLeft: "16px solid rgb(106, 57, 162)",
                  boxSizing: "border-box",
                }}
              >
                <CardMedia
                  className="cardImage"
                  component="img"
                  height="300"
                  image={card.imgSrc}
                  alt={`Character ${card.id}`}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <Box sx={{ padding: 2, textAlign: "center" }}>
                  <Typography variant="h6">Character {card.id}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team */}
      <Box
        sx={{
          backgroundColor: "rgb(189, 168, 225)",
          padding: { xs: 2, md: 4 },
          marginTop: "0",
          marginBottom: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
            mb: 10,
          }}
        >
          <img
            src={flower}
            alt="flower"
            style={{ width: "60px", marginRight: "8px" }}
          />
          <Typography
            variant="h4"
            sx={{
              display: "inline-block",
              color: "rgb(106, 57, 162)",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Team
          </Typography>
          <img
            src={flower}
            alt="flower"
            style={{ width: "60px", marginLeft: "8px" }}
          />
        </Box>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {teamData.map((member) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={member.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "8px",
              }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 300,
                  height: "550px",
                  maxHeight: 500,
                  borderRadius: 4,
                  backgroundColor: "rgb(249, 191, 41)",
                  margin: "5px",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.imgSrc}
                  alt={`Team Member ${member.name}`}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
                <Box sx={{ padding: 2, textAlign: "center" }}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.title}</Typography>
                  <Typography variant="body2">{member.email}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default MainCharacter;
