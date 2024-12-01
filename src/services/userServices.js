const createUser = async (name, user_type, password) => {
  try {
    const response = await fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, user_type, password }),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.statusText);
    }

    const data = await response.json();
    console.log("Usuário criado com sucesso:", data);

    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);
    throw error;
  }
};
