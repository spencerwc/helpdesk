import { getTicketById, getTickets } from '../utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const tickets = await getTickets();

    return tickets.map((ticket) => ({
        id: ticket.id,
    }));
}

export default async function TicketDetails({
    params,
}: {
    params: { id: string };
}) {
    const ticket = await getTicketById(params.id);

    if (!ticket) {
        notFound();
    }

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
