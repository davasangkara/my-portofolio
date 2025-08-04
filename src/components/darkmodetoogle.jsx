import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
