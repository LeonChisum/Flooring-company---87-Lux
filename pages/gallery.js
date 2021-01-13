import "../styles/style.scss";

import Head from "next/head";

const Gallery = () => {
  return (
    <div>
      <Head>
        <meta
          description="See our gallery with a wide range of beautiful projects that we've done for our clients"
          content="flooring company, flooring, floor, floor covering, lay out, house, renovation"
        />
        <title>Gallery - See Our beautiful projects</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <section id="gallery">
        <div className="gallery__container">
          <h1 className="gallery__title">Gallery</h1>

          <p className="gallery__p">
            Our Gallery has some of the best projects that we have worked on and
            works of our satisfied customers. Take a look at the examples of
            work that we do.
          </p>

          <div className="gallery-grid">
            {/* Gallery Box 1 */}
            <div className="gallery-grid__box-1 gallery-grid--box">
              {/* <img className='gallery-grid__img-1' src='/img/project-image-1.png' alt='Vinyl Floor Installation' /> */}
              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 2 */}
            <div className="gallery-grid__box-2 gallery-grid--box">
              {/* <img className='gallery-grid__img-1' src='/img/project-image-2.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 3 */}
            <div className="gallery-grid__box-3 gallery-grid--box">
              {/* <img className='gallery-grid__img-3' src='/img/project-image-3.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 4 */}
            <div className="gallery-grid__box-4 gallery-grid--box">
              {/* <img className='gallery-grid__img-4' src='/img/project-image-4.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 5 */}
            <div className="gallery-grid__box-5 gallery-grid--box">
              {/* <img className='gallery-grid__img-5' src='/img/project-image-5.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 6 */}
            <div className="gallery-grid__box-6 gallery-grid--box">
              {/* <img className='gallery-grid__img-6' src='/img/project-image-6.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 7 */}
            <div className="gallery-grid__box-7 gallery-grid--box">
              {/* <img className='gallery-grid__img-7' src='/img/project-image-7.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 8 */}
            <div className="gallery-grid__box-8 gallery-grid--box">
              {/* <img className='gallery-grid__img-8' src='/img/project-image-8.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 9 */}
            <div className="gallery-grid__box-9 gallery-grid--box">
              {/* <img className='gallery-grid__img-9' src='/img/project-image-9.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 10 */}
            <div className="gallery-grid__box-10 gallery-grid--box">
              {/* <img className='gallery-grid__img-10' src='/img/project-image-10.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>

            {/* Gallery Box 11 */}
            <div className="gallery-grid__box-11 gallery-grid--box">
              {/* <img className='gallery-grid__img-11' src='/img/project-image-11.png' alt='Vinyl Floor Installation' /> */}

              <div className="gallery-grid__info">Vinyl Floor Installation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
