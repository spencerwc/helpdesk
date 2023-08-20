'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addTicket } from '../utils';

export default function TicketForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);
    const priorityOptions = ['low', 'medium', 'high'];
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const ticket = {
            body,
            priority,
            title,
            user_email: 'temp@email.dev',
        };

        const res = await addTicket(ticket);

        if (res.status === 201) {
            router.refresh();
            router.push('/tickets');
        } else {
            setIsLoading(false);
        }
    };

    return (
        <form className="w-1/2" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Content:</span>
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    {priorityOptions.map((priority) => (
                        <option key={priority} value={priority}>
                            {priority.slice(0, 1).toUpperCase() +
                                priority.slice(1)}
                        </option>
                    ))}
                </select>
            </label>
            <button className="btn-primary" disabled={isLoading}>
                {isLoading ? (
                    <span>Creating...</span>
                ) : (
                    <span>Create ticket</span>
                )}
            </button>
        </form>
    );
}
