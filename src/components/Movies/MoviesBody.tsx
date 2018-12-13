import * as React from 'react'
import { Component } from 'react';
import { StyleSheet, View, FlatList, ScrollView, Text } from "react-native";
import MoviesList from './MoviesList';

const MoreTitle: any = {
  in_theaters: '正在热映',
  top250: '豆瓣 Top 250',
  coming_soon: '即将上映'
}

interface IProps {
  navigate: any;
  inTheaters: any;
  top250: any;
  comingSoon: any;
}

export default class HomeBody extends Component<IProps> {
  renderMoviseItem = ({ item }: any) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
    </View>
  );

  gotoMore = (moreType: any) => {
    const { navigate } = this.props;
    navigate('MoreMovies', { title: MoreTitle[moreType], moreType });
  }

  render() {
    const { inTheaters, top250, comingSoon } = this.props;
    const { subjects: inTheatersList = [] } = inTheaters;
    const { subjects: top250List = [] } = top250;
    const { subjects: comingSoonList = [] } = comingSoon;
    return (
      <ScrollView
        style={styles.container}
      >
        <MoviesList
          title={inTheaters.title}
          movies={inTheatersList}
          moreType="in_theaters"
          gotoMore={this.gotoMore}
        />
        <MoviesList
          title={top250.title}
          movies={top250List}
          moreType="top250"
          gotoMore={this.gotoMore}
        />
        <MoviesList
          title={comingSoon.title}
          movies={comingSoonList}
          moreType="coming_soon"
          gotoMore={this.gotoMore}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#ffffff'
  }
});