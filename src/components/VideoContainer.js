import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import ButtonList from "./ButtonList";
import { VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/yotubeData";
const VideoContainer = () => {
	const youtubeData = useSelector((state) => state.videos.videos);
	const dispatch = useDispatch();
	// const [youtubeData, setYoutubeData] = useState([]);

	useEffect(() => {
		getVideoList();
	}, []);

	const getVideoList = async () => {
		const data = await fetch(VIDEO_API);
		const json = await data.json();
		dispatch(addVideos(json?.items));
	};

	console.log(youtubeData);
	return (
		<div className="p-2 m-2">
			<ButtonList />
			<div className="flex flex-wrap">
				{youtubeData?.map((item, index) => (
					<Link
						to={
							"watch?v=" +
							(typeof item?.id === "string" ? item.id : item?.id?.videoId)
						}
						key={item?.id}
					>
						<VideoList video={item} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default VideoContainer;
