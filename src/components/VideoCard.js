const VideoCard = ({info}) => {
    
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className="p-2 m-2 w-60">
            <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
            <ul className="p-1">
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export const VideoCardBorder = ({ info }) => {
    return (
        <div className="border border-blue-500">
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;