import { products } from '@/lib/data';

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) ?? products[0];
  return <main className="section space-y-5"><h1 className="title">{product.name}</h1><div className="grid md:grid-cols-2 gap-6"><img className="rounded-2xl h-72 w-full object-cover" src={`${product.image}?auto=format&fit=crop&w=1200&q=80`} alt={product.name}/><div className="glass rounded-2xl p-6 space-y-3"><p><b>Business idea:</b> {product.description}</p><p><b>Problem solved:</b> Low productivity and weak product differentiation.</p><p><b>Target market:</b> Young consumers and eco-conscious agribusiness buyers.</p><p><b>Innovation:</b> Applied research + market-first packaging strategy.</p><p><b>Team:</b> 4 undergraduates, Faculty mentor, industry advisor.</p><p><b>Contact:</b> hello@abda.lk · @abda_ruhuna</p><div className="rounded-xl border p-4">QR Booth Quick View Placeholder</div></div></div></main>;
}
