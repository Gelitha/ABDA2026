import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-mist/80 backdrop-blur">
      <nav className="section py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-leaf">ABDA</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/novabiz">NOVABIZ</Link><Link href="/products">Products</Link><Link href="/register">Register</Link><Link href="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
