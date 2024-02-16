import React from "react";
import { Breadcrumbs , Link , Typography } from '@mui/material';


export default function Breadcrumb(){
    return (
      <div>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary" fontWeight="600" >Color</Typography>
      </Breadcrumbs>
      <h3> Color</h3>
      </div>
    )
}