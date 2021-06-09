import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

const ModelX = require("../../assets/images/ModelX.jpeg");

const CarItem = (props) => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground source={ModelX} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>Model X</Text>
				<Text style={styles.subtitle}>Starting at $69,420</Text>
			</View>
		</View>
	);
};

export default CarItem;
