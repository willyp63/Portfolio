import React from 'react';
import ProjectImage from './project_image';

const Projects = React.createClass({
  render () {
    return (
      <div className='content-section'>
        <h1 className='projects-header'>Projects</h1>
        <ul className='project-list'>
          <li className='project'>
            <ProjectImage imgSrc='/assets/soundscape.jpg'
                          linkNames={['Live', 'Github']}
                          links={['http://www.soundsscape.com', 'https://github.com/willyp63/SoundScape']}/>
            <div className='project-info'>
              <h3 className='project-title'>SoundScape</h3>
              <p className='project-description'>A free music-streaming web application built with Ruby on Rails, Express.js, and React.js</p>
              <ul className='project-bullets'>
                <li>Utilized web crawler and Spotify API to search and stream high-quality audio for millions of popular songs!</li>
                <li>Wrote algorithm to crawl the web and select the optimal audio file based on a four-point scoring system.</li>
                <li>Launched Node.js server to accept partial content requests and stream audio to the client.</li>
                <li>Built custom audio player Interface, with JQuery, on top of HTML5 Audio Player.</li>
              </ul>
            </div>
          </li>
          <li className='project'>
            <ProjectImage imgSrc='/assets/fatbat.jpg'
                          linkNames={['iTunes', 'Github']}
                          links={['https://itunes.apple.com/us/app/fat-bat-colored-caverns/id1078060795', 'https://github.com/willyp63/Fat_Bat']}/>
            <div className='project-info'>
              <h3 className='project-title'>Fat Bat and the Colored Caverns</h3>
              <p className='project-description'>A side-scrolling arcade game listed on iTunes store for iPhone and iPad written in Objective-C</p>
              <ul className='project-bullets'>
                <li>Downloaded 100+ times and received multiple 5-star reviews.</li>
                <li>Designed to be responsive and available across all iOS mobile platforms.</li>
                <li>Created geometric based artwork and animations using Quartz 2D.</li>
              </ul>
            </div>
          </li>
          <li className='project'>
            <ProjectImage imgSrc='/assets/worm.jpg'
                          linkNames={['Live', 'Github']}
                          links={['https://willyp63.github.io/', 'https://github.com/willyp63/worm']}/>
            <div className='project-info'>
              <h3 className='project-title'>Worm</h3>
              <p className='project-description'>A browser-based game inspired by the classic arcade game Snake utilizing HTML5 Canvas</p>
              <ul className='project-bullets'>
                <li>Utilized 3D CSS3 transitions along with HTML5 Canvas to build an engaging interface.</li>
                <li>Efficiently stored and rendered a life-like worm object capable of resizing its segments independently.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
});

export default Projects;
