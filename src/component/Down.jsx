// import React from 'react';

function Down() {
    const imagePath = "/src/assets/baker3.jpeg";
  return (
    <>
     <div className="p-5 shadow-lg gap-3">
      <div className="card mb-3 m-auto shadow-sm mt-3" style={{ maxWidth: '940px', maxHeight: '940px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Use the correct src for your image */}
            <img src="/src/assets/baker3.jpeg" className="img-fluid rounded-start" alt="Baker" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. 
                This content is a little bit longer.
              </p>
              <p className="card-text">
                {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 m-auto shadow-sm mt-3" style={{ maxWidth: '940px', maxHeight: '940px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imagePath} className="img-fluid rounded-start" alt="Kneading dough" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The Art of Kneading and Proofing</h5>
                <p className="card-text">
                  Kneading is a fundamental step in baking bread, helping to develop gluten, which gives the dough its structure. 
                  Proper kneading techniques can make all the difference in achieving that perfect rise. 
                  Don’t forget to let your dough proof properly; a well-proofed dough will yield a soft and airy loaf, ready for the oven!
                </p>
                <p className="card-text">
                  {/* <small className="text-body-secondary">Last updated 5 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>

      
      <div className="card mb-3 m-auto shadow-sm" style={{ maxWidth: '940px', maxHeight: '940px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            {/* Use the correct src for your image */}
            <img src="/src/assets/baker3.jpeg" className="img-fluid rounded-start" alt="Baker" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. 
                This content is a little bit longer.
              </p>
              <p className="card-text">
                {/* <small className="text-body-secondary">Last updated 3 mins ago</small> */}
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}

export default Down;
