import Link from 'next/link';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return <main className="section"><h1 className="title mb-6">Student Product Showcase</h1><div className="mb-5 text-sm">Categories: Food Innovation · Agri-tech · Sustainable Products · Herbal Products · Organic Products · Livestock Products</div><div className="grid md:grid-cols-3 gap-5">{products.map(p => <article key={p.slug} className="glass rounded-2xl overflow-hidden"><img src={`${p.image}?auto=format&fit=crop&w=800&q=80`} alt={p.name} className="h-40 w-full object-cover"/><div className="p-4"><p className="text-xs text-moss">{p.category}</p><h2 className="font-semibold mt-1">{p.name}</h2><p className="text-sm">{p.team}</p><p className="mt-2 text-sm text-slate-600">{p.description}</p><Link className="inline-block mt-4 text-leaf" href={`/products/${p.slug}`}>View Details →</Link></div></article>)}</div></main>;
}
