
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state={
        likes:0,
        dislikes:0,
        total:0,

        handleLike:()=>{
          this.setState((prevState)=> ({
            likes: prevState.likes +1,
            total: prevState.total+1
          }));

        },
        handleDislike:()=>{
          this.setState((prevState)=> ({
            dislikes: prevState.dislikes + 1,
            total: prevState.total+1
          }));
        }
      

    };


  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
          This app manages the likes and Dislikes for you:::
    
        </p>

        <div className='rating-buttons'></div>
        <button className='like-button' onClick={this.state.handleLike}>
           Like({this.state.likes})
        </button>
        <button className='dislike-button' onClick={this.state.handleDislike}>
           Dislike({this.state.dislikes})
        </button>
        <div className='totalrating'>
          TotalRating: {this.state.total}
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
