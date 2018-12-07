(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-visit-module"],{

/***/ "./src/app/visit/add-visit/add-visit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/visit/add-visit/add-visit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 15px;\n}\n\n.card {\n    width: auto;\n    height: 250px;\n    text-align: center;\n    padding: 0px;\n    margin: 0 16px 16px 0;\n}\n\n.info {\n    flex: 1 1 auto;\n    min-width: 150px;\n    padding: 16px;\n}\n\nh2 {\n    padding: 0 30px 0 30px;\n    margin-bottom: 4px;\n}\n\n.form,\n.full-width {\n    max-width: 600px;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/visit/add-visit/add-visit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/visit/add-visit/add-visit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\" *ngIf=\"patient\">\n    <mat-toolbar>\n        <a mat-mini-fab [routerLink]=\"['/patient', 'details', patientId]\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n        </a>\n        <span class=\"spacer\">New Visit</span>\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/visit', 'add', 'patient', this.patient.id]\" (click)=\"addVisit()\">Save</a>\n    </mat-toolbar>\n    <mat-divider></mat-divider>\n    <h2 class=\"name\">{{ patient.name }}</h2>\n    <div class=\"flex-container\">\n        <div class=\"info\">\n            <form [formGroup]=\"visitForm\" class=\"form\">\n                <mat-form-field class=\"full-width\">\n                    <textarea matInput [style.height]=\"'100px'\" formControlName=\"diagnosis\" #color maxlength=\"256\" placeholder=\"Diagnosis\"></textarea>\n                </mat-form-field>\n            </form>\n        </div>\n        <mat-card class=\"card\">\n            <app-image-tile [resource]=\"patient\"></app-image-tile>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/visit/add-visit/add-visit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/visit/add-visit/add-visit.component.ts ***!
  \********************************************************/
/*! exports provided: AddVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVisitComponent", function() { return AddVisitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/visit/visit.service */ "./src/app/shared/services/visit/visit.service.ts");
/* harmony import */ var _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/patient/patient.service */ "./src/app/shared/services/patient/patient.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVisitComponent = /** @class */ (function () {
    function AddVisitComponent(srv, srvP, fb, route, router) {
        this.srv = srv;
        this.srvP = srvP;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.visitForm = this.fb.group({
            patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diagnosis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.parseParams();
    }
    AddVisitComponent.prototype.ngOnInit = function () {
        this.fetchPatient();
    };
    AddVisitComponent.prototype.addVisit = function () {
        var _this = this;
        var data = this.visitForm.value;
        this.srv.post(data)
            .subscribe(function (d) {
            _this.router.navigate(['/patient', 'details', d.patient]);
        }, function (error) {
        });
    };
    AddVisitComponent.prototype.fetchPatient = function () {
        var _this = this;
        if (!this.patientId) {
            this.router.navigate(['/patient', 'search']);
        }
        else {
            this.srvP.getDetails(this.patientId)
                .subscribe(function (data) {
                _this.patient = data;
                _this.visitForm.get('patient').setValue(_this.patient.id);
            }, function (error) {
                alert(error);
            });
        }
    };
    /**
     * Looks for route params and if present,
     * fetches the data for that candidate
     */
    AddVisitComponent.prototype.parseParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (Object.keys(params).indexOf('id') !== -1) {
                _this.patientId = params['id'];
            }
        });
    };
    AddVisitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-visit',
            template: __webpack_require__(/*! ./add-visit.component.html */ "./src/app/visit/add-visit/add-visit.component.html"),
            styles: [__webpack_require__(/*! ./add-visit.component.css */ "./src/app/visit/add-visit/add-visit.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_3__["VisitService"],
            _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddVisitComponent);
    return AddVisitComponent;
}());



/***/ }),

/***/ "./src/app/visit/list-visits/list-visits.component.css":
/*!*************************************************************!*\
  !*** ./src/app/visit/list-visits/list-visits.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n    flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/visit/list-visits/list-visits.component.html":
/*!**************************************************************!*\
  !*** ./src/app/visit/list-visits/list-visits.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <mat-toolbar>\n        <mat-toolbar-row>\n            <span>Visits</span>\n            <span class=\"spacer\"></span>\n            <button mat-icon-button (click)=\"toggleSearch()\">\n              <mat-icon aria-label=\"add candidate\">search</mat-icon>\n          </button>\n            <a mat-icon-button [routerLink]=\"['/visit', 'add', 'patient', this.patientId]\">\n                <mat-icon aria-label=\"schedule interview\">add</mat-icon>\n            </a>\n        </mat-toolbar-row>\n        <mat-toolbar-row *ngIf=\"filter\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n            </mat-form-field>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"patient\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Patient</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.patient}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"diagnosis\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Diagnosis</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.diagnosis}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"timestamp\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.timestamp | date : 'short' }}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [length]=\"dataSource.data.length\" [pageIndex]=\"0\" [pageSize]=\"50\" [pageSizeOptions]=\"[25, 50, 100, 250]\">\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/visit/list-visits/list-visits.component.ts":
/*!************************************************************!*\
  !*** ./src/app/visit/list-visits/list-visits.component.ts ***!
  \************************************************************/
