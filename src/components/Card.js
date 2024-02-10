import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/cartSlice'; // Adjust the path to your cartSlice

export default function Cards({ item }) {
  const [show, setShow] = useState(false);
  const [shortDescription, setShortDescription] = useState(item.description);

  // Access dispatch function
  const dispatch = useDispatch();

  // Function to handle "Add to cart" button click
  const handleAddToCart = () => {
    // Dispatch addToCart action with the item payload
    dispatch(addToCart(item));
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={item.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          {item.description.length >= 100 ? (
            <Text>
              {show ? shortDescription : item.description.slice(0, 100)}
              <Link
                onClick={() => {
                  setShow(!show);
                }}
                style={{ color: "blue" }}
              >
                {" "}
                {show ? "Show less" : "Show More"}
              </Link>
            </Text>
          ) : (
            <Text>`{item.description}`</Text>
          )}

          <Text color="blue.600" fontSize="2xl">
            ₹ {item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
