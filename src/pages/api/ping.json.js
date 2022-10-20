export async function get({ params, request }) {
  return {
    body: JSON.stringify({
      pong: true,
      message: 'Te mando un pong'
    }),
  };
}
