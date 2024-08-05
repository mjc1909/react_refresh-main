import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?

const UserProfile = () => {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  const updateAge = () => {
    setUser({ age: 26, name:"Alice" });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default UserProfile;
