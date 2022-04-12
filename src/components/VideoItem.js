import React from "react";
import "./VideoItem.css";

const VideoList = ({ video, onVideoSelect }) => {
	return (
		<div className="item video-item" onClick={() => onVideoSelect(video)}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<h1>{video.snippet.title}</h1>
			</div>
		</div>
	);
};

export default VideoList;
