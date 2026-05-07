async function getRandomUser() {
  try {
    // 1. Make the request
    const response = await fetch('https://69fa184d74c0532edfabc117.me/api/');

    // 2. Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 3. Parse the JSON data
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // 4. Catch any network or parsing errors
    console.error("Could not fetch user:", error);
  }
}

getRandomUser();