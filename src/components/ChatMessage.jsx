import React from "react";

const ChatMessage = ({name, message}) => {
	return (
			<div className="flex items-center shadow-md my-3">
				<img
					className="h-8 flex items-center"
					src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
					alt="user-icon"
				/>
				<span className="font-bold text-sm mx-2">{name}</span>
				<span className="text-sm">{message}</span>
			</div>
	);
};

export default ChatMessage;
