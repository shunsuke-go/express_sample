/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prisma = exports.app = void 0;
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const users_1 = __webpack_require__(/*! ./routes/users */ "./routes/users.ts");
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
exports.app = (0, express_1.default)();
exports.prisma = new client_1.PrismaClient();
const PORT = 3001;
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use('/users', users_1.router);
try {
    exports.app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`);
    });
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
}


/***/ }),

/***/ "./routes/users.ts":
/*!*************************!*\
  !*** ./routes/users.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.router = void 0;
const UserService_1 = __webpack_require__(/*! ../services/UserService */ "./services/UserService.ts");
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
exports.router = express_1.default.Router();
exports.router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield UserService_1.UserService.getUser();
    return res.status(200).send({
        users: allUsers.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }))
    });
}));


/***/ }),

/***/ "./services/UserService.ts":
/*!*********************************!*\
  !*** ./services/UserService.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma = new client_1.PrismaClient();
class UserService {
    static getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findMany();
        });
    }
}
exports.UserService = UserService;


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkM7QUFDN0MsK0VBQXVDO0FBQ3ZDLGlGQUFpRTtBQUVwRCxXQUFHLEdBQWdCLHFCQUFPLEdBQUU7QUFDNUIsY0FBTSxHQUFHLElBQUkscUJBQVksRUFBRTtBQUV4QyxNQUFNLElBQUksR0FBRyxJQUFJO0FBQ2pCLFdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixXQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0MsV0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBTSxDQUFDO0FBRXpCLElBQUk7SUFDRixXQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsSUFBSSxHQUFHLENBQUM7SUFDakUsQ0FBQyxDQUFDO0NBQ0g7QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNWLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRTtRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDekI7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsc0dBQXFEO0FBQ3JELGlGQUFvRDtBQUV2QyxjQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUU7QUFFdEMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxJQUFhLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDckQsTUFBTSxRQUFRLEdBQUcsTUFBTSx5QkFBVyxDQUFDLE9BQU8sRUFBRTtJQUM1QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFCLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0tBQ0osQ0FBQztBQUNKLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRiw2RUFBNkM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxFQUFFO0FBQ2pDLE1BQWEsV0FBVztJQUN0QixNQUFNLENBQU8sT0FBTzs7WUFDbEIsT0FBTyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3JDLENBQUM7S0FBQTtDQUNGO0FBSkQsa0NBSUM7Ozs7Ozs7Ozs7O0FDUEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3JvdXRlcy91c2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9Vc2VyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXMvdXNlcnMnXG5pbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5leHBvcnQgY29uc3QgYXBwOiBBcHBsaWNhdGlvbiA9IGV4cHJlc3MoKVxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBQT1JUID0gMzAwMVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKCcvdXNlcnMnLCByb3V0ZXIpXG5cbnRyeSB7XG4gIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkZXYgc2VydmVyIHJ1bm5pbmcgYXQ6IGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfS9gKVxuICB9KVxufSBjYXRjaCAoZSkge1xuICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gIH1cbn0iLCJpbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL1VzZXJTZXJ2aWNlJ1xuaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKF9yZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCBVc2VyU2VydmljZS5nZXRVc2VyKClcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICB1c2VyczogYWxsVXNlcnMubWFwKHVzZXIgPT4gKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSkpXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgc3RhdGljIGFzeW5jIGdldFVzZXIoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KClcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=