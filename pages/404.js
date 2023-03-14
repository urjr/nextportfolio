import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const NotFound = () => {
    const router = useRouter();

    useEffect (() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, []);

    return (
        <>
            <h1>Sorry....</h1>
            <p>You will be redirected in a few seconds. If not, click <Link href="/">Here</Link></p>
        </>
    );
}
 
export default NotFound;