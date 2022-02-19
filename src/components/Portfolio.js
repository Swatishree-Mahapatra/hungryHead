import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/gen.png";
import project2 from "../images/kaagaz.png";
import project3 from "../images/planthack.png";
import project4 from "../images/guideme.jpeg";
import project5 from "../images/emploify.png";
import project6 from "../images/enigma.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "GENoCADEMY",
    description: `GENoCADEMY is a one stop solution for the passionate, committed and enthusiastic 
    teachers whose motive is to guide and contribute for the overall academic upliftment of the students 
    especially for the under privileged and poor economic background. This platform aims to bridge 
    the gap among the mentors and students.`,
    image: project1,
  },
  {
    name: "Project Kaagaz ",
    description: `This project aims to develop the website of D361 club of NIT Rourkela. 
    D361 is an open platform for all students of NITR to showcase their literary or creative talents. 
    Following technologies and libraries are used for the development of this website

    Next.js | 
    TypeScript | 
    Emotion | 
    Vercel
`,
    image: project2,
  },
  {
    name: "Project- PlantHack",
    description: `PlantHack aims to solve environmental issues by incentivizing afforestation through a reward system.
    People are rewarded each time they plant a tree and after verification, they are awarded with credits.
    These credits gets them extra discount on the organic products available in our website.`,
    image: project3,
  },
  {
    name: "Project GuideME",
    description: `GuideMe is an Ed-Tech project that aims to make the best of e-learning resources more accessible.
    With GuideMe, students can organize all the resources recommended by peers and mentors. 
    They can also create courses with useful 
    links to videos, websites and books themselves so that they can also help the student community.
     `,
    image: project4,
  },
  {
    name: "Project Emploify",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project Enigma",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },

];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
