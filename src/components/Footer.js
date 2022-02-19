import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
       <a href='https://github.com/Swatishree-Mahapatra' target='_blank'><BottomNavigationAction icon={<GitHub />} className={classes.root} /></a>
      <a href='https://www.linkedin.com/in/swatishree-mahapatra-a2251620a/' target='_blank'><BottomNavigationAction icon={<LinkedIn />} className={classes.root} /></a>
      <a href='https://www.instagram.com/sw.aaww.ti/' target='_blank'><BottomNavigationAction icon={<Instagram />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
