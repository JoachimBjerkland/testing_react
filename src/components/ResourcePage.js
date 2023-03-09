import React from 'react';
import { resources } from '../ressurser/ressurser.js';

function ResourcePage(props) {
  const category = props.category;
  const testResources = resources.filter(resource => resource.category === category);

  return (
    <div className='testEr'>
      <h1>Ressurser for {category}</h1>
      <ul>
        {testResources.map((resource, index) => (
          <li key={index}><a href={resource.url}>{resource.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcePage;
