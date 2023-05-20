function Reaction({ notification }) {
  let style = "flex p-4 m-3 items-start gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-4 m-3 items-start gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span>
          {notification.action}
          <span className="font-bold pl-1.5">{notification.post}</span>
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </p>

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
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span> 
          {notification.action}
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </p>

        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Group({ notification }) {
  let style = "flex p-4 m-3 items-start gap-3 leading-5";

  if (notification.unread) {
    style = "flex p-4 m-3 items-start gap-3 leading-5 bg-vl-grayish-blue rounded-lg"
  }

  return (
    <div className={style}>
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span> 
          {notification.action} 
          <span className="text-blue font-bold ml-1.5">{notification.group}</span>
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </p>

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
        <img className="w-10" src={notification.profile} />
        
        <div>
          <p className="text-dark-grayish-blue">
            <span className="font-bold text-black pr-1.5">{notification.name}</span>
            {notification.action}
            {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
          </p>

          <footer className="text-grayish-blue">{notification.time}</footer>
        </div>
      </div>

      <img className="w-10" src={notification.image} />
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
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue">
          <span className="font-bold text-black pr-1.5">{notification.name}</span>
          {notification.action}
          {notification.unread && <div className="ml-1.5 w-2.5 h-2.5 bg-red rounded-full inline-block"></div>}
        </p>

        <footer className="text-grayish-blue">{notification.time}</footer>
        <p className="text-dark-grayish-blue border p-3 mt-3">{notification.message}</p>
      </div>
    </div>
  );
}

export default function Notification({ notification }) {
  if (notification.type == 'Reaction') {
    return <Reaction notification={notification} />
  }

  else if (notification.type == 'Follow') {
    return <Follow notification={notification} />
  }

  else if (notification.type == 'Group') {
    return <Group notification={notification} />
  }
  
  else if (notification.type == 'Comment') {
    return <Comment notification={notification} />
  }

  else if (notification.type == 'Message') {
    return <Message notification={notification} />
  }
}