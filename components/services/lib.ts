export async function getNotehub() {
  const res = await fetch(
    'https://api.github.com/repos/Ann00012/05-notehub',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch Notehub project');
  }

  return res.json();
}


