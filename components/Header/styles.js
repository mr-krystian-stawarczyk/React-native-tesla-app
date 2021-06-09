import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 50,
		zIndex: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: "contain",
		marginLeft: 20,
	},
	menu: {
		width: 25,
		height: 25,
		resizeMode: "contain",
	},
});

export default styles;
