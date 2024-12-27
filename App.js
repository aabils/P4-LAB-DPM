import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [gameMessage, setGameMessage] = useState("");

  const teamA = "Tim A";
  const teamB = "Tim B";

  const incrementScore = (team) => {
    if (scoreA === 10 || scoreB === 10) {
      setGameMessage("Pertandingan telah selesai! Tekan reset untuk memulai ulang.");
      return;
    }

    if (team === "A") {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        setGameMessage(`${teamA} memenangkan pertandingan! Pertandingan selesai.`);
      }
    } else if (team === "B") {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        setGameMessage(`${teamB} memenangkan pertandingan! Pertandingan selesai.`);
      }
    }
  };

  const decrementScore = (team) => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setGameMessage(""); // Hapus pesan setelah reset
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        <Text style={styles.title}>Pengaturan Skor Pertandingan Futsal</Text>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => incrementScore("A")} />
            <Button title="-" onPress={() => decrementScore("A")} />
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={() => incrementScore("B")} />
            <Button title="-" onPress={() => decrementScore("B")} />
          </View>
        </View>

        {gameMessage ? <Text style={styles.gameMessage}>{gameMessage}</Text> : null}

        <View style={styles.resetContainer}>
          <Button title="Reset Pertandingan" onPress={resetScores} color="#FF0000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    background: "linear-gradient(180deg, #D3D3D3, #808080)", // Simulasi gradasi
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  teamContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
  resetContainer: {
    marginTop: 30,
  },
  gameMessage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000",
    marginTop: 20,
    textAlign: "center",
  },
});

export default App;
