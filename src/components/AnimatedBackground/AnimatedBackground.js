import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import { Switch } from "antd";

import Burger from "assets/burger3.png";
import Fries from "assets/fries2.png";

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 99%;
`;

const CheatDay = styled.div`
  position: fixed;
  right: ${props => props.theme.padding.twentyFour};
  bottom: ${props => props.theme.padding.twentyFour};
`;

const CheatDaySwitch = styled(Switch)`
  margin-left: ${props => props.theme.padding.eight};
`;

class AnimatedBackground extends React.Component {
  state = {
    isCheatDay: false
  };

  toggleCheatDay = () => {
    this.setState({ isCheatDay: !this.state.isCheatDay });
  };

  render() {
    const FloatingFood = this.state.isCheatDay ? Fries : Burger;
    const StartingValueMultiplier = window.innerWidth > 500 ? 2 : 0.5;
    const StartingValue = this.state.isCheatDay
      ? 25 * StartingValueMultiplier
      : 15 * StartingValueMultiplier;
    return (
      <React.Fragment>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: StartingValue
              },
              shape: {
                type: "image",
                image: {
                  src: FloatingFood
                }
              },
              color: {
                value: ["#3CC157", "#2AA7FF", "#171717", "#f4a142", "#ed421c"]
              },
              size: {
                value: 20,
                random: true
              },
              line_linked: {
                emable: false
              },
              move: {
                speed: 6
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab", "repulse"]
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 3
                },
                push: {
                  particles_nb: 2,
                  distance: 50
                }
              }
            },
            retina_detect: true
          }}
        />
        <CheatDay>
          Cheat Day
          <CheatDaySwitch
            defaultChecked={false}
            onChange={this.toggleCheatDay}
          />
        </CheatDay>
      </React.Fragment>
    );
  }
}

export default AnimatedBackground;
