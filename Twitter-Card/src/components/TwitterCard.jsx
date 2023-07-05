import React from "react";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";

const TwitterCard = ({
  name,
  handle,
  tweet,
  time,
  avatar,
  likes,
  retweets,
  comments,
}) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-start px-4 py-3 border-b border-gray-200">
        {/* Avatar */}
        <img className="h-12 w-12 rounded-full mr-3" src={avatar} alt={name} />
        <div className="flex flex-col">
          {/* Name and handle */}
          <div className="flex items-center">
            <div className="font-semibold">{name}</div>
            <div className="ml-2 text-gray-500">{handle}</div>
          </div>
          {/* Time and date */}
          <div className="text-sm text-gray-500">{time}</div>
        </div>
      </div>
      {/* Main tweet content */}
      <div className="px-4 py-3">
        <p className="text-gray-900 text-lg">{tweet}</p>
        {/* Likes comment and retweets */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-gray-500 hover:text-blue-500">
            <FaRegComment className="h-4 w-4 mr-1" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center text-gray-500 hover:text-green-500">
            <FaRetweet className="h-4 w-4 mr-1" />
            <span>{retweets}</span>
          </div>
          <div className="flex items-center text-gray-500 hover:text-red-500">
            <FaRegHeart className="h-4 w-4 mr-1" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;