import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader'
import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  dish : Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(public navCtrl: NavController,private dishservice : DishProvider, private promotionservice : PromotionProvider, private leaderservice : LeaderProvider,  
    @Inject('BaseURL') public BaseURL ) { }

  ngOnInit(){
    this.dishservice.getFeaturedDish().subscribe(
      dish => this.dish = dish,
      errMess => this.dishErrMess = <any>errMess);
    this.leaderservice.getFeaturedLeader().subscribe(
      leader => this.leader = leader,
      errMess => this.leaderErrMess = <any>errMess);
      this.promotionservice.getFeaturedPromotion().subscribe(
        promotion => this.promotion = promotion,
        errMess => this.promoErrMess = <any>errMess);
      
    
  }

}
