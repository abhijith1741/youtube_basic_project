import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/liveChatSlice";
import { generateRandomName, generateRandomText } from "../utils/helpers";

const LiveChat = () => {
	const chat = useSelector((state) => state.chat.values);
	const dispatch = useDispatch();
    const [liveComment, setLiveComment] = useState("")
	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(addChat(
                { name: generateRandomName(), message: generateRandomText(20) }
            ));
		}, 3000);
	}, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat({
            name:"Abhijith",
            message: liveComment
        }))
        setLiveComment("");
    }
	return (
        <>
		<div className="mx-2 p-2 border border-black w-[28%] h-[600px] overflow-y-hidden overflow-y-scroll flex flex-col-reverse rounded-md">
        <form className="p-2 border border-gray-200 rounded-md" onSubmit={handleSubmit}>
            <input type="text" className="border-none outline-none pl-2" placeholder="Enter Your Message" value={liveComment} onChange={(e)=>setLiveComment(e.target.value)}/>
            <button className="bg-green-200 p-2" type="submit">Comment</button>
        </form>
			{chat?.map((item) => (
				<ChatMessage name={item?.name} message={item?.message} />
			))}
		</div>
        </>
	);
};

export default LiveChat;
