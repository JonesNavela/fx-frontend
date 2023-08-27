import React from 'react';
import styled from 'styled-components';
import demoImage from '../assets/founder2.jpg'
import backgroundImage from '../assets/logoPng.png';

const reviewsData = [
  {
    id: 1,
    userImage: demoImage,
    userName: 'John Test',
    rating: 5,
    review: "Great experience! The service was top-notch.",
  },
  {
    id: 2,
    userImage: demoImage,
    userName: 'John Test',
    rating: 5,
    review: "Great experience! The service was top-notch.",
  },
  {
    id: 3,
    userImage: demoImage,
    userName: 'John Test',
    rating: 5,
    review: "Great experience! The service was top-notch.",
  },
];

const ReviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  background-color: none;
  flex-direction: column;
  align-items: center;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.9
`;

const ReviewCard = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 8px;
`;

const UserImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReviewDetails = styled.div`
  flex: 1;
`;

const Rating = styled.div`
  margin-top: 10px;

  .star {
    color: #ffac33;
    font-size: 18px;
  }
`;

const HeaderText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

const Reviews = () => {
  return (
    <ReviewsContainer>
      <TextWrapper>
        <HeaderText>REVIEWS</HeaderText>
      </TextWrapper>

      {reviewsData.map((review) => (
        <ReviewCard key={review.id}>
          <UserImage>
            <img src={review.userImage} alt={review.userName} />
          </UserImage>
          <ReviewDetails>
            <h3>{review.userName}</h3>
            <p>{review.review}</p>
            <Rating>
              {Array.from({ length: Math.floor(review.rating) }).map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
            </Rating>
          </ReviewDetails>
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
};


export default Reviews;
