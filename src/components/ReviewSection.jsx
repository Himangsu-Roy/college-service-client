// import React from "react";

// const ReviewSection = ({ reviews }) => {
    
//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Reviews and Feedback</h2>
//       {reviews.map((review) => (
//         <div key={review.id} className="bg-white rounded-lg shadow p-4 mb-4">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-teal-600 font-medium">{review.user}</span>
//             <span className="text-gray-500 text-sm">{review.date}</span>
//           </div>
//           <p>{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewSection;




import React from "react";

const ReviewSection = ({ reviews }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Reviews and Feedback</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="mb-4">
                <div className="flex items-center">
                  <p className="text-gray-600 mr-2">
                    {review.user} - {review.date}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M10 .293l2.165 4.26 4.844.704c.474.069.665.646.31.973l-3.508 3.417.828 4.826c.064.374-.307.66-.645.494L10 13.789l-4.495 2.366c-.339.176-.71-.12-.645-.494l.828-4.826L2.681 6.23c-.354-.327-.163-.904.31-.973l4.844-.704L10 .293zm.69 8.854a.5.5 0 00-.368 0l-3.364 1.775 2.654 2.587a.5.5 0 00.378 0l2.653-2.587-3.353-1.775zM7.69 6.563c-.314.132-.51.453-.448.78l.468 2.722-2.42-1.274a.5.5 0 00-.445 0l-2.421 1.274.468-2.722c.062-.328-.134-.649-.448-.78L1.415 5.5l2.69-.391a.5.5 0 00.288-.274L6.11 2.775l1.195 2.45a.5.5 0 00.289.274l2.69.392-2.07 2.062z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
