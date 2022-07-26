import React from "react";
import './Detail.css';

function Detail(props){  
  console.log(props);

  return(
    <React.Fragment>
      <div className="pimg1">
        <div className="ptext">
          <span className="border">
            MOVIE SITE
          </span>
        </div>
      </div>

      <section className="section section-light">
        <h2>Section One</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis provident ducimus quae incidunt sit, fugit minima eum accusantium illo impedit excepturi eligendi cumque, nemo repellendus facilis doloremque, explicabo sint et! Dignissimos quis maiores fugit nostrum illum labore voluptate hic, ea aspernatur voluptatem amet esse quod nemo rem adipisci! Itaque molestiae at, est laboriosam exercitationem nam explicabo! Vitae fugit error accusantium eum numquam dicta doloremque consectetur eveniet. Corporis, non nobis explicabo fugiat ab omnis itaque exercitationem enim recusandae voluptatum inventore ipsa quasi nemo officiis consectetur. Et, consequuntur corrupti itaque libero blanditiis omnis officia ullam, eveniet veniam natus nulla ex magnam quis.</p>
      </section>

      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">
            Image Two Text
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Two</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis provident ducimus quae incidunt sit, fugit minima eum accusantium illo impedit excepturi eligendi cumque, nemo repellendus facilis doloremque, explicabo sint et! Dignissimos quis maiores fugit nostrum illum labore voluptate hic, ea aspernatur voluptatem amet esse quod nemo rem adipisci! Itaque molestiae at, est laboriosam exercitationem nam explicabo! Vitae fugit error accusantium eum numquam dicta doloremque consectetur eveniet. Corporis, non nobis explicabo fugiat ab omnis itaque exercitationem enim recusandae voluptatum inventore ipsa quasi nemo officiis consectetur. Et, consequuntur corrupti itaque libero blanditiis omnis officia ullam, eveniet veniam natus nulla ex magnam quis.</p>
      </section>



      <div className="pimg3">
        <div className="ptext">
          <span className="border trans">
            Image Three Text
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2>Section Three</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis provident ducimus quae incidunt sit, fugit minima eum accusantium illo impedit excepturi eligendi cumque, nemo repellendus facilis doloremque, explicabo sint et! Dignissimos quis maiores fugit nostrum illum labore voluptate hic, ea aspernatur voluptatem amet esse quod nemo rem adipisci! Itaque molestiae at, est laboriosam exercitationem nam explicabo! Vitae fugit error accusantium eum numquam dicta doloremque consectetur eveniet. Corporis, non nobis explicabo fugiat ab omnis itaque exercitationem enim recusandae voluptatum inventore ipsa quasi nemo officiis consectetur. Et, consequuntur corrupti itaque libero blanditiis omnis officia ullam, eveniet veniam natus nulla ex magnam quis.</p>
      </section>

      <div className="pimg1">
      
        <div className="ptext">
          <span className="border">
            FIND OUT YOUR MOVIE
          </span>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Detail;