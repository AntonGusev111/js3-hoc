import React, { useState } from 'react';
import FilterVideo from './HOC/FilterVode';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.props.children(props)}
        </div>
    )
};

function Popular(props) {
  return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.props.children(props)}
        </div>
    )
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.props.title}</a></h3>
            <p className="views">Прочтений: {props.props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.props.views}</p>
        </div>
    )
};

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <FilterVideo data={item} component={Video} category={[Popular, New]} />
                    
                );

            case 'article':
                return (
                  <FilterVideo data={item} component={Article} category={[Popular, New]} />
                );
        }
    });
};

export default function App() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}