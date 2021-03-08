import {Typography,Card,CardActionArea,CardMedia,CardContent,CardActions} from "@material-ui/core"
const Item = ({image,title,description,rate,price}) => {
    return ( <Card >
        <CardActionArea>
          <CardMedia
            image={image}
            title={title}
            style={{height:300}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography   color="primary">
            Rate: {rate} Stars
          </Typography>
          <Typography  color="primary">
           Price: {price} $
          </Typography>
        </CardActions>
      </Card> );
}
 
export default Item;