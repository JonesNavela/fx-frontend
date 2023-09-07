import React from 'react';
import styled from 'styled-components';
import esther from '../assets/esther.jpg'
import thembela from '../assets/thembela.jpg'
import shawn from '../assets/shawn.jpg'
import backgroundImage from '../assets/logoPng.png';

const reviewsData = [
  {
    id: 1,
    userImage: esther,
    userName: 'Esther',
    rating: 5,
    review: "I struggled with some of the more complex concepts such as how to properly over leverage, manage risks as well as moving average strategies before joining the Fx team. I've managed to achieve better risk management and i've developed my technique which has helped me minimise losses and increase profits.",
  },
  {
    id: 2,
    userImage: thembela,
    userName: 'Thembela',
    rating: 5,
    review: "A financial Company that does not only provide financial services but also provide mental health, Self consciousness/ Awareness & Personal Growth. These are the basic elements needed to manage and Multiply Wealth.",
  },
  {
    id: 3,
    userImage: shawn,
    userName: 'Shawn',
    rating: 5,
    review: "Before joining the Fx Blueprint team I had many questions on how and when to implement certain concept's techniques and strategies. When working with Fx team i started to develop a better understanding on certain aspects and how to use and develop different techniques to improve my trading skills.",
  },
];

const ReviewsContainer = styled.section`
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
          <Rating>
          <h3>{review.userName}</h3>
              {Array.from({ length: Math.floor(review.rating) }).map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
            </Rating>
            <p>{review.review}</p>
          </ReviewDetails>
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
};


export default Reviews;
