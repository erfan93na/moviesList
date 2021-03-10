import {StarRate, StarRateOutlined} from "@material-ui/icons"
import {Typography,Card,CardActionArea,CardMedia,CardContent,CardActions,Grid} from "@material-ui/core"
const Item = ({image,title,description,rate,price}) => {
    return (<Grid xs={3} item><Card >
        <CardActionArea>
          <CardMedia
            image={image}
            title={title}
            style={{height:500}}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
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
      </Card></Grid>  );
}
 
export default Item;