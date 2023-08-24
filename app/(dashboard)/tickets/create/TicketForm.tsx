'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type TicketJsonResponse } from '../utils';

export default function TicketForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const priorityOptions = ['low', 'medium', 'high'];
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const ticket = {
            body,
            priority,
            title,
        };

        const res = await fetch(`http://localhost:3000/api/tickets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticket),
        });

        const json: TicketJsonResponse = await res.json();

        if (json.error) {
            setError(json.error.message);
            setIsLoading(false);
        }

        if (json.data) {
            router.refresh();
            router.push('/tickets');
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
            {error && <div className="error">{error}</div>}
        </form>
    );
}
