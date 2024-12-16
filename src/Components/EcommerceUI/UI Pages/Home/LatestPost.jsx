import React from 'react';
import postimg1 from "../Assets/postimg1.png";
import postimg2 from "../Assets/postimg2.png";


const Home10 = () => {
  return (
    <div className="Home10">
        <div className="post">
          <strong>Latest Post</strong>
          <p>
            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
            excepteur voluptate
          </p>
          <p>velit ipsum esse enim.</p>

          <div className="posti">
            <div className="posti1">
              <img src={postimg1} alt="" />
              <div className="All">
                <strong>
                  Fashion on a Budget: How to Look Chic Without Breaking the
                  B...
                </strong>
                <h2>02 Jan, 2019</h2>
                <p>
                  Looking chic and stylish doesn’t have to come with a hefty
                  price tag. With the right strategies, you can build a
                  fashionable wardrobe that reflects yo...
                </p>
                <h4>READ MORE</h4>
              </div>
            </div>

            <div className="posti2">
              <img src={postimg2} alt="" />
              <div className="All">
                <strong>
                  10 Must-Have Fashion Staples for Every Woman's Wardrobe
                </strong>
                <h2>02 Jan, 2019</h2>
                <p>
                  In the ever-evolving world of fashion, trends may come and go,
                  but some pieces remain timeless. These wardrobe essentials are
                  the foundation of ...
                </p>
                <h4>READ MORE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home10;