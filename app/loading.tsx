export default function Loading() {
    return (
        <main className="text-center my-10">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full animate-pulse bg-primary-500"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-primary-500"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-primary-500"></div>
            </div>
        </main>
    );
}
