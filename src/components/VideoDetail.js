import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div className="selected-video">Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="selected-video">
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h1>{video.snippet.title}</h1>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
