(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/add-patient/add-patient.component.css":
/*!**************************************************************!*\
  !*** ./src/app/search/add-patient/add-patient.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n}\n\n.preview_container {\n    border-bottom: 1px solid #666666;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n}\n\n.page-container {\n    padding: 16px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 15px;\n}\n\n.card {\n    width: auto;\n    height: 250px;\n    text-align: center;\n    padding: 0px;\n    margin: 0 16px 16px 0;\n}\n\n.info {\n    flex: 1 1 auto;\n    min-width: 150px;\n}"

/***/ }),

/***/ "./src/app/search/add-patient/add-patient.component.html":
/*!***************************************************************!*\
  !*** ./src/app/search/add-patient/add-patient.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <mat-toolbar>\n        <a mat-mini-fab [routerLink]=\"['/']\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n        </a>\n        <span class=\"spacer\">New Patient</span>\n        <button mat-raised-button color=\"primary\" (click)=\"addPatient()\" disabled=\"{{!this.patientForm.valid}}\">Save</button>\n    </mat-toolbar>\n    <mat-divider></mat-divider>\n\n    <div class='flex-container'>\n        <div class=\"info\">\n\n            <form [formGroup]=\"patientForm\" class=\"example-form\">\n                <mat-grid-list cols=\"2\" gutterSize=\"25\" rowHeight=\"80px\">\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"name\" #name maxlength=64 placeholder=\"Patient Name\" required>\n                            <mat-hint align=\"end\">{{name.value.length}} / 64</mat-hint>\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"3\">\n                        <app-upload-photo class=\"preview_container\" [photo]=\"getPhoto\"></app-upload-photo>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <mat-select placeholder=\"Gender\" formControlName=\"gender\">\n                                <mat-option *ngFor=\"let g of genders\" [value]=\"g.value\">\n                                    {{ g.text }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"age\" maxlength=3 placeholder=\"Age\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"phone\" maxlength=13 placeholder=\"Phone number\" required>\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile [colspan]=1 [rowspan]=2>\n                        <mat-form-field class=\"full-width\">\n                            <textarea [style.height]=\"'121px'\" matInput formControlName=\"address\" maxlength=\"256\" placeholder=\"Address\"></textarea>\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"relations\" maxlength=13 placeholder=\"Relation\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"aadhar_number\" maxlength=13 placeholder=\"aadhar_number\" required>\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                    <mat-grid-tile class=\"form-tile\" [colspan]=1 [rowspan]=1>\n                        <mat-form-field class=\"full-width\">\n                            <input matInput formControlName=\"file_no\" maxlength=13 placeholder=\"File Number\">\n                        </mat-form-field>\n                    </mat-grid-tile>\n\n                </mat-grid-list>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/search/add-patient/add-patient.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/search/add-patient/add-patient.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/patient/patient.service */ "./src/app/shared/services/patient/patient.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/search/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(fb, router, srv) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.srv = srv;
        this.getPhoto = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.genders = _constants__WEBPACK_IMPORTED_MODULE_5__["GENDERS"];
        this.formData = new FormData();
        this.patientForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: '',
            address: '',
            photoFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: '',
            relations: '',
            aadhar_number: '',
            file_no: '',
            id: null
        });
        this.getPhoto.subscribe(function (value) {
            console.log('value');
            if (value['file_name']) {
                _this.patientForm.get('photoFile').setValue('true');
            }
            else {
                _this.patientForm.get('photoFile').setValue('false');
            }
            _this.formData.set('photo', value['file'], value['file_name']);
        });
    }
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    AddPatientComponent.prototype.initializeFormData = function () {
        var _this = this;
        Object.keys(this.patientForm.controls).forEach(function (key) {
            console.log(_this.patientForm.get(key).value);
            _this.formData.set(key, _this.patientForm.get(key).value);
        });
    };
    AddPatientComponent.prototype.dateChanged = function (event) {
        console.table(event);
    };
    AddPatientComponent.prototype.addPatient = function () {
        var _this = this;
        if (this.patientForm.valid) {
            this.initializeFormData();
            this.srv.post(this.formData).subscribe(function (data) {
                console.log(_this.patientForm.value);
                _this.router.navigate(['/patient', 'details', data.id]);
            });
        }
    };
    AddPatientComponent.prototype.resetForm = function () {
        console.log('reset clicked');
        this.patientForm.reset();
        this.patientForm.markAsPristine();
    };
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/search/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.css */ "./src/app/search/add-patient/add-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "./src/app/search/constants.ts":
/*!*************************************!*\
  !*** ./src/app/search/constants.ts ***!
  \*************************************/
/*! exports provided: MAX_SEARCH_RESULTS, GENDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SEARCH_RESULTS", function() { return MAX_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERS", function() { return GENDERS; });
var MAX_SEARCH_RESULTS = 10;
var GENDERS = [
    {
        'text': 'Male',
        'value': 'Male'
    },
    {
        'text': 'Female',
        'value': 'Female'
    },
];


/***/ }),

