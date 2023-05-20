import Notification from './Notification';

export default function App() {
  const notifications = [
    {
      type: "Reaction",
      name: "Mark Webber",
      profile: "/assets/images/avatar-mark-webber.webp",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1m ago",
      unread: true,
    },
    {
      type: "Follow",
      name: "Angela Gray",
      profile: "/assets/images/avatar-angela-gray.webp",
      action: "followed you",
      time: "5m ago",
      unread: true,
    },
    {
      type: "Group",
      name: "Jacob Thompson",
      profile: "/assets/images/avatar-jacob-thompson.webp",
      action: "has joined your group",
      group: "Chess Club",
      time: "1 day ago",
      unread: true,
    },
    {
      type: "Message",
      name: "Rizky Hasanuddin",
      profile: "/assets/images/avatar-rizky-hasanuddin.webp",
      action: "sent you a private message",
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days ago",
      unread: false,
    },
    {
      type: "Comment",
      name: "Kimberly Smith",
      profile: "/assets/images/avatar-kimberly-smith.webp",
      image: "/assets/images/image-chess.webp",
      action: "commented on your picture",
      time: "1 week ago",
      unread: false,
    },
    {
      type: "Reaction",
      name: "Nathan Peterson",
      profile: "/assets/images/avatar-nathan-peterson.webp",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      unread: false,
    },
    {
      type: "Group",
      name: "Anna Kim",
      profile: "/assets/images/avatar-anna-kim.webp",
      action: "left the group",
      group: "Chess Club",
      time: "2 weeks ago",
      unread: false,
    },
  ]

  return (
    <div className="w-96">
      <div className="font-pj-sans flex justify-between">
        <h1 className="font-extrabold text-xl flex items-center gap-3">Notifications <span className="text-white text-base bg-blue px-2.5 rounded">3</span></h1>
        <button>Mark all as read</button>
      </div>

      {notifications.map(notification => {
        return <Notification key={crypto.randomUUID()} notification={notification} />
      })}
    </div>
  );
}