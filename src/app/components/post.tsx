import Image from 'next/image';

import post_image from '../../images/instagram_placeholder.jpg';
import LikeButton from './buttons/LikeButton';
import CommentButton from './buttons/CommentButton';
import { Book, Bookmark } from 'lucide-react';
import BookmarkButton from './buttons/BookmarkButton';

export default function Post() {
  return (
    <div className="bg-white border border-gray-300 max-w-md mx-auto mb-6 rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
          <span className="font-semibold text-sm">user_name</span>
        </div>
      </div>

      <div className="w-full">
            <Image
                width={500}
                height={500}
                quality={1}
                src={post_image}
                alt="Post content"
                className="w-full"
            />
      </div>

      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <LikeButton />
          <CommentButton />
        </div>
       <BookmarkButton />
      </div>

      <div className="px-4 text-sm font-semibold mb-1">362 likes</div>

      <div className="px-4 pb-4 text-sm">
        <span className="font-semibold">your title here </span>
        <span className="text-blue-500">#hashtag</span>{' '}
        <span className="text-blue-500">#loremipsum</span>
      </div>
    </div>
  );
}