import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-yellow-400" aria-hidden />
          <span className="text-xl font-semibold tracking-tight text-gray-900">Lemon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#cta" className="text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md transition-colors">Get started</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}
