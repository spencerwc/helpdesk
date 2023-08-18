import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">We hit a wall.</h2>
            <div className="flex flex-col gap-5">
                <p>We could not find the ticket you were looking for.</p>
                <p>
                    Go back to your <Link href="/tickets">tickets</Link>.
                </p>
            </div>
        </main>
    );
}
