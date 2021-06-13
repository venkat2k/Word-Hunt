(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-homepage-module"],{

/***/ "1qeb":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/components/leaderboard/leaderboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LeaderboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) { return new (t || LeaderboardComponent)(); };
LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderboardComponent, selectors: [["app-leaderboard"]], decls: 1, vars: 0, consts: [[1, "leaderboard"]], template: function LeaderboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".leaderboard[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 40vw;\n  z-index: 1;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWRlcmJvYXJkIHtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Jc7R":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ "Oh3b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵfac = function HomepageRoutingModule_Factory(t) { return new (t || HomepageRoutingModule)(); };
HomepageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomepageRoutingModule });
HomepageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_gameplay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/gameplay.service */ "eokQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function HomepageComponent_app_rules_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-rules");
} }
function HomepageComponent_app_leaderboard_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-leaderboard");
} }
function HomepageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What's your name?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.playerName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "START");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.playerName);
} }
class HomepageComponent {
    constructor(gameplayService, router) {
        this.gameplayService = gameplayService;
        this.router = router;
        this.showRules = false;
        this.showLeaderboard = false;
        this.startPlay = false;
        this.playerName = '';
    }
    ngOnInit() {
    }
    test() {
        console.log(this.showRules);
    }
    startGame() {
        localStorage.setItem('playerName', this.playerName);
        this.gameplayService.getGameDetails().subscribe((data) => {
            let gameId = data["gameId"];
            this.router.navigate(['play/' + gameId.toString()]);
        });
    }
    closeRules() {
        this.showRules = false;
    }
    hideBackground() {
        let container = Array.from(document.getElementsByClassName("cardContainer"));
        container[0].style.filter = 'blur(2em)';
        container[0].style.pointerEvents = 'none';
        let rulesContainer = Array.from(document.getElementsByClassName("rulesContainer"));
        rulesContainer[0].style.display = 'block';
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_gameplay_service__WEBPACK_IMPORTED_MODULE_1__["GameplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 7, vars: 3, consts: [[1, "cardContainer"], ["id", "rulesCard", "cardTitle", "RULES", "cardIcon", "fa fa-list", 3, "click"], ["id", "playCard", "cardTitle", "PLAY", "cardIcon", "fa fa-play", 3, "click"], ["id", "leaderboardCard", "cardTitle", "STANDINGS", "cardIcon", "fa fa-trophy", 3, "click"], [4, "ngIf"], ["class", "popupContainer", 4, "ngIf"], [1, "popupContainer"], [1, "playerDetails"], ["type", "text", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_app_card_click_1_listener() { ctx.showRules = true; return ctx.hideBackground(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_app_card_click_2_listener() { ctx.startPlay = true; return ctx.hideBackground(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_app_card_click_3_listener() { ctx.showLeaderboard = true; return ctx.hideBackground(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomepageComponent_app_rules_4_Template, 1, 0, "app-rules", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomepageComponent_app_leaderboard_5_Template, 1, 0, "app-leaderboard", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomepageComponent_div_6_Template, 7, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLeaderboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startPlay);
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: #121212;\n  font-size: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 2.1em;\n  width: 4.5em;\n  border-radius: 0.3em;\n  background-color: #404040;\n  border: 0;\n  color: #abb3ac;\n  font-weight: bold;\n  box-shadow: 0 0 0.125em white;\n  cursor: pointer;\n  font-size: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0.35em #abb3ac;\n  text-shadow: 0 0 0.0625em #abb3ac;\n}\n\n.cardContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: -webkit-min-content;\n  height: min-content;\n  width: -webkit-min-content;\n  width: min-content;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\n[_nghost-%COMP%]     #playCard > .card {\n  border-color: #34eb3a;\n  color: #34eb3a;\n  box-shadow: 0 0 0.3em #34eb3a, inset 0 0 0.3em #34eb3a;\n}\n\n[_nghost-%COMP%]     #rulesCard > .card {\n  border-color: #f73f23;\n  color: #f73f23;\n  box-shadow: 0 0 0.3em #f73f23, inset 0 0 0.3em #f73f23;\n}\n\n[_nghost-%COMP%]     #leaderboardCard > .card {\n  border-color: #427ef5;\n  color: #427ef5;\n  box-shadow: 0 0 0.3em #427ef5, inset 0 0 0.3em #427ef5;\n}\n\n[_nghost-%COMP%]     #playCard > .card::before, [_nghost-%COMP%]     #rulesCard > .card::before, [_nghost-%COMP%]     #leaderboardCard > .card::before {\n  pointer-events: none;\n  content: \"\";\n  position: absolute;\n  top: 85%;\n  bottom: 0;\n  width: 50%;\n  height: 50%;\n  transform: perspective(3em) rotateX(75deg) scale(1, 0.35);\n  filter: blur(1.5em);\n}\n\n[_nghost-%COMP%]     #playCard > .card::before {\n  background-color: #34eb3a;\n}\n\n[_nghost-%COMP%]     #rulesCard > .card::before {\n  background-color: #f73f23;\n}\n\n[_nghost-%COMP%]     #leaderboardCard > .card::before {\n  background-color: #427ef5;\n}\n\n[_nghost-%COMP%]     #playCard > .card:hover, [_nghost-%COMP%]     #rulesCard > .card:hover, [_nghost-%COMP%]     #leaderboardCard > .card:hover {\n  text-shadow: none;\n  color: #121212;\n}\n\n[_nghost-%COMP%]     #playCard > .card:hover {\n  background-color: #34eb3a;\n}\n\n[_nghost-%COMP%]     #rulesCard > .card:hover {\n  background-color: #f73f23;\n}\n\n[_nghost-%COMP%]     #leaderboardCard > .card:hover {\n  background-color: #427ef5;\n}\n\n.playerDetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: inherit;\n  height: 12rem;\n  width: 25rem;\n  background-color: #282828;\n  color: #abb3ac;\n  border-radius: 1rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n}\n\n.playerDetails[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 15em;\n  margin-top: 1em;\n  margin-bottom: 1.5em;\n  background-color: #404040;\n  padding: 0.2em;\n  padding-left: 0.4em;\n  color: white;\n  outline: none;\n  font-size: 1.2rem;\n}\n\n.playerDetails[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0kseUJBWE07RUFZTixlQUFBO0VBQ0EsMkRBQUE7QUNUSjs7QURZQTtFQUNJLFVBQUE7QUNUSjs7QURhQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFuQlE7RUFvQlIsU0FBQTtFQUNBLGNBdkJVO0VBd0JWLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhQTtFQUNJLDhCQUFBO0VBQ0EsaUNBQUE7QUNWSjs7QUF4QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUEwQko7O0FBeEJBO0VBQ0kscUJEZk87RUNnQlAsY0RoQk87RUNpQlAsc0RBQ0k7QUEwQlI7O0FBdEJBO0VBQ0kscUJEdEJRO0VDdUJSLGNEdkJRO0VDd0JSLHNEQUNJO0FBd0JSOztBQXBCQTtFQUNJLHFCRDdCYztFQzhCZCxjRDlCYztFQytCZCxzREFDSTtBQXNCUjs7QUFsQkE7OztFQUdJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsbUJBQUE7QUFxQko7O0FBbEJBO0VBQ0kseUJEckRPO0FDMEVYOztBQW5CQTtFQUNJLHlCRHZEUTtBQzZFWjs7QUFwQkE7RUFDSSx5QkR6RGM7QUNnRmxCOztBQUpBOzs7RUFHSSxpQkFBQTtFQUNBLGNEbkZNO0FDMEZWOztBQUpBO0VBQ0kseUJEdEZPO0FDNkZYOztBQUxBO0VBQ0kseUJEeEZRO0FDZ0daOztBQU5BO0VBQ0kseUJEMUZjO0FDbUdsQjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRGxHWTtFQ21HWixjRHBHVTtFQ3FHVixtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVNKOztBQU5BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkRsSFE7RUNtSFIsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVNKOztBQU5BO0VBQ0ksMkJBQUE7QUFTSiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZ0NvbG9yOiAjMTIxMjEyO1xuJHBsYXlDYXJkOiAjMzRlYjNhO1xuJHJ1bGVzQ2FyZDogI2Y3M2YyMztcbiRsZWFkZXJib2FyZENhcmQ6ICM0MjdlZjU7XG4kc2hhZG93Q29sb3I6ICNhYmIzYWM7XG4kcGxheWVyRGV0YWlsczogIzI4MjgyODtcbiRncmV5Q29sb3I6ICM0MDQwNDA7XG4kZ3JlZW5Sb3dDb2xvcjogIzA0NTc1NzsgXG4kcmVkUm93Q29sb3I6ICM5MDBjM2Y7XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4O1xufVxuXG5cbmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjFlbTtcbiAgICB3aWR0aDogNC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlDb2xvcjtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICRzaGFkb3dDb2xvcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMC4xMjVlbSB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMC4zNWVtICRzaGFkb3dDb2xvcjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAuMDYyNWVtICRzaGFkb3dDb2xvcjtcbn1cbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDIuMWVtO1xuICB3aWR0aDogNC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjYWJiM2FjO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCAwIDAuMTI1ZW0gd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuMzVlbSAjYWJiM2FjO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDYyNWVtICNhYmIzYWM7XG59XG5cbi5jYXJkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgI3BsYXlDYXJkID4gLmNhcmQge1xuICBib3JkZXItY29sb3I6ICMzNGViM2E7XG4gIGNvbG9yOiAjMzRlYjNhO1xuICBib3gtc2hhZG93OiAwIDAgMC4zZW0gIzM0ZWIzYSwgaW5zZXQgMCAwIDAuM2VtICMzNGViM2E7XG59XG5cbjpob3N0IDo6bmctZGVlcCAjcnVsZXNDYXJkID4gLmNhcmQge1xuICBib3JkZXItY29sb3I6ICNmNzNmMjM7XG4gIGNvbG9yOiAjZjczZjIzO1xuICBib3gtc2hhZG93OiAwIDAgMC4zZW0gI2Y3M2YyMywgaW5zZXQgMCAwIDAuM2VtICNmNzNmMjM7XG59XG5cbjpob3N0IDo6bmctZGVlcCAjbGVhZGVyYm9hcmRDYXJkID4gLmNhcmQge1xuICBib3JkZXItY29sb3I6ICM0MjdlZjU7XG4gIGNvbG9yOiAjNDI3ZWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC4zZW0gIzQyN2VmNSwgaW5zZXQgMCAwIDAuM2VtICM0MjdlZjU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAjcGxheUNhcmQgPiAuY2FyZDo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwICNydWxlc0NhcmQgPiAuY2FyZDo6YmVmb3JlLFxuOmhvc3QgOjpuZy1kZWVwICNsZWFkZXJib2FyZENhcmQgPiAuY2FyZDo6YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NSU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoM2VtKSByb3RhdGVYKDc1ZGVnKSBzY2FsZSgxLCAwLjM1KTtcbiAgZmlsdGVyOiBibHVyKDEuNWVtKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwICNwbGF5Q2FyZCA+IC5jYXJkOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRlYjNhO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgI3J1bGVzQ2FyZCA+IC5jYXJkOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczZjIzO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgI2xlYWRlcmJvYXJkQ2FyZCA+IC5jYXJkOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI3ZWY1O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgI3BsYXlDYXJkID4gLmNhcmQ6aG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgI3J1bGVzQ2FyZCA+IC5jYXJkOmhvdmVyLFxuOmhvc3QgOjpuZy1kZWVwICNsZWFkZXJib2FyZENhcmQgPiAuY2FyZDpob3ZlciB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogIzEyMTIxMjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwICNwbGF5Q2FyZCA+IC5jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ZWIzYTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwICNydWxlc0NhcmQgPiAuY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzNmMjM7XG59XG5cbjpob3N0IDo6bmctZGVlcCAjbGVhZGVyYm9hcmRDYXJkID4gLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI3ZWY1O1xufVxuXG4ucGxheWVyRGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMnJlbTtcbiAgd2lkdGg6IDI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICBjb2xvcjogI2FiYjNhYztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxheWVyRGV0YWlscyBpbnB1dCB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnBsYXllckRldGFpbHMgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "XY44":
/*!************************************************************!*\
  !*** ./src/app/homepage/components/card/card.component.ts ***!
  \************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class CardComponent {
    constructor() { }
    ngOnInit() {
        // this.cardTitle = 'hello';
        // this.cardIcon = 'hey';
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { cardTitle: "cardTitle", cardIcon: "cardIcon" }, decls: 4, vars: 2, consts: [[1, "card"], [3, "ngClass"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #121212;\n  font-size: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 2.1em;\n  width: 4.5em;\n  border-radius: 0.3em;\n  background-color: #404040;\n  border: 0;\n  color: #abb3ac;\n  font-weight: bold;\n  box-shadow: 0 0 0.125em white;\n  cursor: pointer;\n  font-size: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0.35em #abb3ac;\n  text-shadow: 0 0 0.0625em #abb3ac;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 14rem;\n  position: relative;\n  cursor: pointer;\n  margin: 1.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  font-size: 2.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 1em currentColor;\n  text-shadow: 0 0 0.1em #abb3ac;\n  border-radius: 1rem;\n  border: 4px solid;\n}\n\n.card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0kseUJBWE07RUFZTixlQUFBO0VBQ0EsMkRBQUE7QUNUSjs7QURZQTtFQUNJLFVBQUE7QUNUSjs7QURhQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFuQlE7RUFvQlIsU0FBQTtFQUNBLGNBdkJVO0VBd0JWLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhQTtFQUNJLDhCQUFBO0VBQ0EsaUNBQUE7QUNWSjs7QUF4QkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTJCSjs7QUF4QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUEyQkoiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZ0NvbG9yOiAjMTIxMjEyO1xuJHBsYXlDYXJkOiAjMzRlYjNhO1xuJHJ1bGVzQ2FyZDogI2Y3M2YyMztcbiRsZWFkZXJib2FyZENhcmQ6ICM0MjdlZjU7XG4kc2hhZG93Q29sb3I6ICNhYmIzYWM7XG4kcGxheWVyRGV0YWlsczogIzI4MjgyODtcbiRncmV5Q29sb3I6ICM0MDQwNDA7XG4kZ3JlZW5Sb3dDb2xvcjogIzA0NTc1NzsgXG4kcmVkUm93Q29sb3I6ICM5MDBjM2Y7XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4O1xufVxuXG5cbmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjFlbTtcbiAgICB3aWR0aDogNC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlDb2xvcjtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6ICRzaGFkb3dDb2xvcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMC4xMjVlbSB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMC4zNWVtICRzaGFkb3dDb2xvcjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAuMDYyNWVtICRzaGFkb3dDb2xvcjtcbn1cbiIsImJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDIuMWVtO1xuICB3aWR0aDogNC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjYWJiM2FjO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCAwIDAuMTI1ZW0gd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuMzVlbSAjYWJiM2FjO1xuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDYyNWVtICNhYmIzYWM7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDE0cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMWVtIGN1cnJlbnRDb2xvcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjFlbSAjYWJiM2FjO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDRweCBzb2xpZDtcbn1cblxuLmNhcmQgaSB7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });


/***/ }),

/***/ "myIj":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage-routing.module */ "Jc7R");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.component */ "Oh3b");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ "XY44");
/* harmony import */ var _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rules/rules.component */ "nPbC");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "1qeb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");










