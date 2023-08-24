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

export async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0,
        },
    });

    const tickets: Promise<Ticket[]> = res.json();
    return tickets;
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
