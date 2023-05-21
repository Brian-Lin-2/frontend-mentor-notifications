function Activity({ notification }) {
  let style = "flex p-4 m-3 items-start gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-4 m-3 items-start gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <img className="w-10" src={notification.profile} alt="" />
      
      <div>
        <div className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span>
          {notification.action}
          <span className="font-bold pl-1.5 lg:hover:text-blue lg:hover:cursor-pointer">{notification.activity}</span>
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </div>

        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Follow({ notification }) {
  let style = "flex p-4 m-3 items-start gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-4 m-3 items-start gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <img className="w-10" src={notification.profile} alt="" />
      
      <div>
        <div className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span> 
          {notification.action}
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </div>

        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Comment({ notification }) {
  let style = "flex p-3 m-3 items-start justify-between gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-3 m-3 items-start justify-between gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <div className="flex items-center gap-3">
        <img className="w-10" src={notification.profile} alt="" />
        
        <div>
          <div className="text-dark-grayish-blue">
            <span className="font-bold text-black pr-1.5">{notification.name}</span>
            {notification.action}
            {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
          </div>

          <footer className="text-grayish-blue">{notification.time}</footer>
        </div>
      </div>

      <img className="w-10 border-2 border-white lg:hover:cursor-pointer lg:hover:border-l-grayish-blue-1 lg:hover:rounded-lg" src={notification.image} />
    </div>
  );
}

function Message({ notification }) {
  let style = "flex p-4 m-3 items-start gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-4 m-3 items-start gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <img className="w-10" src={notification.profile} alt="" />
      
      <div>
        <div className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span>
          {notification.action}
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </div>

        <footer className="text-grayish-blue">{notification.time}</footer>
        <p className="text-dark-grayish-blue border p-4 mt-3 rounded lg:hover:bg-l-grayish-blue-1 lg:hover:cursor-pointer lg:hover:border-l-grayish-blue-1">{notification.message}</p>
      </div>
    </div>
  );
}

export default function Notification({ notification }) {
  if (notification.type == 'Activity') {
    return <Activity notification={notification} />
  }

  else if (notification.type == 'Follow') {
    return <Follow notification={notification} />
  }
  
  else if (notification.type == 'Comment') {
    return <Comment notification={notification} />
  }

  else if (notification.type == 'Message') {
    return <Message notification={notification} />
  }
}