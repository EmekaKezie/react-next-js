import Link from 'next/link'
import myNavStyles from '../styles/Nav.module.css'
import { useRouter } from 'next/router'




const Nav = () => {

    const router = useRouter();

    const activeLink = (path) => {
        return router.asPath == path ? `${myNavStyles.active}` : ''

    }

    return (
        <nav className={myNavStyles.nav}>
            <ul>
                <li className={activeLink('/')}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>

                <li className={activeLink('/about')}>
                    <Link href='/about' >
                        <a>About</a>
                    </Link>
                </li>

                <li className={activeLink('/style-play')}>
                    <Link href='/style-play' >
                        <a>Style Play</a>
                    </Link>
                </li>

                <li className={activeLink('/articles')}>
                    <Link href='/articles' >
                        <a>Articles</a>
                    </Link>
                </li>

                <li className={activeLink('/posts')}>
                    <Link href='posts' >
                        <a>Posts</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav