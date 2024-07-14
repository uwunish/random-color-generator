import React, { useState } from "react";

function App() {
	const [type, setType] = useState("hex");
	const [color, setColor] = useState("#000000");

	function handleGenerateRandomColor(currentType) {
		if (currentType === "hex") {
			let rangeOfColor = [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
			];
			let length = rangeOfColor.length;
			let redColor = "";
			let greenColor = "";
			let blueColor = "";
			redColor = redColor + rangeOfColor[randomColorUtility(length)];
			redColor = redColor + rangeOfColor[randomColorUtility(length)];
			greenColor = greenColor + rangeOfColor[randomColorUtility(length)];
			greenColor = greenColor + rangeOfColor[randomColorUtility(length)];
			blueColor = blueColor + rangeOfColor[randomColorUtility(length)];
			blueColor = blueColor + rangeOfColor[randomColorUtility(length)];
			let newColor = "#" + redColor + greenColor + blueColor;
			setColor(newColor);
		}

		if (currentType === "rgb") {
			let redColor = "";
			let greenColor = "";
			let blueColor = "";
			redColor = randomColorUtility(256);
			greenColor = randomColorUtility(256);
			blueColor = randomColorUtility(256);
			let newColor = `rgb(${redColor},${greenColor},${blueColor})`;
			setColor(newColor);
		}
	}

	function randomColorUtility(length) {
		return Math.floor(Math.random() * length);
	}

	function handleSetType(currentType) {
		setType(currentType);
		handleGenerateRandomColor(currentType);
	}

	return (
		<div
			style={{ width: "100vw", height: "100vh", backgroundColor: color }}
			className="container">
			<button onClick={() => handleSetType("hex")}>Hex Color</button>
			<button onClick={() => handleSetType("rgb")}>RGB Color</button>
			<button onClick={() => handleGenerateRandomColor(type)}>
				Generate Random Color
			</button>
			<div className="color-info-div">
				<h1>{type}</h1>
				<h2>{color}</h2>
			</div>
		</div>
	);
}

export default App;
