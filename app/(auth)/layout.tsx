import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthNavbar from '../components/AuthNavbar';

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    if (data.session) {
        redirect('/');
    }

    return (
        <>
            <AuthNavbar />
            {children}
        </>
    );
}
