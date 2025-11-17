import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g47qp9qcUcqjW1-A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
          <span className="inline-block size-2 rounded-full bg-yellow-400" />
          Minimal hosting for modern teams
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-3xl leading-[1.1]">
          Blazing-fast cloud hosting with a lemon-fresh simplicity
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Deploy sites, APIs, and apps in seconds. Zero noise, clear pricing, and a clean dashboard to keep you focused.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-gray-900 font-medium hover:bg-yellow-500 transition-colors">
            Start for free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
