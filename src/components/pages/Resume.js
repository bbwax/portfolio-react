import React from 'react';

export default function Resume() {

  const resumeURL = "https://drive.google.com/file/d/1TYVvEl8z_eqzCJbAS9_eeEd1gxI8JyAC/view?usp=share_link";
  return (
    <div className='section'>
      <div className='container'>
      <h1>Resume</h1>
      <p>
        To view my resume, please click the following link:
        <br />
        <a href={resumeURL} target="_blank" rel="noreferrer" className='btn btn-info'>View Resume</a>
      </p>
      </div>
    </div>
  );
}
