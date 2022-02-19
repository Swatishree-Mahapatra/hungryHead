import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/swati.jpeg";
import MenuIcon from "@material-ui/icons/Menu";

import Footer from "../components/Footer";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  btn: {
    color: "tomato",
  },
  link: {
    textDecoration: "none",
  },
  rightlist: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Photos", listPath: "/photos" },
  
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Swatishree Mahapatra" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Link to="/" className={classes.link}>
              <Typography variant="h5" className={classes.title}>
                Swatishree
              </Typography>
            </Link>

            <ul className={classes.rightlist}>
              <Link to="/portfolio" className={classes.link}>
                <Button className={classes.btn}>Projects</Button>
              </Link>
              <Link to="/resume" className={classes.link}>
                <Button className={classes.btn}>Experience</Button>
              </Link>
              
              <a
                href="https://drive.google.com/file/d/1bIEGoWbn5AMJxrc7J0xfRu7DdxyIr0-T/view?usp=sharing"
                target="blank"
                className={classes.link}
              >
                <Button className={classes.btn}>Resume</Button>
              </a>

              <IconButton
                onClick={() => setOpen(true)}
                className={classes.arrow}
              >
                <MenuIcon />
              </IconButton>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
