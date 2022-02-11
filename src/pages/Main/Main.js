import React from 'react';

const Main = () => {
  return (
    <div className='container'>
      <header>Swit</header>
      <main>
        <div className='sidebar'></div>
        <section>
          <div className='nav'>General</div>
          <div className='chat-background'>
            <div className='date-line'>
              <div className='line'></div>
              <span className='date'></span>
              <div className='line'></div>
            </div>
            <div className='chat-section'></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
