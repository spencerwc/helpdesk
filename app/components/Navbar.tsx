import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import LogoutButton from './LogoutButton';
import { User } from '@supabase/supabase-js';

export default function Navbar({ user }: { user: User | undefined }) {
    return (
        <nav>
            <Link className="flex gap-1 shrink-0" href="/">
                <Image src={Logo} alt="Helpdesk logo" width={30} />
                <h1>Helpdesk</h1>
            </Link>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets" className="mr-auto">
                Tickets
            </Link>
            {user && (
                <>
                    <span>{user.email}</span>
                    <LogoutButton />
                </>
            )}
        </nav>
    );
}
