import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="container center flex flex-col h-screen">
      <section className="home">
        <h2 className="text-5rem bold underline">Any Movie. Any TV Show.</h2>
        <h2 className="text-5rem">For Free. Forever.</h2>
        <br />
        <div>
          <p className="text-2rem">So, what do we watch ?</p>
          <div className="buttons text-1.25rem">
            <Link className="btn bg-gray-100 m-1" to="/movies">
              Movies
            </Link>
            <Link className="btn bg-gray-100 m-1 px-4" to="/tv">
              Series
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
