// // Conceptual Service: Connection directly with mysql driver

// import { Injectable } from '@angular/core';
// const mysql = (<any>window).require('mysql');


// @Injectable()
// export class MysqlService {

//   connection: any;

//   constructor() {
//     this.connection = mysql.createConnection({
//       host: 'localhost',
//             user: 'editini',
//             password: '',
//             database: 'edit-ini'
//     });

//     this.connection.connect((err) => {
//       if (err) {
//         console.log('error connecting', err);
//       }
//     });
//   }

//   query(sql: string) {
//     this.connection.query(sql, function(err, results, fields) {
//       console.log('err', err);
//       console.log('results', results);
//       console.log('fields', fields);
//     });
//   }
// }
