import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "./assets/colors"
const width = Dimensions.get('window').width;

export default function App() {

  const [value, setValue] = useState("0");

  function calculate(param) {
    switch (param) {
      case "0":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "0")
        }
        break;
      case "1":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "1")
        }
        else {
          setValue(value.slice(0, -1) + "1")
        }
        break;
      case "2":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "2")
        }
        else {
          setValue(value.slice(0, -1) + "2")
        }
        break;
      case "3":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "3")
        }
        else {
          setValue(value.slice(0, -1) + "3")
        }
        break;
      case "4":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "4")
        }
        else {
          setValue(value.slice(0, -1) + "4")
        }
        break;
      case "5":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "5")
        }
        else {
          setValue(value.slice(0, -1) + "5")
        }
        break;
      case "6":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "6")
        }
        else {
          setValue(value.slice(0, -1) + "6")
        }
        break;
      case "7":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "7")
        }
        else {
          setValue(value.slice(0, -1) + "7")
        }
        break;
      case "8":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "8")
        }
        else {
          setValue(value.slice(0, -1) + "8")
        }
        break;
      case "9":
        if (value.charAt(value.length - 1) !== "0") {
          setValue(value + "9")
        }
        else {
          setValue(value.slice(0, -1) + "9")
        }
        break;
      case ".":
        setValue(value + ".")
        break;
      case "=":
        setValue(eval(value))
        break;
      case "/":
        setValue(value + "/")
        break;
      case "x":
        setValue(value + "*")
        break;
      case "+":
        setValue(value + "+")
        break;
      case "-":
        setValue(value + "-")
        break;
      case "C":
        setValue("0");
        break;
      case "<--":
        setValue(value.slice(0, -1))
        break;
      case "π":
        setValue(value + "π")
        break;
      case "n!":
        setValue(eval(value + "!"))
        break;
      case "e":
        setValue(value + "e")
        break;
      case "(":
        if ((value.charAt(value.length - 1) === "+") ||
          (value.charAt(value.length - 1) === "-") ||
          (value.charAt(value.length - 1) === "/") ||
          (value.charAt(value.length - 1) === "*")) {
          setValue(value + "(")
        }
        break;
      default:// ")"
        if ((value.charAt(value.length - 1) !== "+") ||
          (value.charAt(value.length - 1) !== "-") ||
          (value.charAt(value.length - 1) !== "/") ||
          (value.charAt(value.length - 1) !== "*")) {
          setValue(value + ")")
        }
        break;

    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 70, textAlign: "right" }}>{value}</Text>

      <View style={{ flexDirection: "column", justifyContent: "flex-end", }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("π")}>
            <Text style={styles.buttonText}>π</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("e")}>
            <Text style={styles.buttonText}>e</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("C")}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => { calculate("<--"); }}>
            <Ionicons name={"caret-back-outline"} size={30} color={colors.white} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("n!")}>
            <Text style={styles.buttonText}>n!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("(")}>
            <Text style={styles.buttonText}>{"("}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate(")")}>
            <Text style={styles.buttonText}>{")"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("/")}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("x")}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("-")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("+")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.225, backgroundColor: "#444444" }]}
            onPress={() => calculate(".")}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: width * 0.47, backgroundColor: "blue" }]}
            onPress={() => calculate("=")}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  button: {
    height: width * 0.225,
    marginBottom: width * 0.02,
    backgroundColor: "#444444",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "600",
    color: '#fff'
  }
});
