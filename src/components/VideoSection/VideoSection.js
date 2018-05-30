import React from "react";

import { MainSection } from "components/MainSection";
import { Header } from "components/Header";
import { VideoGroup } from "components/VideoGroup";

class VideoSection extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Travel";
  }

  render() {
    return (
      <React.Fragment>
        <Header mainHeading="Travel">
          <h6>
            I've been doing a lot of travelling lately where I've met so many
            amazing people, had so many new experiences, and of course, ate so
            much delicious food! I starting making short videos of my trips, and
            while these are by no means high-quality or well-edited videos, I
            had a lot of fun making them. I guess they're just a way for me to
            look back at all the good memories. Check them out!
          </h6>
        </Header>
        <MainSection>
          <VideoGroup
            title="Mexico 2017"
            src="https://www.youtube.com/embed/ZLDQlEKKs0w"
          >
            <p>
              This past summer, I spent 4 WILD months in Guadalajara, Mexico
              working as a Software Engineer intern for{" "}
              <a href="https://www.wizeline.com/" target="_new">
                Wizeline
              </a>. My trip was filled with lots of tacos, tequila, salsa
              dancing, and honestly, a lot of personal development. It was my
              first time travelling alone, and even though I only knew about 8
              Spanish words (don't worry I learned more once I got there), I had
              an incredible time. Special shoutouts to Uri, Ixai, Abbey, Beto,
              Aldo for all the laughs!
            </p>
          </VideoGroup>
          <VideoGroup title="Norway 2018">
            <p>
              I spent 4 months living in Norway while working as a Software
              Engineer Intern at{" "}
              <a href="https://cognite.com/" target="_new">
                Cognite
              </a>. I was very fortunate to explore many different parts of
              Scandinavia, including Reykjavik, Stockholm, Gothenburg, and
              Copenhagen, and even go to Chamonix for some snowboarding over
              Easter! <strong>Loved it, loved it, loved it.</strong> Hopefully
              one day when I'm rich I'll be able to buy a cabin in the Alps and
              go there more often lol.
            </p>
            <h4>Video under construction - stay tuned :)</h4>
          </VideoGroup>
          <VideoGroup title="Next Stop: Hong Kong 2019">
            <p>
              I'm going to be doing a study abroad to the Chinese University of
              Hong Kong next winter. I'm hoping to explore Korea, Japan, and
              different parts of Southeast Asia while I'm there, and I can't
              wait!
            </p>
          </VideoGroup>
        </MainSection>
      </React.Fragment>
    );
  }
}

export default VideoSection;
