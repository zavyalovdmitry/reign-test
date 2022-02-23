/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, Item, SubTitle, Title } from './styles/news';

interface INewsSubTitle extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface INewsTitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface INewsItem extends React.HTMLAttributes<HTMLDivElement> {
  SubTitle?: INewsSubTitle;
  Title?: INewsTitle;
  children: React.ReactNode;
}

interface INews extends React.HTMLAttributes<HTMLDivElement> {
  Select?: INewsItem;
  children: React.ReactNode;
}

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

NewsItem.SubTitle = NewsItemSubTitle;
NewsItem.Title = NewsItemTitle;
News.Item = NewsItem;

export default News;
