import create from "zustand";

const userStore = create(set => ({
    typeLogin: "normal",
    username: "",
    password: "",

    setTypeLogin: (type) => set(({ typeLogin: type })),
    setAccount: (username, password) => set(({username: username, password: password})),
}))

export default userStore