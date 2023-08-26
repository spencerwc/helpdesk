import { type PostgrestError } from '@supabase/supabase-js';

export interface Ticket {
    body: string;
    createdAt?: string;
    id?: string;
    priority: string;
    title: string;
    user_email?: string;
}

export interface TicketJsonResponse {
    data: Ticket;
    error: PostgrestError | null;
}

export async function getTicketById(id: string) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (!res.ok) {
        return undefined;
    }

    const ticket: Promise<Ticket> = res.json();
    return ticket;
}
