// import mainScss from "../assets/scss/main.scss";

import HeadDefault from "../components/layouts/head/HeadDefault";
import Layout from "../components/layouts/Layout";

const backgroundcolor = "#eeeeee";

export default () => (
  <>
  <HeadDefault
    title="Home | Welcome to Next.js Styled-Jsx and Sass!"
    description="Welcome to Next.js Styled-Jsx and Sass!, a NextJS template."
  />
  <Layout>
    <div className="hero-start">
      <h1 className="title">Welcome to Next.js Styled-Jsx and Sass!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <div>
        <div className="lead my-5">
          <div className="text-center mx-auto my-5">
            <div className="my-3">
              <i className="fab fa-bootstrap fa-8x text-primary"></i>
            </div>
            <div className="my-3">
              <i className="fab fa-sass fa-8x text-danger"></i>
            </div>
            <div className="my-3">
              <i className="fab fa-react fa-8x text-info"></i>
            </div>
          </div>
          <h3 className="headline-mm">Feature</h3>
          <ul>
            <li>SASS with customise variables for themes in any project.</li>
            <li>
              Page, components, typography, forms, button, background, icons and
              divs samples with others additonal libraries.
            </li>
          </ul>
        </div>
        <div className="hello">
          <p className="display-4">Hello World</p>
        </div>
        <div>
          <div className="row">
            <a href="https://nextjs.org/docs" className="cardz">
              <h3 className="headline">Documentation &rarr;</h3>
              <p>Learn more about Next.js in the documentation.</p>
            </a>
            <a href="https://nextjs.org/learn" className="cardz">
              <h3>Next.js Learn &rarr;</h3>
              <p>Learn about Next.js by following an interactive tutorial!</p>
            </a>
            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="cardz"
            >
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* @import "assets/scss/main"; */}
    <style jsx>{`
      @import "assets/scss/vendors/variables";
      @import "assets/scss/base/placeholder";
      @import "assets/scss/themes/theme";
      $className: $orange;
      .hero-start {
        .title,
        .headline-mm {
          color: $success;
        }
      }

      .hello {
        background-color: ${backgroundcolor};
        padding: 4rem 0 4rem 0;
        text-align: center;
        transition: color 250ms ease-in, background-color 500ms ease-in;
        &:hover {
          color: $className;
          background-color: white;
        }

        @media only screen and (max-width: 480px) {
          font-size: 20px;
        }
      }

      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .cardz {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        /* color: #434343; */
        color: $success !important;
        border: 1px solid $success;
        transition: color 250ms ease-in, box-shadow 250ms ease-in, border-color 550ms ease-in, background-color 550ms linear;
        @extend %box-shadow-dark;
      }
      .cardz:hover {
        color: $primary;
        border-color: $primary;
        background-color: ${backgroundcolor};
        h3 {
          color: $primary;
        }
      }
      .cardz h3 {
        margin: 0;
        color: $success;
        font-size: 18px;
      }
      .cardz p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Layout>
  </>
);
