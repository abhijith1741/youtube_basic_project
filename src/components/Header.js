import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import axios from "axios";
import { API_KEY, SEARCH_API, SEARCH_RESULTS } from "../utils/constants";
import { addSearch } from "../utils/searchSlice";
import { addVideos } from "../utils/yotubeData";

const Header = () => {
	const dispatch = useDispatch();
	const cachedSuggestion = useSelector((state) => state.search);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchData, setSearchData] = useState([]);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (cachedSuggestion[searchQuery]) {
				setSearchData(cachedSuggestion[searchQuery]);
			} else {
				getSearchResults();
			}
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchResults = async () => {
		const data = await fetch(SEARCH_API + searchQuery);
		const json = await data.json();
		setSearchData(json[1]);
		dispatch(addSearch({ [searchQuery]: json[1] }));
	};
	const handleToggleMenu = () => {
		dispatch(toggleMenu());
	};

	const handleNavigate = () => {
		window.location.href = "/";
	};
	const handleSearchResults = async(data) => {
		const response = (await fetch(SEARCH_RESULTS + data + '&regionCode=IN&key=' + API_KEY))
		const json = await response.json();
		dispatch(addVideos(json?.items))
		setSearchQuery("")
	}
	return (
		<div className="grid grid-flow-col shadow-lg p-4 fixed top-0 left-0 right-0 bg-white z-50">
			<div className="col-span-1 flex items-center">
				<img
					className="h-8"
					src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
					alt="menu"
					onClick={handleToggleMenu}
				/>
				<img
					onClick={handleNavigate}
					className="h-14 mx-2"
					src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
					alt="logo"
				/>
			</div>
			<div className="col-span-10 mx-2 flex flex-col">
				<div className="flex items-center">
					<input
						type="text"
						placeholder="Search"
						className="w-1/2 h-10 border border-gray-400 px-4 rounded-l-xl"
						onChange={(e) => setSearchQuery(e.target.value)}
						value={searchQuery}
					/>
					<img
						className="h-10 border border-gray-400 rounded-r-xl inline-block"
						src="https://www.citypng.com/public/uploads/preview/white-search-icon-button-png-img-735811696240431a0p3ex0i2v.png"
						alt="search-icon"
					/>
				</div>
				{searchData && (
					<div className="w-[570px] bg-white top-16 fixed ">
						<ul className="p-2">
							{searchData?.map((item) => (
								<li className="p-2 shadow-sm" onClick={() =>handleSearchResults(item)}>🔍{item}</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1">
				<img
					className="h-12 flex items-center"
					src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
					alt="user-icon"
				/>
			</div>
		</div>
	);
};

export default Header;
