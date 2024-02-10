import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import { useProducts } from "../context/productContext";

export default function ProductCard() {
  const { data } = useProducts();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} margin="50px">
      {data ? (
        <>
          {data.map((item) => (
            <GridItem w="100%" AlignItems="center" key={item.id}>
              <Card item={item} />
            </GridItem>
          ))}
        </>
      ) : null}
    </Grid>
  );
}
