import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold mb-4">Project not found</h1>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/work" className="text-black underline hover:no-underline">
          Back to Work
        </Link>
      </div>
    )
  }

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Work
      </Link>

      {/* Hero */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="text-sm text-gray-500">{project.year}</span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Visit Site →
            </a>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{project.name}</h1>
        <p className="text-xl text-gray-600 max-w-2xl">{project.description}</p>
      </header>

      {/* Hero Image */}
      <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-16">
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        )}
        <div className="w-full h-full flex items-center justify-center text-gray-300">
          <span className="text-8xl font-light">{project.name[0]}</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.solution}</p>
          </section>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <section>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Results
              </h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Services */}
          {project.services && project.services.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {project.services.map((service) => (
                  <li key={service} className="text-gray-700">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Project Navigation */}
      <nav className="border-t border-gray-200 pt-8">
        <div className="flex justify-between">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-gray-500 hover:text-black transition-colors"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                <div className="font-medium text-black">{prevProject.name}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-gray-500 hover:text-black transition-colors text-right"
            >
              <div>
                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                <div className="font-medium text-black">{nextProject.name}</div>
              </div>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  )
}

export default ProjectDetail
