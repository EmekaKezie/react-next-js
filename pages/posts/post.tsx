import React, { useEffect, useState } from 'react'
import { useRouter, withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


// export const getServerSideProps = async (context) => {
//     console.log(`context: ${context.param.post}`)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.param.post}`)

//     const post = await res.json()

//     return {
//         props: {
//             post
//         }
//     }
// }


function Post() {

    let param = {
        id: '',
        title: '',
        body: ''
    }


    const [statePost, setStatePost] = useState(param)
    console.log(statePost)

    const router = useRouter();

    const { q } = router.query
    const url = `https://jsonplaceholder.typicode.com/posts/${q}`
    // console.log(router.query)

    useEffect(() => {
        axios.get(url).then(res => {
            // console.log(res.data)
            setStatePost(res.data)
        }).catch(error => {
            // console.log(error)
        })

    }, [q])

    // console.log(statePost)


    return (
        <div>
            {
                statePost ?
                    <div>
                        <div style={{ padding: '5px 0' }}>
                            <Link href="/posts">
                                <a style={{ color: 'blue' }}>Return</a>
                            </Link>
                        </div>
                        <div style={{ border: '1px solid gray', padding: '0.2rem', margin: '1rem 0' }}>
                            <div>{statePost.id}</div>
                            <div>{statePost.title}</div>
                            <div>{statePost.body}</div>
                        </div>
                    </div> :
                    <div>Loading . . . </div>
            }

        </div>
    )
}

export default Post