import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

interface Ticket {
    body: string;
    createdAt?: string;
    id?: string;
    priority: string;
    title: string;
    user_email?: string;
}

export async function POST(request: NextRequest) {
    const ticket: Ticket = await request.json();

    const supabase = createRouteHandlerClient({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from('tickets')
        .insert({
            ...ticket,
            user_email: session?.user.email,
        })
        .select()
        .single();

    return NextResponse.json({ data, error });
}
