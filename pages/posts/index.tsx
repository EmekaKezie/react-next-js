import React from 'react'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import Post from './post'
import Posts from './posts'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}


function posts({ posts, post }) {

    const router = useRouter();
    const param = router.query.q
    console.log(param)

    return (
        <div>
            {
                param ? <Post /> : <Posts posts={posts}/>
            }
        </div>
    )
}

export default posts