/***/ "./src/app/search/patient-details/patient-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/search/patient-details/patient-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 15px;\n}\n\n.card {\n    width: auto;\n    height: 250px;\n    text-align: center;\n    padding: 0px;\n    margin: 0 16px 16px 0;\n}\n\n.info {\n    flex: 1 1 auto;\n    min-width: 150px;\n}\n\nh2 {\n    padding: 0 30px 0 30px;\n    margin-bottom: 4px;\n}\n\n.button-row {\n    display: flex;\n    margin-bottom: 20px;\n    justify-content: space-between;\n}\n\n.info .mat-list .mat-list-item .mat-line {\n    white-space: normal;\n}\n\n.info h4 {\n    font-weight: lighter;\n}\n\n.info .mat-list {\n    max-width: 550px;\n}\n\n.info .mat-list .mat-list-item {\n    min-width: 275px;\n    display: inline-block;\n}"

/***/ }),

/***/ "./src/app/search/patient-details/patient-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/search/patient-details/patient-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <div *ngIf=\"patient\">\n        <mat-toolbar>\n            <a mat-mini-fab [routerLink]=\"['/patients', 'search']\">\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">arrow_back</mat-icon>\n            </a>\n            <span class=\"spacer\">Patient Information</span>\n            <a mat-raised-button color=\"primary\" [routerLink]=\"['/visit', 'add', 'patient', this.patient.id]\">\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon> Visit\n            </a>\n        </mat-toolbar>\n        <mat-divider></mat-divider>\n        <h2 class=\"name\">{{ patient.name }}</h2>\n        <div class=\"flex-container\">\n            <div class=\"info\">\n                <mat-list role=\"list\">\n                    <mat-list-item role=\"listitem\" *ngFor=\"let p of patientProps\">\n                        <mat-icon mat-list-icon>{{p.icon}}</mat-icon>\n                        <h4 mat-line>{{p.label}}</h4>\n                        <p mat-line [ngClass]=\"p.key\">{{patient[p.key]}}</p>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <mat-card class=\"card\">\n                <app-image-tile [resource]=\"patient\"></app-image-tile>\n            </mat-card>\n        </div>\n        <mat-toolbar>\n            <mat-toolbar-row>\n                <span>Visits</span>\n                <span class=\"spacer\"></span>\n                <!--\n            <button mat-icon-button (click)=\"toggleSearch()\">\n                  <mat-icon aria-label=\"add candidate\">search</mat-icon>\n              </button>\n            <a mat-icon-button [routerLink]=\"['/visit', 'add', 'patient', this.patientId]\">\n                <mat-icon aria-label=\"schedule interview\">add</mat-icon>\n            </a>\n            -->\n            </mat-toolbar-row>\n            <mat-toolbar-row *ngIf=\"filter\">\n                <mat-form-field>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                </mat-form-field>\n            </mat-toolbar-row>\n        </mat-toolbar>\n    </div>\n    <mat-table [hidden]=\"!patient\" #table [dataSource]=\"dataSource\" matSort matSortActive=\"timestamp\" matSortDisableClear matSortDirection=\"desc\" aria-label=\"Visits\">\n\n        <ng-container matColumnDef=\"diagnosis\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Diagnosis</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.diagnosis}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"timestamp\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{row.timestamp | date : 'short' }}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator #paginator [length]=\"resultsLength\" [pageIndex]=\"0\" [pageSize]=\"50\" [pageSizeOptions]=\"[25, 50, 100, 250]\">\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/search/patient-details/patient-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/search/patient-details/patient-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: PatientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function() { return PatientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/patient/patient.service */ "./src/app/shared/services/patient/patient.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/visit/visit.service */ "./src/app/shared/services/visit/visit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PatientDetailsComponent = /** @class */ (function () {
    function PatientDetailsComponent(srv, vsrv, route, router) {
        this.srv = srv;
        this.vsrv = vsrv;
        this.route = route;
        this.router = router;
        this.dataLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            'timestamp', 'diagnosis'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.search = '';
        this.filter = false;
        this.searchStream = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.patient = null;
        this.patientProps = [
            { 'key': 'gender', 'label': 'Gender', 'icon': 'wc' },
            { 'key': 'age', 'label': 'Age', 'icon': 'timelapse' },
            { 'key': 'phone', 'label': 'Phone', 'icon': 'phone' },
            { 'key': 'aadhar_number', 'label': 'Aadhar', 'icon': 'featured_video' },
            { 'key': 'file_no', 'label': 'File no.', 'icon': 'folder' },
            { 'key': 'address', 'label': 'Address', 'icon': 'person_pin_circle' }
        ];
    }
    PatientDetailsComponent.prototype.fetchPatient = function () {
        var _this = this;
        if (!this.patientId) {
            this.router.navigate(['/patient', 'search']);
        }
        else {
            this.srv.getDetails(this.patientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(2000))
                .subscribe(function (data) {
                _this.patient = data;
                _this.initTable();
            }, function (error) { return console.table(error); });
        }
    };
    /**
     * Looks for route params and if present,
     * fetches the data for that candidate
     */
    PatientDetailsComponent.prototype.parseParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (Object.keys(params).indexOf('id') !== -1) {
                _this.patientId = params['id'];
                _this.fetchPatient();
            }
        });
    };
    PatientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parseParams();
        this.searchStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (searchValue) {
            _this.search = searchValue;
            _this.initTable();
        });
    };
    PatientDetailsComponent.prototype.initTable = function () {
        var _this = this;
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.vsrv.getVisitsByPatient(_this.sort.active, _this.sort.direction, _this.paginator.pageSize, _this.paginator.pageIndex, _this.patientId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.resultsLength = data.count;
            _this.dataLoad.emit(_this.resultsLength);
            return data.results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        })).subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    PatientDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.searchStream.next(filterValue);
    };
    PatientDetailsComponent.prototype.toggleSearch = function () {
        this.filter = !this.filter;
        if (!this.filter) {
            // reset search;
            this.search = '';
            this.initTable();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTable"])
    ], PatientDetailsComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], PatientDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], PatientDetailsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PatientDetailsComponent.prototype, "dataLoad", void 0);
    PatientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-details',
            template: __webpack_require__(/*! ./patient-details.component.html */ "./src/app/search/patient-details/patient-details.component.html"),
            styles: [__webpack_require__(/*! ./patient-details.component.css */ "./src/app/search/patient-details/patient-details.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _shared_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_6__["VisitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PatientDetailsComponent);
    return PatientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/search/search-form/search-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/search/search-form/search-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form,\n.full-width {\n    max-width: 600px;\n    width: 100%;\n}\n\n.full-width-btn {\n    max-width: 600px;\n    width: calc(100% - 132px);\n}\n\n.addBtn {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n}\n\n.newBtn {\n    margin-left: 20px;\n}\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n.full-screen {\n    height: 100%;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/search/search-form/search-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/search/search-form/search-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container full-screen\">\n    <form [formGroup]=\"searchPatientForm\" class=\"form\">\n        <mat-form-field class=\"full-width-btn\">\n            <input matInput placeholder=\"Search Patient By Name\" aria-label=\"Patients Name\" formControlName=\"name\" autocomplete=\"off\">\n        </mat-form-field>\n        <a mat-raised-button class=\"newBtn\" color=\"primary\" [routerLink]=\"['/patient/add']\">Add Patient</a>\n    </form>\n</div>\n<p *ngIf=\"noResults\">No results</p>\n<p *ngIf=\"moreResults\">too many results</p>\n<app-search-results [patients]=\"patients\"></app-search-results>"

/***/ }),

