/* eslint-disable prettier/prettier */
import React, { FC, useContext, useEffect, useState } from 'react';
import { News } from '../components';
import { Context } from '../context';
import { API } from '../lib';
import { NO_DATA_MESSAGE, NO_LIKES_MESSAGE } from '../constants';

const NewsContainer: FC = () => {
  const context = useContext(Context);
  const [news, setNews] = useState<any[]>([]);
  const [likes, setLikes] = useState<string[]>([]);
  const [message, setMessage] = useState([NO_LIKES_MESSAGE, NO_DATA_MESSAGE]);

  const fetchNews = () => {
    if (context) {
      fetch(`${API}query=${context.filter}&page=${context.page}`)
        .then((response) => response.json())
        .then((responseData) => {
          const newsData = responseData;
          setNews(newsData.hits);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('likes')) {
      setLikes(JSON.parse(localStorage.getItem('likes') as string));
    } else {
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }, []);

  useEffect(() => {
    setNews([]);
    fetchNews();
    setMessage([NO_LIKES_MESSAGE, NO_DATA_MESSAGE]); 
  }, [context?.filter, context?.page]);

  useEffect(() => {
    setMessage([NO_LIKES_MESSAGE, NO_DATA_MESSAGE]);
  }, [context?.switch]);

  const setLikesHandler = (objectID: string) => {
    if (likes.indexOf(objectID) < 0 || likes.length === 0) {
      setLikes([...likes, objectID]);
      localStorage.setItem('likes', JSON.stringify([...likes, objectID]));
    } else {
      const arr = Object.assign([], likes);
      arr.splice(likes.indexOf(objectID), 1);
      setLikes(arr);
      localStorage.setItem('likes', JSON.stringify(arr));
      setMessage([NO_LIKES_MESSAGE, NO_DATA_MESSAGE]);
    }
  };

  const timeDiff = (date: string) => {
    const msecLocal = Date.parse(new Date(date).toString());
    const msecToday = Date.parse(new Date().toString());
    const diff = (msecToday - msecLocal) / 1000 / 60 / 60;
    let result = '';

    switch (true) {
      case diff < 0.5:
        result = 'just now';
        break;
      case diff >= 0.5 && diff < 1.5:
        result = '1 hour ago';
        break;
      case diff >= 1.5 && diff < 24:
        result = `${Math.floor(diff)} hours ago`;
        break;
      case diff >= 24 && diff < 36:
        result = `1 day ago`;
        break;
      case diff >= 36:
        result = `${Math.floor(diff / 24)} days ago`;
        break;
      default:
        result = '';
    }

    return result;
  };

  return news.length > 0 && context ? (
    <>
      <News className={context.switch === 'My faves' ? 'nofilter' : ''}>
        {news.map((item, index) =>
          item.story_url &&
          item.created_at &&
          item.story_title &&
          item.author &&
          ((context.switch === 'My faves' &&
            likes.indexOf(item.objectID) >= 0) ||
            context.switch === 'All') ? (
            message[0].length > 0 ? setMessage(['', '']) : null,
            <News.Item key={index}>
              <News.Item.Info onClick={() => window.open(item.story_url)}>
                <img src="images/iconmonstr-time-2.svg" alt="time" />
                <News.Item.Info.SubTitle>
                  {`${timeDiff(item.created_at)} by ${item.author}`}
                </News.Item.Info.SubTitle>
                <News.Item.Info.Title>{item.story_title}</News.Item.Info.Title>
              </News.Item.Info>

              <News.Item.Like onClick={() => setLikesHandler(item.objectID)}>
                <img
                src={
                  likes.indexOf(item.objectID) < 0 ?
                  'images/iconmonstr-favorite-2.svg' :
                  'images/iconmonstr-favorite-3.svg'
                }
                alt="heart"
              />
              </News.Item.Like>
            </News.Item>
          ) : null
        )}
      </News>
      <p>{context.switch === 'My faves' ? message[0] : message[1]}</p>
    </>
  ) : (
    <p>loading...</p>
  );
};

export default NewsContainer;
