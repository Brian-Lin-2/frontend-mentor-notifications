function Reaction({ notification }) {
  return (
    <div className="flex p-3 border items-start gap-3 leading-5">
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue"><span className="font-bold text-black pr-0.5">{notification.name}</span> {notification.action} <span className="font-bold pl-0.5">{notification.post}</span></p>
        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Follow({ notification }) {
  return (
    <div className="flex p-3 border items-start gap-3 leading-5">
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue"><span className="font-bold text-black pr-0.5">{notification.name}</span> {notification.action}</p>
        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Group({ notification }) {
  return (
    <div className="flex p-3 border items-start gap-3 leading-5">
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue"><span className="font-bold text-black pr-0.5">{notification.name}</span> {notification.action} <span className="text-blue font-bold">{notification.group}</span></p>
        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>
    </div>
  );
}

function Comment({ notification }) {
  return (
    <div className="flex p-3 border items-start gap-3 leading-5">
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue"><span className="font-bold text-black pr-0.5">{notification.name}</span> {notification.action}</p>
        <footer className="text-grayish-blue">{notification.time}</footer>
      </div>

      <img className="w-10" src={notification.image} />
    </div>
  );
}

function Message({ notification }) {
  return (
    <div className="flex p-3 border items-start gap-3 leading-5">
      <img className="w-10" src={notification.profile} />
      
      <div>
        <p className="text-dark-grayish-blue"><span className="font-bold text-black pr-0.5">{notification.name}</span> {notification.action}</p>
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