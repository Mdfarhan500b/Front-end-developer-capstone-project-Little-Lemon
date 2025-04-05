import React from "react";
import sara from "../images/sara.png"; // Ensure the correct file extension
import john from "../images/john.png"; // Add more images as needed
import emily from "../images/emily.png";

const reviews = [
  {
    id: 1,
    name: "Sara",
    rating: 6,
    image: sara,
    review: "The food was absolutely amazing! Highly recommend the Greek Salad.",
  },
  {
    id: 2,
    name: "John",
    rating: 5,
    image: john,
    review: "Great atmosphere and friendly staff. The Tiramisu was delicious!",
  },
  {
    id: 3,
    name: "Emily",
    rating: 4,
    image: emily,
    review: "Loved the Bruschetta! Will definitely come back again.",
  },
];

function CustomerReview() {
  return (
    <div className="review-container">
      <h1 id="review-title">What Our Customers Say!</h1>
      <div className="box-container">
        {reviews.map((review) => (
          <div key={review.id} className="customer-box">
            <span id="star">{"⭐".repeat(review.rating)}</span>
            <span>
              <img src={review.image} alt={`${review.name}'s review`} />
            </span>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReview;