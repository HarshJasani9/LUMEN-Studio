import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageTransition from '@/components/animation/PageTransition';
import { projects } from '@/data/projects';
import ProjectHero from './ProjectHero';
import ProjectBody from './ProjectBody';
import ProjectNav from './ProjectNav';

export default function WorkDetail() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <PageTransition>
      <main className="w-full" style={{ backgroundColor: 'var(--color-void)' }}>
        <ProjectHero project={project} />
        <ProjectBody project={project} />
        <ProjectNav prevProject={prevProject} nextProject={nextProject} />
      </main>
    </PageTransition>
  );
}
