import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { changeToggle } from "../utils/menuSlice";
import CommentContainer from "./CommentContainer";
import CommentLists from "./CommentLists";
import { commentData } from "../utils/commentData";
import LiveChat from "./LiveChat";

const VideoDetails = () => {
	const [searchParams] = useSearchParams();
	const params = searchParams.get("v");
	const dispatch = useDispatch();

	const comments = [
		{
			name: "Abhijith",
			comment: "hi this is my test comment",
			reply: [
				{
					name: "Abhijith",
					comment: "hi this is my test comment",
					reply: [
						{
							name: "Abhijith",
							comment: "hi this is my test comment",
							reply: [{}],
						},
					],
				},
			],
		},
	];
	useEffect(() => {
		dispatch(changeToggle());
	}, []);
	return (
		<div className="px-5 w-full">
			<div className="flex">
				<iframe
					width="980"
					height="600"
					src={"https://www.youtube.com/embed/" + params}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<LiveChat />
			</div>

			<CommentLists comments={commentData} />
		</div>
	);
};

export default VideoDetails;
