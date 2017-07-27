document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var extension = {
            API: 'http://<<<O>>>HOST<<<O>>>/api',
            API_LOGIN: '/service/login',
            API_ARCHIVE: '/archive/extensions',
            KEY: 'JOME_TOKEN',
            TOKEN: null,
            $status: null,
            $title: null,
            $archives: null,
            $btnLogin: null,
            $btnAdd: null,
            $btnRev: null,
            $loader: null,
            $login: null,
            $password: null,
            $divTitle: null,
            $divLogin: null,
            $divPassword: null,
            $divArchive: null,
            init: null,
            getDataTab: null,
            setupElements: null,
            setupEvents: null,
            getToken: null,
            setToken: null,
            revToken: null,
            httpService: null,
            loadingON: null,
            loadingOFF: null,
            loginState: null,
            readyState: null,
            afterFetchArchive: null
        };
        extension.init = function () {
            this.TOKEN = this.getToken();
            this.setupElements();
            this.setupEvents();
            if (this.TOKEN) {
                this.readyState();
            }
            else {
                this.loginState();
            }
            console.warn('INIT_EXTENSION');
        };
        extension.afterFetchArchive = function (archiveData) {
            for (var i = 0; i < archiveData.length; ++i) {
                var option = document.createElement("option");
                option.setAttribute("value", archiveData[i].value);
                option.innerHTML = archiveData[i].name;
                extension.$archives.appendChild(option);
            }
            if (localStorage.getItem('lastArchive'))
                extension.$archives.value = localStorage.getItem('lastArchive');
            extension.loadingOFF('Ready');
        };
        extension.getDataTab = function (callback) {
            chrome.tabs.getSelected(null, function (tab) {
                if (callback)
                    callback({ title: tab.title, url: tab.url });
            });
        };
        extension.loginState = function () {
            this.$divTitle.style.display = "none";
            this.$divArchive.style.display = "none";
            this.$btnAdd.style.display = "none";
            this.$btnRev.style.display = "none";
            this.$btnLogin.style.display = "block";
            this.$divLogin.style.display = "block";
            this.$divPassword.style.display = "block";
            extension.loadingOFF('Please login');
        };
        extension.readyState = function () {
            this.$divTitle.style.display = "block";
            this.$divArchive.style.display = "block";
            this.$btnAdd.style.display = "block";
            this.$btnRev.style.display = "block";
            this.$btnLogin.style.display = "none";
            this.$divLogin.style.display = "none";
            this.$divPassword.style.display = "none";
            extension.httpService({
                url: extension.API + extension.API_ARCHIVE,
                method: 'get',
                callback: extension.afterFetchArchive
            });
        };
        extension.setupElements = function () {
            extension.$status = document.getElementById('statusSpan');
            extension.$title = document.getElementById('titleInput');
            extension.$archives = document.getElementById('archivesSelect');
            extension.$btnLogin = document.getElementById('loginButton');
            extension.$btnAdd = document.getElementById('addButton');
            extension.$btnRev = document.getElementById('revButton');
            extension.$loader = document.getElementById('loadingImg');
            extension.$login = document.getElementById('loginInput');
            extension.$password = document.getElementById('passwordInput');
            extension.$divTitle = document.getElementById('titleDiv');
            extension.$divLogin = document.getElementById('loginDiv');
            extension.$divPassword = document.getElementById('passwordDiv');
            extension.$divArchive = document.getElementById('archiveDiv');
        };
        extension.setupEvents = function () {
            this.$btnLogin.addEventListener("click", function () {
                if (!extension.$login.value || !extension.$password.value)
                    return;
                extension.loadingON();
                extension.httpService({
                    url: extension.API + extension.API_LOGIN,
                    method: 'post',
                    withoutAuthorization: true,
                    params: {
                        'login': extension.$login.value,
                        'password': extension.$password.value
                    },
                    callback: function (response) {
                        if (response.type) {
                            extension.loadingON();
                            extension.setToken(response.data.token);
                            extension.readyState();
                        }
                        else {
                            extension.loadingOFF('Wrong Auth');
                        }
                    }
                });
            });
            this.$btnAdd.addEventListener("click", function () {
                extension.loadingON();
                extension.getDataTab(function (tabData) {
                    extension.httpService({
                        url: extension.API + extension.API_ARCHIVE + '/' + extension.$archives.value,
                        method: 'post',
                        params: {
                            title: (extension.$title.value) ? (extension.$title.value) : (tabData.title),
                            link: tabData.url
                        },
                        callback: function (response) {
                            if (response.type === 'NOTE_ADDED') {
                                localStorage.setItem('lastArchive', extension.$archives.value);
                                extension.loadingOFF('Added');
                            }
                        }
                    });
                });
            });
            this.$btnRev.addEventListener("click", function () {
                extension.revToken();
                extension.loginState();
            });
        };
        extension.setToken = function (token) {
            localStorage.setItem(this.KEY, token);
        };
        extension.getToken = function () {
            try {
                return localStorage.getItem(this.KEY);
            }
            catch (error) {
                console.log(error.toString());
                return null;
            }
        };
        extension.revToken = function () {
            localStorage.removeItem(this.KEY);
        };
        extension.loadingON = function () {
            this.$loader.style.display = "block";
            this.$status.style.display = "none";
        };
        extension.loadingOFF = function (status) {
            this.$loader.style.display = "none";
            this.$status.style.display = "block";
            this.$status.innerHTML = status;
        };
        extension.httpService = function (params) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                try {
                    if (params.callback)
                        params.callback(this.response);
                }
                catch (error) {
                    console.log(error.toString());
                }
            };
            xhr.open(params.method, params.url);
            if (!params.withoutAuthorization)
                xhr.setRequestHeader('Authorization', extension.TOKEN);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.responseType = "json";
            xhr.send(JSON.stringify(params.params));
        };
        extension.init();
    })();
});

//# sourceMappingURL=main.js.map
