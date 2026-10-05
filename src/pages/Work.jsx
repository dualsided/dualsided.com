import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          We build e-commerce experiences that scale.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          San Diego based e-commerce consulting firm specializing in Shopify
          development for businesses generating under $20MM in online revenue.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-24">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-600">
              Bespoke Shopify themes tailored to your brand and business requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Integrations</h3>
            <p className="text-gray-600">
              Connect your store with CRMs, ERPs, and third-party platforms seamlessly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Optimization</h3>
            <p className="text-gray-600">
              Performance tuning, conversion optimization, and analytics implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
