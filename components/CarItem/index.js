import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
	const { name, tagline, taglineCTA, image } = props;

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline} {""}
					<Text style={{ textDecorationLine: "underline" }}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonsContainer}>
				<StyledButton
					type="primary"
					content="Custom Order"
					onPress={() => {
						console.warn("Pressed 1");
					}}
				/>

				<StyledButton
					type="secondary"
					content="Existing Inventory"
					onPress={() => {
						console.warn("Pressed 2");
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
