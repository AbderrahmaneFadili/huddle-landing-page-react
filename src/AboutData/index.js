import theme from "../themes/theme";

export const aboutOne = {
  padding: false,
  imgStart: false,
  bgColor: theme.colors.VeryPaleBlue,
  aboutImage: require("../images/illustration-grow-together.svg").default,
  aboutTitle: "Grow Together",
  aboutDescription: `Generate meaningful discussions with your audience and build a strong, loyal community.
Think of the insightful conversations you miss out on with a feedback form.`,
  aboutTopMobilePattern: require("../images/bg-section-top-mobile-1.svg")
    .default,
  aboutTopDesktopPattern: require("../images/bg-section-top-desktop-1.svg")
    .default,
  aboutBottomMobilePattern: require("../images/bg-section-bottom-mobile-1.svg")
    .default,
  aboutBottomDesktopPattern: require("../images/bg-section-bottom-desktop-1.svg")
    .default,
};

export const aboutTwo = {
  padding: true,
  imgStart: true,
  bgColor: "white",
  aboutImage: require("../images/illustration-flowing-conversation.svg")
    .default,
  aboutTitle: "Flowing Conversations",
  aboutDescription: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have
just-in-time loading for a more natural flow.`,
  aboutTopMobilePattern: null,
  aboutTopDesktopPattern: null,
  aboutBottomMobilePattern: null,
  aboutBottomDesktopPattern: null,
};

export const aboutThree = {
  bgColor: theme.colors.VeryPaleBlue,
  aboutImage: require("../images/illustration-your-users.svg").default,
  aboutTitle: "Your Users",
  aboutDescription: `It takes no time at all to integrate Huddle with your app's authentication solution. This means,
once signed in to your app, your users can start chatting immediately.`,
  aboutTopMobilePattern: require("../images/bg-section-top-mobile-2.svg")
    .default,
  aboutTopDesktopPattern: require("../images/bg-section-top-desktop-2.svg")
    .default,
  aboutBottomMobilePattern: require("../images/bg-section-bottom-mobile-2.svg")
    .default,
  aboutBottomDesktopPattern: require("../images/bg-section-bottom-desktop-2.svg")
    .default,
  padding: false,
};
