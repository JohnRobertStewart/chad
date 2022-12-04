import React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import { Box } from '@mui/material';
import { grid } from '@mui/system';
import "./App.css";




const Content = () => { 
  console.log("hi");

return (
<body>
<Box sx={{ position: 'absolute', justify: 'center',  minWidth: 400, maxWidth:400, minHeight: 500, maxHeight: 500}}>

<CardMedia  
component = "iframe" 
src="https://player.twitch.tv/?channel=Chadlywick&parent=localhost"
title = 'Chad stream'
controls/>

</Box>
</body>
  )
}

export default Content

