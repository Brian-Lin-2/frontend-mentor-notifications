export default function App() {
  const notifications = [
    {
      name: "Mark Webber",
      profile: "/assets/images/avatar-mark-webber.webp",
      action: "reacted to your recent post My first tournament today!",
      time: "1m ago",
    },
    {
      name: "Angela Gray",
      profile: "/assets/images/avatar-angela-gray.webp",
      action: "followed you",
      time: "5m ago",
    },
    {
      name: "Jacob Thompson",
      profile: "/assets/images/avatar-jacob-thompson.webp",
      action: "has joined your group Chess Club",
      time: "1 day ago",
    },
    {
      name: "Rizky Hasanuddin",
      profile: "/assets/images/avatar-rizky-hasanuddin.webp",
      action: "sent you a private message",
      time: "5 days ago",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
      name: "Kimberly Smith",
      profile: "/assets/images/avatar-kimberly-smith.webp",
      image: "/assets/images/image-chess.webp",
      action: "commented on your picture",
      time: "1 week ago",
    },
    {
      name: "Nathan Peterson",
      profile: "/assets/images/avatar-nathan-peterson.webp",
      action: "reacted to your recent post 5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
    },
    {
      name: "Anna Kim",
      profile: "/assets/images/avatar-anna-kim.webp",
      action: "left the group Chess Club",
      time: "2 weeks ago",
    },
  ]

  return (
    <>
      <div>
        <h1>Notifications <span>3</span></h1>
        <button>Mark all as read</button>
      </div>
    </>
  );
}