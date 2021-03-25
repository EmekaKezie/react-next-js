import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}



function articles(props) {
    const { articles } = props
    return (
        <div>
            {
                articles.map(article =>
                    // <Link href="/articles/[id]" as={`/articles/${article.id}`}>
                        <Link href={`/articles/${article.id}`}>
                        <a>
                            <div key={article.id} style={{ border: '1px solid gray', padding: '0.2rem', margin: '1rem 0' }}>
                                <div>{article.id}</div>
                                <div>{article.title}</div>
                                <div>{article.body}</div>
                            </div>
                        </a>
                    </Link>

                )
            }
        </div>
    )
}

export default articles
