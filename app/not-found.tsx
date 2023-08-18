import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">There was a problem.</h2>
            <div className="flex flex-col gap-5">
                <p>We could not find the page you were looking for.</p>
                <p>
                    Go back to your <Link href="/">dashboard</Link>.
                </p>
            </div>
        </main>
    );
}
