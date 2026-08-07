import React from 'react'
import FoundationaBoard from '@/components/FoundationaBoard/FoundationaBoard';
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import { successStoriesData } from "@/lib/data/successStoriesData";

const Alumni = () => {
  return (
    <div className="wrapper" id="successStories">         
      <SuccessStories  data={successStoriesData} />         
    </div>
  );
}

export default Alumni