import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function AuthNavbar() {
    return (
        <nav>
            <Link className="flex gap-1 shrink-0" href="/">
                <Image src={Logo} alt="Helpdesk logo" width={30} />
                <h1>Helpdesk</h1>
            </Link>
            <Link href="/signup">Sign up</Link>
            <Link href="/login">Log in</Link>
        </nav>
    );
}
