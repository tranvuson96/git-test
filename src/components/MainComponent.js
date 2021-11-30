import React from 'react';
import Menu from './MenuComponent';
import Details from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
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
        const HomePage=()=>{
            return (
                <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        return (
          <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
                <Redirect to="/home" />
                <Route exact path='/contactus' component={Contact} />
            </Switch>
            <Footer />
          </div>
        );
      }
}

export default Main;