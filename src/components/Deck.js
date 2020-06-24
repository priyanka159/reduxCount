import React, { Component } from 'react';
import { View, Text ,Dimensions,Animated,PanResponder} from 'react-native';
const SCREEN_WIDTH=Dimensions.get('window').width;
const SWIPE_THRESHOLD=0.25*SCREEN_WIDTH;
class Deck extends Component {
  constructor(props) {
    super(props);

    const position=new Animated.ValueXY();
    const panResponder=PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onPanResponderMove:(event,gesture)=>{
            position.setValue({x:gesture.dx,y:gesture.dy})
        },
        onPanResponderRelease:(event,gesture)=>{
        if(gesture.dx>SWIPE_THRESHOLD){
          this.forceSwipeRight();
         // console.log('swipe right')
        }
        else if(gesture.dx<-SWIPE_THRESHOLD){
         this.forceSwipeLeft()
         // console.log('swipe left!!')
        }
        else{
          this.resetPosition();
        }
      }
    })
    this.state = {panResponder,position};
    
  }
  resetPosition(){
    Animated.spring(this.state.position,{
      toValue:{x:0,y:0}
    }).start();
  }
  forceSwipeRight(){
    Animated.timing(this.state.position,{
      toValue:{x:SCREEN_WIDTH,y:0},
      duration:250//slowly
    }).start(()=>this.onSwipeCompleteRight());
  }
  onSwipeCompleteRight(){
    const item=this.state.props.data[this.state.index]
  }
  forceSwipeLeft(){
    Animated.timing(this.state.position,{
      toValue:{x:-SCREEN_WIDTH,y:0},
      duration:250//slowly
    }).start();
  }
  getCardStyle(){
      const {position}=this.state
      const rotate=position.x.interpolate({
          inputRange:[-SCREEN_WIDTH*1.5,0,SCREEN_WIDTH*1.5],
          outputRange:['-120deg','0deg','120deg']
      })
      return{
          ...this.state.position.getLayout(),
          transform:[{rotate}]
        //  transform:[{rotate:'45deg'}]
      }
  }
renderCards(){
    return this.props.data.map((item,index)=>{
      if(index===0){
          return(
              <Animated.View
              key={item.id}
              style={this.getCardStyle()}
            //  style={this.state.position.getLayout()}
              {...this.state.panResponder.panHandlers}
              >
                  {this.props.renderCard(item)}
              </Animated.View>
          )
      }
        return this.props.renderCard(item)
    })
}
  render() {
    return (
      <View>
        {this.renderCards()}
        </View>
    );
  }
}

export default Deck;
