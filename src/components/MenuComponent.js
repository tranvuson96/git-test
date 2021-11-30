import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

function RenderMenu({dish,onClick}){
        return (
            <Card key={dish.id}
                onClick={()=>onClick(dish.id)}
            >
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
        );
    
}

const Menu=(props)=>{
    const menuItems=props.dishes.map((dish)=>{
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenu dish={dish} onClick={props.onClick} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {menuItems}
            </div>
        </div>
    )
}

export default Menu;