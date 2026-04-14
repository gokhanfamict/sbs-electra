'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0A192F] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-8xl md:text-9xl font-bold text-[#00C2A8] mb-4">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Pagina Niet Gevonden
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    De pagina die u zoekt bestaat niet of is verplaatst.
                </p>
                <Link href="/">
                    <Button className="bg-[#00C2A8] hover:bg-[#00a896] text-[#0A192F] font-semibold px-8 py-3 text-lg">
                        Terug naar Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}