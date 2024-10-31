import React from "react";
import Comment from "./Comment";

const CommentLists = ({ comments }) => {
	return comments?.map((item, index) => (
		<div>
			<Comment key={index} data={item} />

			<div className="pl-5 ml-5 border border-l-black">
				<CommentLists comments={item?.replies}/>
			</div>
		</div>
	));
};

export default CommentLists;
