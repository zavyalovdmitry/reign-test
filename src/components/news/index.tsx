/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, Item, SubTitle, Title, Info, Like } from './styles/news';

interface INewsSubTitle extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface INewsTitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface INewsInfo extends React.HTMLAttributes<HTMLDivElement> {
  SubTitle?: INewsSubTitle;
  Title?: INewsTitle;
  children: React.ReactNode;
}

interface INewsLike extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface INewsItem extends React.HTMLAttributes<HTMLDivElement> {
  NewsInfo?: INewsInfo;
  NewsLike?: INewsLike;
  children: React.ReactNode;
}

interface INews extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const NewsInfo = ({ children, ...restProps }: INewsInfo) => (
  <Info {...restProps}>{children}</Info>
);

const NewsLike = ({ children, ...restProps }: INewsInfo) => (
  <Like {...restProps}>{children}</Like>
);

const News = ({ children, ...restProps }: INews) => (
  <Container {...restProps}>{children}</Container>
);

const NewsItem = ({ children, ...restProps }: INewsItem) => (
  <Item {...restProps}>{children}</Item>
);

const NewsItemSubTitle = ({ children, ...restProps }: INewsSubTitle) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

const NewsItemTitle = ({ children, ...restProps }: INewsTitle) => (
  <Title {...restProps}>{children}</Title>
);

NewsInfo.SubTitle = NewsItemSubTitle;
NewsInfo.Title = NewsItemTitle;
NewsItem.Info = NewsInfo;
NewsItem.Like = NewsLike;
News.Item = NewsItem;

export default News;
