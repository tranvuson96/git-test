
import React from 'react'; 
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import Detail from './DishDetailComponent';


function RenderMenuItem({dish,onClick}){
    return (
       <> 
        <Card onClick={()=>onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
       </> 
    )
}



const Menu=(props)=>{
    const handleClick=(dish)=>{
        console.log(dish)
        return (
            <Detail dish={dish} />
        )
    }
    const menu = props.dishes.map((dish) => {
        return (
        <>
          <div  className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={handleClick} />
          </div>
        </>
        );
    });
    return (
      <>  
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
      </>  
    );
}
        


export default Menu;