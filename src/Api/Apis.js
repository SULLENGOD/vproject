const createUserApi = async (createUser) => {
    let response  = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(createUser),
    });
    return response;
}

export {createUserApi}