import React from "react";
import Button from "./Button";

const ButtonList = () => {
	const buttonItems = ["All", "News", "Music", "Mixes", "Lives", "Sports", "Mixes", "Songs", "Movies", "Business"];
	return (
		<div className="flex flex-wrap mx-2">
			{buttonItems?.map((item, index) => (
				<Button key={index} data={item} />
			))}
		</div>
	);
};

export default ButtonList;
