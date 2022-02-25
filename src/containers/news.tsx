/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext, useEffect, useState } from 'react';
import { News } from '../components';
import { Context } from '../context';
import { API } from '../lib';

const NewsContainer: FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const context = useContext(Context);

  const fetchNews = () => {
    fetch(
      `${API}query=${context?.filter}&page=${context?.page}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        const newsData = responseData;
        // dispatch(fetchVehiclesSuccess(vehicles));
        // console.log(newsData.hits);
        setNews(newsData.hits);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    console.log(context?.filter);
    setNews([]);
    fetchNews();
  }, [context?.filter, context?.page]);

  return news.length > 0 ? (
    <News>
      {news.map((item, index) => (
        (item.story_url && item.created_at && item.story_title && item.author) ? (
          <News.Item key={index} onClick={() => window.open(item.story_url)}>
          <img src="images/iconmonstr-time-2.svg" alt="time" />
          <News.Item.SubTitle>{`${item.created_at} by ${item.author}`}</News.Item.SubTitle>
          <News.Item.Title>{item.story_title}</News.Item.Title>
          <img src="images/iconmonstr-favorite-2.svg" alt="heart" />
          </News.Item>
        ) : null
      ))}
    </News>
  ) : <p>loading...</p>;
};

export default NewsContainer;

