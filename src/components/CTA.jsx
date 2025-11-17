export default function CTA() {
  return (
    <section id="cta" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 p-8 sm:p-12 bg-gradient-to-br from-yellow-50 to-white">
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Get started with Lemon today</h3>
            <p className="text-gray-600 max-w-2xl">Create your account and deploy your first project in minutes. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-3 text-gray-900 font-medium hover:bg-yellow-500 transition-colors">Create free account</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
