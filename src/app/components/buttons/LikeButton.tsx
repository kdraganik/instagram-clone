"use client";

import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        console.log('Like button clicked');
        setIsLiked(!isLiked);
    };

    return (
        <div onClick={handleClick} >
            <HeartIcon 
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                fill={isLiked ? 'black' : 'none'}
            />
        </div>
    )
}