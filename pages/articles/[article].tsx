import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.article}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default function articles({ article }) {
    // const { article } = props
    const router = useRouter();
    console.log(article)

    // const { id } = router.query
    return (
        <div>
            <div style={{ padding: '5px 0' }}>
                <Link href="/articles">
                    <a>Return</a>
                </Link>
            </div>
            <div style={{ border: '1px solid gray', padding: '0.2rem', margin: '1rem 0' }}>
                <div>{article.id}</div>
                <div>{article.title}</div>
                <div>{article.body}</div>
            </div>
        </div>
    )
}
