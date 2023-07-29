import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const TotalSeconds = 300;

const Timer = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(TotalSeconds);

  useEffect(() => {
    let interval = null;
    if (remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remainingSeconds]);

  const getProgressBarWidth = () => {
    return (remainingSeconds / TotalSeconds) * 100 + "%";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{remainingSeconds}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: getProgressBarWidth() }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  timeText: {
    fontSize: 36,
    fontWeight: "bold",
    color:'#E74C3C'
  },
  progressBar: {
    width: "80%",
    height: 10,
    backgroundColor: "#E8ECF0",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E74C3C",
    borderRadius: 10,
  },
});

export default Timer;