/*! exports provided: ListVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVisitsComponent", function() { return ListVisitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/visit/visit.service */ "./src/app/shared/services/visit/visit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListVisitsComponent = /** @class */ (function () {
    function ListVisitsComponent(srv, route, router) {
        this.srv = srv;
        this.route = route;
        this.router = router;
        this.dataLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            'patient', 'diagnosis', 'timestamp'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.allSelected = false;
        this.search = '';
        this.filter = false;
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.parseParams();
    }
    /**
     * Looks for route params and if present,
     * fetches the data for that candidate
     */
    ListVisitsComponent.prototype.parseParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (Object.keys(params).indexOf('id') !== -1) {
                _this.patientId = params['id'];
                // this.fetchPatient();
            }
        });
    };
    ListVisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (searchValue) {
            _this.search = searchValue;
            _this.initTable();
        });
        this.initTable();
    };
    ListVisitsComponent.prototype.initTable = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.srv.getVisitsByPatient(_this.sort.active, _this.sort.direction, _this.paginator.pageSize, _this.paginator.pageIndex, _this.patientId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    ListVisitsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.searchStream.next(filterValue);
    };
    ListVisitsComponent.prototype.toggleSearch = function () {
        this.filter = !this.filter;
        if (!this.filter) {
            // reset search;
            this.search = '';
            this.initTable();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], ListVisitsComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ListVisitsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ListVisitsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListVisitsComponent.prototype, "dataLoad", void 0);
    ListVisitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-visits',
            template: __webpack_require__(/*! ./list-visits.component.html */ "./src/app/visit/list-visits/list-visits.component.html"),
            styles: [__webpack_require__(/*! ./list-visits.component.css */ "./src/app/visit/list-visits/list-visits.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_5__["VisitService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListVisitsComponent);
    return ListVisitsComponent;
}());



/***/ }),

/***/ "./src/app/visit/visit-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/visit/visit-routing.module.ts ***!
  \***********************************************/
/*! exports provided: VisitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitRoutingModule", function() { return VisitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-visit/add-visit.component */ "./src/app/visit/add-visit/add-visit.component.ts");
/* harmony import */ var _list_visits_list_visits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-visits/list-visits.component */ "./src/app/visit/list-visits/list-visits.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _list_visits_list_visits_component__WEBPACK_IMPORTED_MODULE_3__["ListVisitsComponent"] },
    { path: 'patient/:id', component: _list_visits_list_visits_component__WEBPACK_IMPORTED_MODULE_3__["ListVisitsComponent"] },
    { path: 'add/patient/:id', component: _add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_2__["AddVisitComponent"] },
    { path: '**', redirectTo: '' },
];
var VisitRoutingModule = /** @class */ (function () {
    function VisitRoutingModule() {
    }
    VisitRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VisitRoutingModule);
    return VisitRoutingModule;
}());



/***/ }),

/***/ "./src/app/visit/visit.module.ts":
/*!***************************************!*\
  !*** ./src/app/visit/visit.module.ts ***!
  \***************************************/
/*! exports provided: VisitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitModule", function() { return VisitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _visit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-routing.module */ "./src/app/visit/visit-routing.module.ts");
/* harmony import */ var _add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-visit/add-visit.component */ "./src/app/visit/add-visit/add-visit.component.ts");
/* harmony import */ var _list_visits_list_visits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-visits/list-visits.component */ "./src/app/visit/list-visits/list-visits.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var VisitModule = /** @class */ (function () {
    function VisitModule() {
    }
    VisitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _visit_routing_module__WEBPACK_IMPORTED_MODULE_2__["VisitRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            ],
            declarations: [_add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_3__["AddVisitComponent"], _list_visits_list_visits_component__WEBPACK_IMPORTED_MODULE_4__["ListVisitsComponent"]]
        })
    ], VisitModule);
    return VisitModule;
}());



/***/ })

}]);
//# sourceMappingURL=visit-visit-module.js.map