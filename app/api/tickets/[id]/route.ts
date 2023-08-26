import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function DELETE(_: any, { params }: { params: { id: string } }) {
    const id = params.id;

    const supabase = createRouteHandlerClient({ cookies });

    const { error } = await supabase.from('tickets').delete().eq('id', id);

    return NextResponse.json({
        error,
    });
}
