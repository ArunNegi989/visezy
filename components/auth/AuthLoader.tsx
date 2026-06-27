"use client";

export default function AuthLoader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
                <p className="text-gray-600 font-medium">
                    Loading...
                </p>
            </div>
        </div>
    );
}