import Cookie from "js-cookie";

export const state = () => ({
  authKey: null,
  cat: null,
});

export const mutations = {
  setAuthKey(state, authKey) {
    state.authKey = authKey;
  },
  clearAuthKey(state) {
    Cookie.remove("authKey");
    Cookie.remove("expiresIn");

    if (process.client) {
      localStorage.removeItem("authKey");
      localStorage.removeItem("expiresIn");
    }

    state.authKey = null;
  },
  setCat(state, cat) {
    state.cat = cat;
  },
};

export const actions = {
  initAuth({ commit }, req) {
    let token;
    let expiresIn;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      // Cookie üzerinden Token elde ediyoruz..
      token = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("authKey="));
      if (token) {
        token = token.split("=")[1];
      }
      expiresIn = req.headers.cookie
        .split(";")
        .find((e) => e.trim().startsWith("expiresIn="));
      if (expiresIn) {
        expiresIn = expiresIn.split("=")[1];
      }
    } else {
      token = localStorage.getItem("authKey");
      expiresIn = localStorage.getItem("expiresIn");
    }

    if (new Date().getTime() > +expiresIn || !token) {
      commit("clearAuthKey");
    }

    commit("setAuthKey", token);
  },
  login({ commit }, data) {
    const loginUrl = process.env.firebaseLoginUrl + process.env.firebaseApiKey;

    return this.$axios
      .post(loginUrl, {
        email: data.user.email,
        password: data.user.password,
        returnSecureToken: true,
      })
      .then((response) => {
        if (response?.data?.idToken) {
          const expiresIn =
            new Date().getTime() + +response.data.expiresIn * 1000;

          Cookie.set("authKey", response.data.idToken);
          Cookie.set("expiresIn", expiresIn);

          localStorage.setItem("authKey", response.data.idToken);
          localStorage.setItem("expiresIn", expiresIn);

          commit("setAuthKey", response.data.idToken);
        }
      });
  },
  logout({ commit }) {
    commit("clearAuthKey");
  },
  getRandomCat({ commit }) {
    return this.$axios.get(process.env.randomCatUrl).then((response) => {
      commit("setCat", response.data);
      return response.data;
    });
  },
};

export const getters = {
  isAuth(state) {
    return state.authKey !== null;
  },
  getAuthKey(state) {
    return state.authKey;
  },
  getCat(state) {
    return state.cat;
  },
};
