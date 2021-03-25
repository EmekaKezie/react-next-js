import React from 'react'
import Link from 'next/link'



function posts({posts}) {
    return (
        <div>
            {
                posts.map(post =>
                    // <Link href="/articles/[id]" as={`/articles/${article.id}`}>
                        <Link href={`/posts?q=${post.id}`}>
                        <a>
                            <div key={post.id} style={{ border: '1px solid gray', padding: '0.2rem', margin: '1rem 0' }}>
                                <div>{post.id}</div>
                                <div>{post.title}</div>
                                <div>{post.body}</div>
                            </div>
                        </a>
                    </Link>

                )
            }
        </div>
    )
}

export default posts
