import { useState } from 'react';
import { Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl?: string;
  isFrameIo?: boolean;
  isYouTube?: boolean;
}

const projects: Project[] = [
    {
      id: '0',
      title: 'FIVE 15 COFFEE',
      subtitle: 'Director | Editor',
      thumbnail: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
      videoUrl: 'https://framerate.tv/embed/471a6ee3-eccd-4eb4-b1ce-74bc1d728131?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal',
      isFrameIo: true
    },
    {
      id: '1',
      title: 'CU Link',
      subtitle: 'Director | Editor',
      thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      videoUrl: 'https://framerate.tv/embed/ae0a3a42-c306-4c55-b019-e79ba11bdf62?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal',
      isFrameIo: true
    },
    { id: '2', title: 'DxRacer', subtitle: 'Director | Editor', thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', videoUrl: 'https://framerate.tv/embed/dbabd83d-5451-49a1-a215-8af77d287915?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '3', title: 'NAFCU', subtitle: 'Director | Editor', thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', videoUrl: 'https://framerate.tv/embed/ebb20441-40f4-4832-a8f8-bdc0ea8981de?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '4', title: 'JMC Landscaping', subtitle: 'Director', thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', videoUrl: 'https://framerate.tv/embed/e89e2f4c-8ffc-44f1-838a-55143c2b4e6d?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '5', title: 'BORA', subtitle: 'Director', thumbnail: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', videoUrl: 'https://framerate.tv/embed/af9f0e15-6132-40c8-998c-656d28d4754c?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '6', title: 'Ice Cream Social', subtitle: 'Director | Editor', thumbnail: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', videoUrl: 'https://framerate.tv/embed/1d976d38-d212-4156-a623-25935058d2cb?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '7', title: 'EBX - Uninvited', subtitle: 'Director | Editor', thumbnail: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)', videoUrl: 'https://framerate.tv/embed/c5f428eb-d045-41c6-9aaa-f514e51ddade?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '8', title: 'Mango Languages', subtitle: 'Director | Editor', thumbnail: 'linear-gradient(135deg, #00d2ff 0%, #3a47d5 100%)', videoUrl: 'https://framerate.tv/embed/ff86acb2-004b-44a9-bf62-0018d3fe590e?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
    { id: '9', title: 'NAFCU', subtitle: 'Director', thumbnail: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)', videoUrl: 'https://framerate.tv/embed/273b9145-9fc7-40fe-8655-dd5ea82dc849?primary_color=%23ffffff&track_color=%23ffffff&theme=minimal', isFrameIo: true },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-24 md:py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-[#f9f4ef]" style={{ letterSpacing: '0.5px' }}>Featured Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-video overflow-hidden cursor-pointer rounded-2xl"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {project.videoUrl && (project.isFrameIo || project.isYouTube) ? (
                  <iframe
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : project.videoUrl ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: project.thumbnail }}
                  ></div>
                )}

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-[#f9f4ef] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-extrabold text-[#f9f4ef] mb-1">{project.title}</h3>
                  <p className="text-sm text-[#f9f4ef]/70">{project.subtitle}</p>
                </div>

                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-8 right-8 text-[#f9f4ef]/70 hover:text-[#f9f4ef] text-4xl font-light leading-none transition-colors"
          >
            ×
          </button>
          <div className="w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            {selectedProject.videoUrl && (selectedProject.isFrameIo || selectedProject.isYouTube) ? (
              <iframe
                src={selectedProject.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : selectedProject.videoUrl ? (
              <video
                className="w-full h-full object-contain"
                src={selectedProject.videoUrl}
                controls
                autoPlay
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-[#f9f4ef] text-xl">No video available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
