import { blogPosts } from "@/lib/constants";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="container-balanced py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Insights</p>
        <h1 className="text-4xl font-semibold text-white">From the Analytic Genie team</h1>
        <p className="max-w-3xl text-lg text-text-muted">
          Thoughts on AI, decision intelligence, and building trustworthy analytics.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            href={post.href}
            key={post.title}
            className="glass block rounded-2xl p-6 transition hover:border-white/40 hover:-translate-y-1"
          >
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-muted">
              {post.tag}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{post.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand">Read more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

