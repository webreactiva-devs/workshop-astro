export async function get({ params, request }) {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json()
  const randomUser = data.results[0];
  return {
    body: JSON.stringify({
      name: randomUser.name.first,
      surname: randomUser.name.last,
      location: randomUser.location.city,
    }),
  };
}