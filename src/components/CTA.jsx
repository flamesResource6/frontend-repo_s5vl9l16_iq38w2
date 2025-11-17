export default function CTA() {
  return (
    <section id="cta" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 p-8 sm:p-12 bg-gradient-to-br from-yellow-50 to-white">
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Ready to host your next party?</h3>
            <p className="text-gray-600 max-w-2xl">Create your event, pick a venue, invite guests, and line up vendors — all from one simple place.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-gray-900 font-medium hover:bg-yellow-500 transition-colors">Plan a party</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">Explore features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
