import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?

const Message = () => {
  const [message, setMessage] = useState(() => "Hello, World!");

  return <p>{message}</p>;
};

export default Message;


