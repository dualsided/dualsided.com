import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`}>
      <article className="group cursor-pointer">
        <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          ) : null}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-4xl font-light">{project.name[0]}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard
