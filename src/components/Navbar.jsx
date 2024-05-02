import React from 'react';

function Nav({ setCategory }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  fs-5" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => setCategory("general")}><span className='badge bg-light text-dark fs-5'>NG-News</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <h1 className="navbar-toggler-icon"></h1>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-8">
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}>Technology</a>
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory('business')}>Business</a>
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("health")}>Health</a>
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("sports")}>Sports</a>
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("science")}>Science</a>
              <a className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("entertainment")}>Entertainment</a>
            </div>
          </div>
        </div>
      </nav>
    
    </div>
  );
}

export default Nav;
