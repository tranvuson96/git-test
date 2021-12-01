import React from 'react';
import Menu from './menu/MenuComponent';
import Details from './menu/DishDetailComponent';
import Header from './header/HeaderComponent';
import Footer from './footer/FooterComponent';
import Home from './home/HomeComponent';
import Contact from './contactus/ContactComponent';
import {Routes,Route,Navigate,useParams} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comment';


class Main extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
          dishes:DISHES,
          leaders:LEADERS,
          promotions: PROMOTIONS,
          comments:COMMENTS
        }
      }

      render() {
        const DishWithId=()=>{
            let id=useParams();
            return(
                <Details dish={this.state.dishes.filter((dish) => dish.id === parseInt(id.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(id.dishId,10))} />
            );
        }
        return (
          <div>
            <Header />
            <Routes>
                <Route path="/home" 
                    element={<Home 
                        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>} 
                        />
                <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>} />
                <Route path="/menu/:dishId" element={<DishWithId />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
          </div>
        );
      }
}

export default Main;