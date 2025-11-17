import React, { useReducer, useState } from "react";

const initialState = {
  comments: [],
  rating: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          { id: Date.now(), text: action.payload, likes: 0 },
        ],
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter((c) => c.id !== action.payload),
      };
    case "LIKE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((c) =>
          c.id === action.payload ? { ...c, likes: c.likes + 1 } : c
        ),
      };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
}

export default function BlogDetails() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [comment, setComment] = useState("");

  return (
    <div className="max-w-4xl mx-auto mt-32 bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header Image */}
      <div
        className="h-64 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
        }}
      ></div>

      <div className="p-8">
        {/* Restaurant Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          🍕 Italian Pasta House
        </h1>

        {/* Restaurant Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Discover the authentic taste of Italy! Our pasta is freshly made every
          day, cooked with love and served with rich homemade sauces. Perfect
          for family dinners or romantic nights.
        </p>

        {/* Rating System */}
        <div className="mb-8">
          <span className="block text-xl font-semibold mb-3">
            Rate this restaurant:
          </span>
          <div className="flex space-x-2 text-3xl cursor-pointer">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                onClick={() => dispatch({ type: "SET_RATING", payload: i + 1 })}
                className={`transition-transform transform hover:scale-125 ${
                  i < state.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>

          {/* Input */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={() => {
                if (comment.trim()) {
                  dispatch({ type: "ADD_COMMENT", payload: comment });
                  setComment("");
                }
              }}
              className="ml-3 bg-orange-500 text-white px-6 py-3 rounded-xl 
                         hover:bg-orange-600 transition"
            >
              Post
            </button>
          </div>

          {/* List */}
          {state.comments.length === 0 ? (
            <p className="text-gray-500 italic">No reviews yet 🍴</p>
          ) : (
            <div className="space-y-4">
              {state.comments.map((c) => (
                <div
                  key={c.id}
                  className="bg-gray-50 p-4 rounded-xl shadow-sm flex justify-between items-center"
                >
                  <span className="text-gray-700">{c.text}</span>
                  <div className="flex space-x-3 text-sm">
                    <button
                      onClick={() =>
                        dispatch({ type: "LIKE_COMMENT", payload: c.id })
                      }
                      className="text-blue-500 hover:underline"
                    >
                      Like ({c.likes})
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_COMMENT", payload: c.id })
                      }
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
