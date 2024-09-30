import { useEffect, useRef } from "react";
import { Box, Container, Grid, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Intro.css";

// Use require to get image paths correctly
const imageList = [
  { src: require("../../images/intro/Shop.jpg"), path: "/shop" }, // Add path for navigation
  { src: require("../../images/intro/watch.jpg"), path: "/watch" },
  { src: require("../../images/intro/about.jpg"), path: "/about" },
  { src: require("../../images/intro/character.jpg"), path: "/characters" },
  { src: require("../../images/intro/faq.jpg"), path: "/faq" },
  { src: require("../../images/intro/contact.jpg"), path: "/contact" },
  { src: require("../../images/intro/event.jpg"), path: "/events" },
  { src: require("../../images/intro/colorful.jpg"), path: "/colorful" },
];

function Intro() {
  const cardRefs = useRef([]); // Create a ref array for each card

  useEffect(() => {
    const currentRefs = cardRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Add 'show' class when in view
          } else {
            entry.target.classList.remove("show"); // Remove 'show' when out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the card is visible
    );
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref); // Observe each card
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref); // Cleanup observer on unmount
      });
    };
  }, []);

  return (
    <>
      <Box className="Intro-section">
        <Container maxWidth="lg">
          <Grid className="intro">
            <Box className="intro-box">
              <Box sx={{ marginBottom: "40px" }}>
                <h3 className="Introducing">
                  Introducing{" "}
                  <span style={{ color: "rgb(2, 27, 81)" }}>
                    Tara and Shine
                  </span>
                </h3>
              </Box>

              <Box
                className="intro-para"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <p>
                  At the heart of this initiative is Tara, a nine years old, a
                  delightful character, and her imaginary companion, Shine.
                  Together, they embody the essence of Islamic teachings and
                  virtues.
                </p>
                <p>
                  They are delightful best friends who radiate joy, curiosity,
                  and affection. Together, they embark on extraordinary
                  journeys, captivating friends from all corners of the world
                  and whisking them away into a realm of enchantment.
                </p>
                <p>
                  Tara and Shine explore magical escapades that effortlessly
                  impart Islamic teachings, moral values, and the importance of
                  family bonds. The crux of our efforts revolves around delving
                  into the profound teachings of Hadith from the Quran, the
                  enchanting recitation of the Quran, and a fundamental
                  introduction to Arabic. We aim to elucidate the Arabic
                  alphabet, numbers, months, and more, ensuring a holistic
                  understanding.
                </p>
                <p>
                  This captivating series is specifically tailored for Muslim
                  kids worldwide, aiming to foster spiritual and character
                  development in their young children. Join Tara and Shine as
                  they weave a tapestry of thrilling adventures, educational
                  experiences, and heartwarming moments that will leave a
                  lasting impact on young minds.
                </p>
              </Box>
            </Box>
          </Grid>
        </Container>

        <Box className="Shine-tara-for-you">
          <h3>
            What{" "}
            <span style={{ color: "rgb(2, 27, 81)" }}>
              Shine And Tara Have For You
            </span>
          </h3>
        </Box>

        <Box className="shines-card">
          <Grid container spacing={2} sx={{ mb: "40px" }}>
            {imageList.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {/* Wrap the card in a NavLink */}
                <NavLink to={image.path} style={{ textDecoration: "none" }}>
                  <Box
                    ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
                    className="card flip-card"
                    sx={{ width: "100%", maxWidth: "350px", mx: "auto" }}
                  >
                    {/* Front face */}
                    <Box className="front">
                      <CardMedia
                        component="img"
                        height="300"
                        image={image.src}
                        alt={`Card ${index + 1}`}
                        sx={{
                          objectFit: "cover",
                          borderRadius: "12px",
                          maxWidth: "100%",
                        }}
                      />
                    </Box>
                  </Box>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            background: "rgb(164, 174, 233)",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Intro;
