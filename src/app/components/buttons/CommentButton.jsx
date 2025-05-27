"use client";

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function CommentButton() {
    const handleClick = () => {
        console.log('Comment button clicked');
    };

    return (
        <div onClick={handleClick} >
            <MessageCircle
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            />
        </div>
    )
}