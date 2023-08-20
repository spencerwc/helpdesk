interface Ticket {
    body: string;
    id?: string;
    priority: string;
    title: string;
    user_email: string;
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

export async function addTicket(ticket: Ticket) {
    const res = await fetch(`http://localhost:4000/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...ticket, id: crypto.randomUUID() }),
    });

    return res;
}
