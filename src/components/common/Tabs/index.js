import React from 'react'
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';
import {AppBar, Tab, Tabs} from '@material-ui/core'
import BlogCard from "../Card/BlogCard";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function SimpleTabs({classes}) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const blogNumber = new Array(10);
    return (
      <div className={classes.root}>
        <AppBar position="static" color='transparent'>
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="HOME" {...a11yProps(0)} />
            <Tab label="BLOG" {...a11yProps(1)} />
            <Tab label="ABOUT US" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Home
        </TabPanel>
        <TabPanel value={value} index={1}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          About Us
        </TabPanel>
      </div>
    );
  }

  export default withStyles(styles)(SimpleTabs);