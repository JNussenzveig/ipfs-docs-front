"use strict";
exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 8131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ AuthProvider),
/* harmony export */   "aC": () => (/* binding */ useAuth)
/* harmony export */ });
/* unused harmony export AuthContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const defaultUserState = {
    id: null,
    email: '',
    username: ''
};
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AuthProvider({ children  }) {
    const { 0: token1 , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultUserState);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const authenticated = user1.id && token1;
    const listErrors = (messages)=>{
        return (messages || errors).map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full py-4 px-4 rounded border-red-400 border bg-red-200 mb-5",
                children: message.message
            })
        );
    };
    const fetchSession = ()=>{
        const session = localStorage.getItem('_session');
        const userSession = session ? JSON.parse(session) : null;
        if (userSession) {
            setToken(userSession.token);
            setUser(userSession.user);
        } else {
            setToken(null);
            setUser(defaultUserState);
        }
    };
    const saveSession = (data)=>{
        const { user , token  } = data;
        localStorage.setItem('_session', JSON.stringify({
            user,
            token
        }));
        fetchSession();
    };
    const signIn = async (email, password)=>{
        setLoading(true);
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/auth/login', {
                email: email,
                password
            });
            saveSession(data);
            setLoading(false);
        } catch (error) {
            console.log('auth error', error);
            console.log(error.response.data.data[0]);
            setErrors(error.response.data.data[0].messages);
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchSession();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            saveSession,
            signIn,
            listErrors,
            user: user1,
            token: token1,
            isAuthenticated: authenticated,
            errors,
            loading
        },
        children: children
    }));
}
function useAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}



/***/ }),

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8131);



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthProvider */ .Ho, {
        ...pageProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/Gm5or_KLE03ie1swG3qIE/_buildManifest.js","static/Gm5or_KLE03ie1swG3qIE/_ssgManifest.js","static/Gm5or_KLE03ie1swG3qIE/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-eab312c0bf2a7270.js","static/chunks/944-a34faae1c441a2d1.js","static/chunks/pages/index-bd3c5b46b95c1182.js"],"/_app":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-eab312c0bf2a7270.js","static/css/5cb257d87d455ebc.css","static/chunks/pages/_app-e11d7e1d6168fe61.js"],"/_error":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-eab312c0bf2a7270.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/auth/login":["static/chunks/webpack-514908bffb652963.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-eab312c0bf2a7270.js","static/chunks/pages/auth/login-a5d4bbdacc5abd6a.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;