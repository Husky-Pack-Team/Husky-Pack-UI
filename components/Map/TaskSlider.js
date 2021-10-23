import * as React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

function TaskSlider({ tasks }) {
  var demoData = {
      activeIndex:0,
      carouselItems: [
      {
          title:"Item 1",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      },
    ]
  }

  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }  

  return (
    <Carousel
      ref={(c) => { this._carousel = c; }}
      data={demoData}
      renderItem={this._renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
}

export default TaskSlider;