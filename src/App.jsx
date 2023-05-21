import Notification from './Notification';
import { useState } from 'react';

export default function App() {
  const notifications = [
    {
      type: "Activity",
      name: "Mark Webber",
      profile: "/assets/images/avatar-mark-webber.webp",
      action: "reacted to your recent post",
      activity: "My first tournament today!",
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
      type: "Activity",
      name: "Jacob Thompson",
      profile: "/assets/images/avatar-jacob-thompson.webp",
      action: "has joined your group",
      activity: "Chess Club",
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
      type: "Activity",
      name: "Nathan Peterson",
      profile: "/assets/images/avatar-nathan-peterson.webp",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      unread: false,
    },
    {
      type: "Activity",
      name: "Anna Kim",
      profile: "/assets/images/avatar-anna-kim.webp",
      action: "left the group",
      activity: "Chess Club",
      time: "2 weeks ago",
      unread: false,
    },
  ]

  const [notif, setNotif] = useState(notifications);
  let count = 0;

  notif.map(notification => notification.unread ? count++ : count);

  function handleRead() {
    setNotif(notif.map(notification => {
      return {...notification, unread: false};
    }));
  }

  return (
    <div className="lg:bg-vl-grayish-blue flex justify-center">
        <div className="lg:w-1/2 lg:bg-white lg:m-16 lg:rounded-xl lg:p-5">
        <div className="font-pj-sans flex justify-between p-3">
          <h1 className="font-extrabold text-2xl flex items-center gap-3">Notifications <span className="text-white text-base bg-blue px-2.5 rounded">{count}</span></h1>
          <button className="text-dark-grayish-blue lg:hover:text-blue" onClick={handleRead}>Mark all as read</button>
        </div>

        {notif.map(notification => {
          return <Notification key={crypto.randomUUID()} notification={notification} />
        })}
      </div>
    </div>
  );
}