class HomepageModule {
}
HomepageModule.ɵfac = function HomepageModule_Factory(t) { return new (t || HomepageModule)(); };
HomepageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: HomepageModule });
HomepageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomepageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomepageModule, { declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
        _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_4__["RulesComponent"],
        _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomepageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"], [_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_4__["RulesComponent"],
    _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], []);


/***/ }),

/***/ "nPbC":
/*!**************************************************************!*\
  !*** ./src/app/homepage/components/rules/rules.component.ts ***!
  \**************************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../homepage.component */ "Oh3b");


class RulesComponent {
    constructor(homepage) {
        this.homepage = homepage;
    }
    ngOnInit() {
    }
    closeRules() {
        this.homepage.closeRules();
        let homeContainer = Array.from(document.getElementsByClassName("cardContainer"));
        homeContainer[0].style.filter = 'blur(0em)';
        homeContainer[0].style.pointerEvents = 'all';
    }
}
RulesComponent.ɵfac = function RulesComponent_Factory(t) { return new (t || RulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"])); };
RulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesComponent, selectors: [["app-rules"]], decls: 23, vars: 0, consts: [[1, "rulesContainer"], [1, "fa", "fa-close", 3, "click"], ["id", "ruleList"]], template: function RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RulesComponent_Template_i_click_1_listener() { return ctx.closeRules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Word-Hunt is a game where you have to find a hidden word with strategic guesses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "At the start of a game, the system chooses a 4-letter word. This word contains only english alphabets and letters do not repeat in this word. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You will make 4-letter word guesses and for each guess you'll receive one of the below verdicts - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If your guess is valid, you'll get the number of correctly placed and misplaced letters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your guess is invalid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "For example, let the hidden word be \"race\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "If your guess is \"cars\", the number of correctly placed letters is 1 - 'a', number of misplaced letters is 2 - 'r' and 'c' are in the word but in wrong places. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "If your guess is \"rare\" or \"eat\", it is invalid. The guess should have exactly 4 unique letters.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "You start with a score of 100 and for each guess, your score decreases by 2. The game ends when you correctly find the word or when your score becomes 0.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: #121212;\n  font-size: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 2.1em;\n  width: 4.5em;\n  border-radius: 0.3em;\n  background-color: #404040;\n  border: 0;\n  color: #abb3ac;\n  font-weight: bold;\n  box-shadow: 0 0 0.125em white;\n  cursor: pointer;\n  font-size: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0.35em #abb3ac;\n  text-shadow: 0 0 0.0625em #abb3ac;\n}\n\n.rulesContainer[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 30vw;\n  z-index: 1;\n  background-color: #121212;\n  box-shadow: 0 0 0.5em #abb3ac;\n  color: white;\n  font-size: 1rem;\n  padding-right: 2em;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  line-height: 1.5em;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.rulesContainer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLHlCQVhNO0VBWU4sZUFBQTtFQUNBLDJEQUFBO0FDVEo7O0FEWUE7RUFDSSxVQUFBO0FDVEo7O0FEYUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBbkJRO0VBb0JSLFNBQUE7RUFDQSxjQXZCVTtFQXdCVixpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVko7O0FEYUE7RUFDSSw4QkFBQTtFQUNBLGlDQUFBO0FDVko7O0FBeEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJETk07RUNPTiw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBMkJKOztBQXhCQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBMkJKIiwiZmlsZSI6InJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnQ29sb3I6ICMxMjEyMTI7XG4kcGxheUNhcmQ6ICMzNGViM2E7XG4kcnVsZXNDYXJkOiAjZjczZjIzO1xuJGxlYWRlcmJvYXJkQ2FyZDogIzQyN2VmNTtcbiRzaGFkb3dDb2xvcjogI2FiYjNhYztcbiRwbGF5ZXJEZXRhaWxzOiAjMjgyODI4O1xuJGdyZXlDb2xvcjogIzQwNDA0MDtcbiRncmVlblJvd0NvbG9yOiAjMDQ1NzU3OyBcbiRyZWRSb3dDb2xvcjogIzkwMGMzZjtcblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG59XG5cblxuYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuMWVtO1xuICAgIHdpZHRoOiA0LjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleUNvbG9yO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogJHNoYWRvd0NvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjEyNWVtIHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjM1ZW0gJHNoYWRvd0NvbG9yO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMC4wNjI1ZW0gJHNoYWRvd0NvbG9yO1xufVxuIiwiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGhlaWdodDogMi4xZW07XG4gIHdpZHRoOiA0LjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNhYmIzYWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAwIDAgMC4xMjVlbSB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMC4zNWVtICNhYmIzYWM7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNjI1ZW0gI2FiYjNhYztcbn1cblxuLnJ1bGVzQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMzB2dztcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNhYmIzYWM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJ1bGVzQ29udGFpbmVyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMiU7XG4gIHJpZ2h0OiAyJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=homepage-homepage-module.js.map