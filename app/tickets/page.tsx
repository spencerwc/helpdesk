import TicketsList from './TicketsList';

export default function Tickets() {
    return (
        <main>
            <div>
                <h2>Tickets</h2>
                <p>
                    <small>Currently open tickets:</small>
                </p>
            </div>
            <TicketsList />
        </main>
    );
}
