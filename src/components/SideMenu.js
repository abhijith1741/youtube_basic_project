import React from "react";
import { useSelector } from "react-redux";

const SideMenu = () => {
	const menuStatus = useSelector((state) => state?.menu?.menuCheck);
	if (!menuStatus) {
		return null;
	}
	return (
		<div className="shadow-xl w-48 p-2 m-2">
			<h1 className="text-bold my-1">Subscriptions</h1>
			<ul>
				<li>Marvel</li>
				<li>Dc</li>
				<li>NDTV</li>
				<li>BBC</li>
			</ul>
			<h1 className="text-bold my-1">Explore</h1>
			<ul>
				<li>Trending</li>
				<li>Shopping</li>
				<li>Music</li>
				<li>Films</li>
			</ul>
			<h1 className="text-bold my-1 ">Activity</h1>
			<ul>
				<li>Watch Later</li>
				<li>Newly Added</li>
				<li>Downloads</li>
				<li>Your Clips</li>
			</ul>
		</div>
	);
};

export default SideMenu;
