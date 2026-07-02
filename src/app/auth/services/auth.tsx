export interface RegisterDto {
  number: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterDto) {
  const response = await fetch(
    "https://crudcrud.com/api/83ea1737d4d94e4d9f1edaf660ad2a7a/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("ثبت نام ناموفق بود");
  }

  return response.json();
}
export async function getUsers() {
  const res = await fetch(
    "https://crudcrud.com/api/83ea1737d4d94e4d9f1edaf660ad2a7a/users"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}