import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <h2>Cowsay</h2>
      <Link href='/cowsay'>
        <a>Cowsay</a>
      </Link>
      <h2>Dynamic routing</h2>
      {['id1', 'id2', 'id3'].map(pid => (
        <Link href='/post/[pid]' as={`/post/${pid}`}>
          <a>Post {pid}</a>
        </Link>
      ))}
    </div>
  );
}
