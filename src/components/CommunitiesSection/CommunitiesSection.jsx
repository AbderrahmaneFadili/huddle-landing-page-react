import React from "react";
import {
  CommunitiesContainer,
  CommunitiesWrapper,
  Community,
  CommunityCount,
  CommunityIcon,
  CommunityInfo,
} from "./CommunitiesSection.styles";
const CommunitiesSection = () => {
  return (
    <CommunitiesWrapper>
      <CommunitiesContainer>
        <Community>
          <CommunityIcon
            src={require("../../images/icon-communities.svg").default}
          />
          <CommunityCount>1.4k+</CommunityCount>
          <CommunityInfo>Communities Formed</CommunityInfo>
        </Community>

        <Community>
          <CommunityIcon
            src={require("../../images/icon-messages.svg").default}
          />
          <CommunityCount>2.7m+</CommunityCount>
          <CommunityInfo>Messages Sent</CommunityInfo>
        </Community>
      </CommunitiesContainer>
    </CommunitiesWrapper>
  );
};

export default CommunitiesSection;
