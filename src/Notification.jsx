function Reaction({ notification }) {
  return (
    <>
      <img src={notification.profile} />
      
      <div>
        <p><span>{notification.name}</span> {notification.action} <span>{notification.post}</span></p>
        <footer>{notification.time}</footer>
      </div>
    </>
  );
}

function Follow({ notification }) {
  return (
    <>
      <img src={notification.profile} />
      
      <div>
        <p><span>{notification.name}</span> {notification.action}</p>
        <footer>{notification.time}</footer>
      </div>
    </>
  );
}

function Group({ notification }) {
  return (
    <>
      <img src={notification.profile} />
      
      <div>
        <p><span>{notification.name}</span> {notification.action} <span>{notification.group}</span></p>
        <footer>{notification.time}</footer>
      </div>
    </>
  );
}

function Comment({ notification }) {
  return (
    <>
      <img src={notification.profile} />
      
      <div>
        <p><span>{notification.name}</span> {notification.action}</p>
        <footer>{notification.time}</footer>
      </div>

      <img src={notification.image} />
    </>
  );
}

function Message({ notification }) {
  return (
    <>
      <img src={notification.profile} />
      
      <div>
        <p><span>{notification.name}</span> {notification.action}</p>
        <footer>{notification.time}</footer>
      </div>

      <p>{notification.message}</p>
    </>
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