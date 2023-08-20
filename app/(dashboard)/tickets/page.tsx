import { Suspense } from 'react';
import type { Metadata } from 'next';
import TicketsList from './TicketsList';
import Loading from '../loading';

export const metadata: Metadata = {
    title: 'Helpdesk - Tickets',
};

export default function Tickets() {
    return (
        <main>
            <div>
                <h2>Tickets</h2>
                <p>
                    <small>Currently open tickets:</small>
                </p>
            </div>
            <Suspense fallback={<Loading />}>
                <TicketsList />
            </Suspense>
        </main>
    );
}
