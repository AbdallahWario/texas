function About() {
  return (
    <main>
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="about">
          <div className="rawz" style={{ display: "flex" }}>
            <div className="top">
              {/* <img alt="" src="https://i.ibb.co/KFBZ2L3/profile.jpg" className="about-img" /> */}
              <div className="about-social-media mt-5">
          
                
                <a
                rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/isiolotimes"
                  className="about-links"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
            <div className="right">
              <p> IsioloTimes.</p>

              <p> 
              Isiolo times bring you the latest and most relvant news from Isiolo County and the ASAL Region
              </p>

              <p> WE BRING YOU NEWS RANGING FROM;</p>

              <p>
             POLITICS, HEALTH ,SPORTS ,CULTURE ,BUSINESS

              </p>

          
              <p>
                Email: info@isiolotimes.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
