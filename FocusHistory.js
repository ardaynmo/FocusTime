import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet! </Text> ;

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    fontSize: 16,
    color: 'white',
    padding: 8,
  },
  title: {
    color: 'white',
    fontSize: 14,
    padding: 16,
    fontWeight: 'bold',
  },
});
