import tes5 from "../assets/fresh-1.png";
import tes6 from "../assets/fresh-2.png";
import img from "../assets/news-3.png";
import tes1 from "../assets/tea-1.png";
import tes2 from "../assets/tea-2.png";
import tes3 from "../assets/tea-3.png";
import tes4 from "../assets/tea-4.png";

const Home = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 p-5">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={tes6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Juice</h2>
            <p>
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
