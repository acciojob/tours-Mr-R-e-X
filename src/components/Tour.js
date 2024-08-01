import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from "@material-ui/core";
const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const openDetails = () => setReadMore(!readMore);
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "15px" }}>
      <CardActionArea>
        <CardMedia component="img" height="194" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" id={"tour-item-para-" + id}>
            {readMore ? info : `${info.substring(0, 200)}...`}{" "}
            <Button
              id={"see-more" + id}
              size="small"
              color="primary"
              onClick={() => {
                openDetails();
              }}
            >
              {" "}
              {readMore ? "Show Less" : "Read More"}
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          id={"delete-btn-" + id}
          size="small"
          color="secondary"
          onClick={() => removeTour(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tour;
