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
