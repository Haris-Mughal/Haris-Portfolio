import {useState} from 'react';
import ProjectCard from './ProjectCard';
import {staticProjects, personalProjects, teamProjects} from './utils';

import {DownloadCVButton} from 'components/DownloadCVButton';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [fullstackCategory, setFullstackCategory] = useState('personal');

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center sm:px-1">
        <div className="flex flex-row items-center pb-6 pt-4 align-middle">
          <span className="html-tag">{'<b>'} </span>
          <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
            My <span className="text-xl text-themePrimaryColor sm:text-2xl">Projects</span>
          </p>
          <span className="html-tag">{'</b>'}</span>
        </div>
      </div>
      <div className="mb-8">
        <button
          title="Fullstack projects"
          onClick={() => setActiveTab('fullstack')}
          className={activeTab === 'fullstack' ? `btn-active` : 'btn'}
        >
          Fullstack
        </button>
        &nbsp;
        <button
          title="Static projects"
          onClick={() => setActiveTab('static')}
          className={activeTab === 'static' ? `btn-active` : 'btn'}
        >
          Static
        </button>
      </div>
      <>
        {/* {activeTab === 'fullstack' ? (
          <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            {staticProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )} */}
        {activeTab === 'fullstack' && (
          <div className="mb-6 flex gap-4 justify-center">
            <button
              title="Personal Projects"
              onClick={() => setFullstackCategory('personal')}
              className={fullstackCategory === 'personal' ? 'btn-active' : 'btn'}
            >
              Personal
            </button>
            <button
              title="Team Projects"
              onClick={() => setFullstackCategory('team')}
              className={fullstackCategory === 'team' ? 'btn-active' : 'btn'}
            >
              Team
            </button>
          </div>
        )}
      </>

      <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
        {activeTab === 'static'
          ? staticProjects.map((project, index) => <ProjectCard key={index} project={project} />)
          : fullstackCategory === 'personal'
            ? personalProjects.map((project, index) => <ProjectCard key={index} project={project} />)
            : teamProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
      </div>

      <div className="mt-12 w-full">
        <i className="fond-light pr-4 text-lg text-primaryColor">More information</i>
        <DownloadCVButton isSmall />
      </div>
    </>
  );
};

export default Projects;
