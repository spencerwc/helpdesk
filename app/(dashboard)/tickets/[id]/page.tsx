import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { Ticket } from '../utils';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const supabase = createServerComponentClient({ cookies });

    const { data: ticket }: { data: Ticket | null } = await supabase
        .from('tickets')
        .select()
        .eq('id', params.id)
        .single();

    return {
        title: `Helpdesk - ${ticket?.title || 'Ticket not found'}`,
    };
}

async function getTicketById(id: string) {
    const supabase = createServerComponentClient({ cookies });

    const { data }: { data: Ticket | null } = await supabase
        .from('tickets')
        .select()
        .eq('id', id)
        .single();

    if (!data) {
        notFound();
    }

    return data;
}

export default async function TicketDetails({
    params,
}: {
    params: { id: string };
}) {
    const ticket = await getTicketById(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    );
}
