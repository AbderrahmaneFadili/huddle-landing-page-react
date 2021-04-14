import React from "react";
import {
  CommunitiesContainer,
  CommunitiesWrapper,
  Community,
  CommunityCount,
  CommunityIcon,
  CommunityInfo,
} from "./CommunitiesSection.styles";

import Fade from "react-reveal/Fade";

const CommunitiesSection = () => {
  return (
    <CommunitiesWrapper>
      <CommunitiesContainer>
        <Fade>
          <Community>
            <CommunityIcon
              src={require("../../images/icon-communities.svg").default}
            />
            <CommunityCount>1.4k+</CommunityCount>
            <CommunityInfo>Communities Formed</CommunityInfo>
          </Community>
        </Fade>

        <Fade>
          <Community>
            <CommunityIcon
              src={require("../../images/icon-messages.svg").default}
            />
            <CommunityCount>2.7m+</CommunityCount>
            <CommunityInfo>Messages Sent</CommunityInfo>
          </Community>
        </Fade>
      </CommunitiesContainer>
    </CommunitiesWrapper>
  );
};

export default CommunitiesSection;
