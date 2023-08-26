'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);

        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: 'DELETE',
        });

        const json = await res.json();

        if (json.error) {
            console.log(json.error);
        } else {
            router.refresh();
            router.push('/tickets');
        }
    };

    return (
        <button
            className="btn-primary"
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? 'Deleting... ' : 'Delete'}
        </button>
    );
}