/***/ "./src/app/search/search-form/search-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/search/search-form/search-form.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/patient/patient.service */ "./src/app/shared/services/patient/patient.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/search/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(fb, srv, breakpointObserver) {
        this.fb = fb;
        this.srv = srv;
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.maxSearchResults = _constants__WEBPACK_IMPORTED_MODULE_5__["MAX_SEARCH_RESULTS"];
        this.noResults = false;
        this.moreResults = false;
        this.searchPatientForm = fb.group({ name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] });
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchPatientForm.get('name').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
            return _this.srv.get('', '', 0, 0, data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.results;
        })).subscribe(function (data) {
            var total = data.length;
            _this.noResults = !total ? true : false;
            _this.moreResults = total > _this.maxSearchResults ? true : false;
            _this.patients = total < _this.maxSearchResults ? data : [];
        });
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_patient_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search/search-results/search-results.component.css":
/*!********************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.card {\n    width: auto;\n    height: 200px;\n    margin: 0 10px 10px 0;\n    text-align: center;\n    padding: 0px;\n}"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search output -->\n<div class=\"flex-container\">\n    <mat-card class=\"card\" *ngFor=\"let patient of patients\" (click)=\"gotoDetails(patient.id)\">\n        <app-image-tile [resource]=\"patient\" [showName]=\"true\"></app-image-tile>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/search/search-results/search-results.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    SearchResultsComponent.prototype.gotoDetails = function (id) {
        this.router.navigate(['/patient', 'details', id]);
    };
    SearchResultsComponent.prototype.addVisit = function (id) {
        this.router.navigate(['/visit', 'add', 'patient', id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchResultsComponent.prototype, "patients", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search/search-form/search-form.component.ts");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/search/add-patient/add-patient.component.ts");
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-details/patient-details.component */ "./src/app/search/patient-details/patient-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"] },
    { path: 'search', component: _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"] },
    { path: 'details/:id', component: _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_4__["PatientDetailsComponent"] },
    { path: 'add', component: _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__["AddPatientComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search/search-form/search-form.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search/search-results/search-results.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/search/add-patient/add-patient.component.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patient-details/patient-details.component */ "./src/app/search/patient-details/patient-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            ],
            declarations: [_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_3__["SearchFormComponent"], _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"], _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_8__["AddPatientComponent"], _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_10__["PatientDetailsComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map