'use client';

import { useState } from 'react';

interface AuthFormProps {
    handleSubmit: (
        event: React.FormEvent<HTMLFormElement>,
        email: string,
        password: string
    ) => void;
}

export default function AuthForm({ handleSubmit }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={(e) => handleSubmit(e, email, password)}>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className="btn-primary">Submit</button>
        </form>
    );
}
