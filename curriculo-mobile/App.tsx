import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Card, Text } from "react-native-paper";

export default function App() {
  const image = "https://avatars.githubusercontent.com/u/141872775?v=4";

  return (
    <SafeAreaProvider style={{ backgroundColor: "#bdbdbd" }}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.containerContent}>
            <Text style={styles.nameText} variant="titleLarge">
              Vynicius Henrique da Silva Almeida
            </Text>
            <Avatar.Image
              size={170}
              source={{ uri: image }}
              style={{ marginBottom: 20 }}
            />
            <Card.Content style={styles.viewExperience}>
              <View>
                <Text variant="titleMedium" style={styles.siobStyle}>
                  Siob-PE
                </Text>
                <Text>
                  Um PWA para gerenciamento de ocorrências do CBMPE, desenvolvi
                  esse aplicativo no projeto integrador da faculdade
                </Text>
              </View>

              <View style={{marginBottom: 20}}>
                <Text variant="titleMedium" style={styles.libraryStyle}>
                  Library-API
                </Text>
                <Text>
                  Um projeto pessoal onde eu desenvolvi uma API, feita com Java
                  + Spring, que faz a tratativa de dados para uma biblioteca
                  fictícia.
                </Text>
              </View>
            </Card.Content>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: "100%",
  },

  nameText: {
    color: "#000000",
    marginBottom: 20,
  },

  siobStyle: {
    marginVertical: 20,
  },

  libraryStyle: {
    marginVertical: 20,
  },

  viewExperience: {
    width: 385,
    backgroundColor: "#636363",
    borderRadius: 10,
  },
});
