import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import "../Hero/Hero.css"; // Import the CSS file

function HeroPage({ follow, explore, learn, subtitle }) {
  return (
    <section className="hero-section">
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Box className="hero-background">
          <Grid container spacing={2} sx={{ zIndex: 1 }}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Fixed to alignItems
                gap: "40px",
                paddingTop: "60px", // Fixed to paddingTop
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "40px", sm: "50px", md: "70px" } }}
              >
                <span style={{ color: "white" }}>{follow}</span>{" "}
                <span style={{ color: "white" }}>{learn}</span> {" "}
                <span style={{ color: "rgb(235, 87, 119)" }}>{explore}</span>{" "}
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "24px", sm: "30px", md: "36px" } }}
              >
                {subtitle}
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.youtube.com/@Shinewithtara"
                    fullWidth
                    sx={{
                      position: "relative",
                      boxSizing: "border-box",
                      outline: 0,
                      border: 0,
                      margin: 0,
                      cursor: "pointer",
                      userSelect: "none",
                      verticalAlign: "middle",
                      textDecoration: "none",
                      fontFamily: "Poppins, sans-serif", // Add fallback font
                      fontWeight: 500,
                      lineHeight: 1.75,
                      borderRadius: "4px",
                      transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(143, 82, 161)",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, " +
                        "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, " +
                        "rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                      width: "100%",
                      padding: "8px 32px",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Start Adventure
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} className="social">
                  <Grid container spacing={2} className="social-icons">
                    <Grid item>
                      <a
                        aria-label="Follow on Facebook"
                        href="https://www.facebook.com/profile.php?id=61554711500749"
                      >
                        <FacebookIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on Instagram"
                        href="https://www.instagram.com/shineswithtara/"
                      >
                        <InstagramIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on YouTube"
                        href="https://www.youtube.com/@Shinewithtara"
                      >
                        <YouTubeIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on TikTok"
                        href="https://www.tiktok.com/@shinewithtara"
                      >
                        <TikTokIcon />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
}
// SVG Icons can be components, defined below
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle cx="35.2143" cy="35.9999" r="35.2143" fill="#3D5A98"></circle>
    <path
      d="M49.6995 19.7217H20.733C19.7408 19.7217 18.9365 20.526 18.9365 21.5182V50.4847C18.9365 51.4768 19.7408 52.2811 20.733 52.2811H49.6995C50.6917 52.2811 51.496 51.4768 51.496 50.4847V21.5182C51.496 20.526 50.6917 19.7217 49.6995 19.7217Z"
      fill="#3D5A98"
    ></path>
    <path
      d="M37.1493 50.4569V37.8485H41.3805L42.0132 32.935H37.1493V29.7987C37.1493 28.3764 37.5454 27.4053 39.584 27.4053H42.1866V23.0035C40.9263 22.8721 39.6598 22.8097 38.3928 22.8164C34.6457 22.8164 32.0652 25.0998 32.0652 29.3118V32.935H27.834V37.8485H32.0652V50.4569H37.1493Z"
      fill="white"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle
      cx="35.643"
      cy="35.9999"
      r="35.2143"
      fill="url(#paint0_linear_149_233)"
    ></circle>
    <g clipPath="url(#clip0_149_233)">
      <path
        d="M35.3396 20.8213C31.1381 20.8213 30.6098 20.8406 28.959 20.9142C27.3082 20.9916 26.1838 21.2509 25.1988 21.6341C24.1655 22.0227 23.2296 22.6324 22.4565 23.4204C21.669 24.1939 21.0594 25.1297 20.6702 26.1626C20.2871 27.1457 20.0258 28.2721 19.9503 29.917C19.8768 31.5717 19.8574 32.0981 19.8574 36.3054C19.8574 40.5088 19.8768 41.0352 19.9503 42.6859C20.0277 44.3348 20.2871 45.4592 20.6702 46.4442C21.067 47.4622 21.5953 48.3253 22.4565 49.1865C23.3157 50.0477 24.1789 50.578 25.1968 50.9728C26.1838 51.3559 27.3063 51.6172 28.9551 51.6927C30.6078 51.7662 31.1342 51.7856 35.3396 51.7856C39.5449 51.7856 40.0694 51.7662 41.7221 51.6927C43.369 51.6153 44.4973 51.3559 45.4823 50.9728C46.5149 50.5839 47.4501 49.9743 48.2226 49.1865C49.0838 48.3253 49.6122 47.4622 50.0089 46.4442C50.3901 45.4592 50.6514 44.3348 50.7288 42.6859C50.8024 41.0352 50.8217 40.5088 50.8217 36.3034C50.8217 32.0981 50.8024 31.5717 50.7288 29.919C50.6514 28.2721 50.3901 27.1457 50.0089 26.1626C49.6198 25.1296 49.0102 24.1938 48.2226 23.4204C47.4498 22.6321 46.5138 22.0224 45.4804 21.6341C44.4934 21.2509 43.3671 20.9897 41.7201 20.9142C40.0674 20.8406 39.543 20.8213 35.3357 20.8213H35.3415H35.3396ZM33.952 23.6119H35.3415C39.4752 23.6119 39.9649 23.6255 41.5963 23.701C43.1058 23.7687 43.9263 24.0222 44.4721 24.2332C45.1939 24.5138 45.7107 24.8505 46.2525 25.3924C46.7944 25.9343 47.1292 26.449 47.4098 27.1728C47.6227 27.7166 47.8743 28.5372 47.942 30.0467C48.0175 31.6781 48.033 32.1678 48.033 36.2996C48.033 40.4314 48.0175 40.9229 47.942 42.5543C47.8743 44.0639 47.6208 44.8825 47.4098 45.4282C47.1616 46.1005 46.7654 46.7083 46.2506 47.2067C45.7087 47.7486 45.1939 48.0834 44.4702 48.364C43.9283 48.5769 43.1077 48.8285 41.5963 48.8982C39.9649 48.9717 39.4752 48.9891 35.3415 48.9891C31.2078 48.9891 30.7162 48.9717 29.0848 48.8982C27.5753 48.8285 26.7567 48.5769 26.2109 48.364C25.5384 48.1162 24.93 47.7207 24.4305 47.2067C23.9152 46.7075 23.5184 46.0991 23.2693 45.4263C23.0584 44.8825 22.8048 44.0619 22.7371 42.5524C22.6636 40.921 22.6481 40.4314 22.6481 36.2957C22.6481 32.162 22.6636 31.6743 22.7371 30.0428C22.8068 28.5333 23.0584 27.7128 23.2712 27.167C23.5518 26.4452 23.8886 25.9285 24.4305 25.3866C24.9723 24.8447 25.4871 24.5099 26.2109 24.2293C26.7567 24.0164 27.5753 23.7648 29.0848 23.6952C30.513 23.6294 31.0665 23.61 33.952 23.6081V23.6119ZM43.6051 26.182C43.3611 26.182 43.1195 26.23 42.8941 26.3234C42.6687 26.4168 42.4639 26.5536 42.2914 26.7261C42.1189 26.8987 41.982 27.1035 41.8887 27.3289C41.7953 27.5543 41.7472 27.7959 41.7472 28.0398C41.7472 28.2838 41.7953 28.5254 41.8887 28.7508C41.982 28.9762 42.1189 29.181 42.2914 29.3535C42.4639 29.5261 42.6687 29.6629 42.8941 29.7563C43.1195 29.8496 43.3611 29.8977 43.6051 29.8977C44.0978 29.8977 44.5704 29.702 44.9188 29.3535C45.2672 29.0051 45.4629 28.5326 45.4629 28.0398C45.4629 27.5471 45.2672 27.0746 44.9188 26.7261C44.5704 26.3777 44.0978 26.182 43.6051 26.182ZM35.3415 28.3534C34.2869 28.3369 33.2396 28.5304 32.2605 28.9226C31.2814 29.3148 30.3901 29.8978 29.6386 30.6378C28.887 31.3777 28.2901 32.2598 27.8827 33.2327C27.4753 34.2055 27.2654 35.2497 27.2654 36.3044C27.2654 37.3591 27.4753 38.4033 27.8827 39.3761C28.2901 40.349 28.887 41.2311 29.6386 41.971C30.3901 42.711 31.2814 43.294 32.2605 43.6862C33.2396 44.0784 34.2869 44.2719 35.3415 44.2554C37.4288 44.2229 39.4195 43.3709 40.8841 41.8833C42.3486 40.3957 43.1695 38.3919 43.1695 36.3044C43.1695 34.2169 42.3486 32.2131 40.8841 30.7255C39.4195 29.2379 37.4288 28.3859 35.3415 28.3534ZM35.3415 31.1421C36.7104 31.1421 38.0232 31.6859 38.9911 32.6538C39.9591 33.6217 40.5029 34.9346 40.5029 36.3034C40.5029 37.6723 39.9591 38.9851 38.9911 39.9531C38.0232 40.921 36.7104 41.4648 35.3415 41.4648C33.9726 41.4648 32.6598 40.921 31.6919 39.9531C30.7239 38.9851 30.1801 37.6723 30.1801 36.3034C30.1801 34.9346 30.7239 33.6217 31.6919 32.6538C32.6598 31.6859 33.9726 31.1421 35.3415 31.1421Z"
        fill="white"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_149_233"
        x1="66.0001"
        y1="0.785643"
        x2="5.89299"
        y2="71.2142"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCA52"></stop>
        <stop offset="0.0572917" stopColor="#FFCE53"></stop>
        <stop offset="0.501796" stopColor="#EF4C5C"></stop>
        <stop offset="1" stopColor="#535BCA"></stop>
      </linearGradient>
      <clipPath id="clip0_149_233">
        <rect
          width="30.9643"
          height="30.9643"
          fill="white"
          transform="translate(19.8574 20.8213)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.5 0C16.031 0 0 16.031 0 35.5S16.031 71 35.5 71 71 54.969 71 35.5 54.969 0 35.5 0z"
      fill="#FF0000"
    ></path>
    <path d="M29.5 36L43.5 28V44L29.5 36Z" fill="white"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 70"
    fill="none"
  >
    <path
      d="M35.2861 0C28.3638 0 21.5969 2.05271 15.8412 5.89856C10.0855 9.74441 5.59943 15.2107 2.95036 21.6061C0.301298 28.0015 -0.391819 35.0388 0.958664 41.8282C2.30915 48.6175 5.64257 54.8539 10.5374 59.7487C15.4322 64.6436 21.6687 67.977 28.458 69.3275C35.2473 70.678 42.2847 69.9849 48.6801 67.3358C55.0755 64.6867 60.5417 60.2007 64.3876 54.445C68.2334 48.6892 70.2861 41.9223 70.2861 35C70.2769 25.7203 66.5864 16.8233 60.0246 10.2615C53.4629 3.69973 44.5659 0.00926584 35.2861 0ZM56.0726 26.9955V29.2565C56.0727 29.4296 56.0381 29.6009 55.9708 29.7603C55.9036 29.9197 55.805 30.0641 55.6811 30.1848C55.5571 30.3055 55.4102 30.4002 55.249 30.4632C55.0878 30.5261 54.9156 30.5562 54.7426 30.5515C51.0474 30.2896 47.5122 28.9403 44.5821 26.6735V43.2215C44.5817 45.053 44.2163 46.8661 43.5071 48.5547C42.798 50.2434 41.7595 51.7738 40.4521 53.0565C39.1331 54.3712 37.5657 55.4104 35.8412 56.1134C34.1166 56.8165 32.2694 57.1693 30.4071 57.1515C26.6619 57.145 23.0674 55.6755 20.3901 53.0565C18.687 51.3394 17.4603 49.2085 16.8306 46.8734C16.201 44.5383 16.1901 42.0796 16.7991 39.739C17.3556 37.492 18.4791 35.427 20.0646 33.7435C21.247 32.2983 22.7375 31.1356 24.427 30.3405C26.1165 29.5454 27.9624 29.138 29.8296 29.148H32.6996V35.1085C32.7009 35.2816 32.6653 35.453 32.5951 35.6112C32.5249 35.7695 32.4218 35.911 32.2926 36.0262C32.1634 36.1415 32.0112 36.2279 31.846 36.2796C31.6808 36.3314 31.5065 36.3474 31.3346 36.3265C29.6683 35.826 27.8726 35.992 26.3263 36.7896C24.7799 37.5872 23.6036 38.954 23.0454 40.6019C22.4872 42.2499 22.5906 44.0502 23.3338 45.6234C24.0771 47.1966 25.4021 48.4197 27.0296 49.035C27.9746 49.5775 29.0316 49.896 30.1166 49.9695C30.9566 50.0045 31.7966 49.8995 32.5946 49.6475C33.9274 49.199 35.0867 48.3453 35.9107 47.2057C36.7346 46.0662 37.1819 44.6977 37.1901 43.2915V13.139C37.1897 12.9737 37.2218 12.8099 37.2848 12.6571C37.3477 12.5042 37.4402 12.3653 37.5569 12.2483C37.6736 12.1312 37.8123 12.0383 37.965 11.975C38.1177 11.9116 38.2813 11.879 38.4466 11.879H43.3991C43.7212 11.8785 44.0311 12.0018 44.2649 12.2232C44.4987 12.4446 44.6386 12.7474 44.6556 13.069C44.8368 14.6131 45.3275 16.1049 46.0985 17.455C46.8694 18.8051 47.9048 19.9858 49.1426 20.9265C50.816 22.1826 52.8034 22.9529 54.8861 23.1525C55.1981 23.1792 55.4898 23.318 55.7073 23.5432C55.9248 23.7684 56.0534 24.0648 56.0691 24.3775L56.0726 26.9955Z"
      fill="black"
    ></path>
  </svg>
);

export default HeroPage;

