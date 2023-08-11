import {ImageResponse} from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(req: Request) {

    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const name = searchParams.get('s') ?? 'X';
    const hex = searchParams.get('hex') ?? '000000';
    const size =  Number(searchParams.get('size')) || 40;
    console.log(name);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'black',
                    background: `#${hex}`,
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {name}
            </div>
        ),
        {
            width: size,
            height: size,
        },
    );
}