import { put } from '@vercel/blob';
export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const blob = await put(`bharat/${Date.now()}-${filename}`, request.body, { access: 'public' });
  return Response.json(blob);
}
