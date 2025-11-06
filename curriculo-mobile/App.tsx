import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Card, Text } from "react-native-paper";

export default function App() {
  const image = "https://avatars.githubusercontent.com/u/141872775?v=4";

  return (
    <SafeAreaProvider style={styles.containerSafeArea}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.containerContent}>
            <Text style={styles.nameText} variant="titleLarge">
              Vynicius Henrique da Silva Almeida
            </Text>
            <Card.Content>
              <Avatar.Image size={170} source={{ uri: image }} />
            </Card.Content>
            <View>
              <Text>Siob-PE</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    backgroundColor: "#284a88",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  containerSafeArea: {
    backgroundColor: "#000",
  },

  nameText: {
    color: "#fff",
  },
});
