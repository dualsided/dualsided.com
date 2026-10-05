const apps = [
  {
    id: 1,
    name: 'Subscription Manager',
    description:
      'Flexible subscription management for Shopify stores. Handle recurring orders, customer portals, and automated billing with ease.',
    features: ['Flexible billing cycles', 'Customer self-service portal', 'Automated retry logic', 'Analytics dashboard'],
  },
  {
    id: 2,
    name: 'Inventory Sync',
    description:
      'Real-time inventory synchronization between Shopify and your back-office systems. Never oversell again.',
    features: ['Multi-location support', 'Real-time updates', 'ERP integrations', 'Audit logging'],
  },
  {
    id: 3,
    name: 'Custom Fields Pro',
    description:
      'Add custom fields to products, customers, and orders. Extend Shopify to match your business processes.',
    features: ['Metafield management', 'Bulk editing', 'Import/Export', 'Theme integration'],
  },
]

function ShopifyApps() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Shopify Apps
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Proprietary solutions we've built to solve common e-commerce challenges.
          Available for select clients.
        </p>
      </section>

      {/* Apps Grid */}
      <section>
        <div className="grid grid-cols-1 gap-12">
          {apps.map((app) => (
            <article
              key={app.id}
              className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-3">{app.name}</h2>
              <p className="text-gray-600 mb-6 max-w-2xl">{app.description}</p>
              <div className="flex flex-wrap gap-3">
                {app.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Need a custom solution?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We build custom Shopify apps tailored to your specific business requirements.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  )
}

export default ShopifyApps
