import React from "react";
import CommentsList from "./CommentsList";
const commentData = [
  {
    name: "Dwarak",
    text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
    replies: [],
  },
  {
    name: "Dwarak",
    text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
    replies: [
      {
        name: "Dwarak",
        text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
        replies: [],
      },
      {
        name: "Dwarak",
        text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
        replies: [
          {
            name: "Dwarak",
            text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
            replies: [
              {
                name: "Dwarak",
                text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
                replies: [
                  {
                    name: "Dwarak",
                    text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
                    replies: [
                      {
                        name: "Dwarak",
                        text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
                        replies: [
                          {
                            name: "Dwarak",
                            text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Dwarak",
                text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Dwarak",
    text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
    replies: [
      {
        name: "Dwarak",
        text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
        replies: [
          {
            name: "Dwarak",
            text: "If you are using Redux, ensure that dispatch is properly set up in your component and you're dispatching the cacheResults action correctly.",
            replies: [],
          },
        ],
      },
    ],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[56rem]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList data={commentData} />
    </div>
  );
};

export default CommentsContainer;
