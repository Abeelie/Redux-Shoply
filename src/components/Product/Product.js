import React from "react";
import { Card, CardMedia, CardContent, Button } from "@material-ui/core";

const Product = (props) => {
    return(
        <div align="center" style={{marginTop: "70px"}}>
            <Card style={{width: "50%"}}>
              <CardMedia
                style={{objectFit: "scale-down"}}
                component="img"
                height="200"
                image={props.image}
                alt="product"
              />
                <CardContent>
                    <div id={props.id}>
                        <p>{props.name}</p>
                        <p>${props.price}</p>
                        <p>{props.description}</p>
                        <Button variant="contained"
                                fullWidth
                                color="primary"
                                type="submit"
                                onClick={() => props.addItem(
                                    props.id,
                                    props.image,
                                    props.name,
                                    props.price,
                                    props.description
                                )}
                                style={{
                                    display: !props.addItem ? "none" : "block",
                                    backgroundColor: "blue"
                                }}
                                >Add
                        </Button> 
                        <Button variant="contained"
                                fullWidth
                                color="primary"
                                type="submit"
                                onClick={() => props.deleteItem(
                                    props.id,
                                    props.price
                                )}
                                style={{
                                    display: !props.deleteItem ? "none" : "block",
                                    backgroundColor: "red", 
                                    marginTop: "20px"
                                }}
                                >Remove
                        </Button> 
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product