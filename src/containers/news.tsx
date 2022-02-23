/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { News } from '../components';

const data = [
  {
    author: 'author 1',
    story_title:
      'Realize for React for Visualizing State ﬂow and component hierarchy',
    story_url: 'yandex.ru',
    created_at: '2022-02-22T19:13:46.000Z',
  },
  {
    author: 'author 2',
    story_title:
      'Realize for React for Visualizing State ﬂow and component hierarchy',
    story_url: 'lenta.ru',
    created_at: '2020-02-22T19:13:46.000Z',
  },
  {
    author: 'author 3',
    story_title:
      'Realize for React for Visualizing State ﬂow and component hierarchy',
    story_url: 'lenta.ru',
    created_at: '2020-02-22T19:13:46.000Z',
  },
  {
    author: 'author 4',
    story_title:
      'Realize for React for Visualizing State ﬂow and component hierarchy',
    story_url: 'lenta.ru',
    created_at: '2020-02-22T19:13:46.000Z',
  },
  {
    author: 'author 5',
    story_title:
      'Realize for React for Visualizing State ﬂow and component hierarchy',
    story_url: 'lenta.ru',
    created_at: '2020-02-22T19:13:46.000Z',
  },
];

const NewsContainer: FC = () => (
  <News>
    {data.map((item, index) => (
      <News.Item key={index}>
        <img src="images/iconmonstr-time-2.svg" alt="time" />
        <News.Item.SubTitle>{`${item.created_at} by ${item.author}`}</News.Item.SubTitle>
        <News.Item.Title>{item.story_title}</News.Item.Title>
        <img src="images/iconmonstr-favorite-2.svg" alt="heart" />
      </News.Item>
    ))}
  </News>
);

export default NewsContainer;
