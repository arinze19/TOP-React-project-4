import errorMessage from './ErrorMessage';

export default async function asyncCall(prop, body) {
  const response = await fetch(
    `https://react-project-4-api.herokuapp.com/api/v1/auth/${prop}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    alert(errorMessage(response.status));
    return false
  }

  const { data } = await response.json();
  return data;
}
