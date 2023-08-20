import Link from 'next/link';
import { getTickets } from './utils';

export default async function TicketsList() {
    const tickets = await getTickets();

    return (
        <>
            {tickets.map((ticket) => (
                <Link href={`/tickets/${ticket.id}`}>
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </div>
                </Link>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets.</p>
            )}
        </>
    );
}
