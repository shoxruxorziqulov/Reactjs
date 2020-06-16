import React from 'react';

function Article(props) {
    const {article} = props
    const body = <section>{article.text}</section>
    return (
        <div>
            <h2>{article.title}</h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            <p>ID: {article.id}</p>
        </div>
    )
}

export default Article