var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function populateTemplate(users, posts) {
    return __awaiter(this, void 0, void 0, function () {
        var userContainer;
        return __generator(this, function (_a) {
            userContainer = document.getElementById('userContainer');
            if (!userContainer) {
                return [2 /*return*/];
            }
            userContainer.innerHTML = ''; // Clear previous content
            users.forEach(function (user) {
                var userPosts = posts.filter(function (post) { return post.userId === user.id; });
                var postListItems = userPosts.map(function (post) { return "<li>".concat(post.title, "</li>"); }).join('');
                var userTemplate = "\n        <div class=\"max-w-md w-[33%] mb-4 mx-auto bg-gray-100 rounded-md overflow-hidden shadow-md\">\n          <div class=\"p-4\">\n            <h2 class=\"text-xl font-bold mb-2 text-yellow-500\">".concat(user.name, "</h2>\n            <p class=\"text-gray-600 mb-4\">").concat(user.email, "</p>\n            <h3 class=\"text-gray-600 mb-4\">").concat(user.username, "</h3>\n            <h3 class=\"text-xl font-bold mb-2 text-yellow-500\">Posts</h3>\n            <ul class=\"list-disc pl-4\">").concat(postListItems, "</ul>\n          </div>\n        </div>\n      ");
                userContainer.innerHTML += userTemplate;
            });
            return [2 /*return*/];
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var filterForm = document.getElementById('filterForm');
    if (filterForm) {
        filterForm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var titre, author, users, posts, filteredUsers, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        titre = document.getElementById('inline-titre').value.toLowerCase();
                        author = document.getElementById('author').value.toLowerCase();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetchUsers()];
                    case 2:
                        users = _a.sent();
                        return [4 /*yield*/, fetchPosts()];
                    case 3:
                        posts = _a.sent();
                        filteredUsers = users.filter(function (user) {
                            return user.name.toLowerCase().includes(titre) &&
                                user.username.toLowerCase().includes(author);
                        });
                        populateTemplate(filteredUsers, posts);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Error fetching data:', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
});
// Initial population of the template
populateTemplate([], []);
