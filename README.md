# Mongo Backend

## Installation
- clone repo
- navigate into directory
- `npm i`

## Usage

### Scehma
Schema is set in `models/mongo.js`

### DB and Collection
The db and collection are set in `models/mongo.js`

### Port
The port is set in `server.js` default is set to `4444`

### Run
`npm start` - starts server at `http://localhost:4444/`

### Front End
Download and run this repo for a UI [https://github.com/peteplays/angular-bootstrap-ui](https://github.com/peteplays/angular-bootstrap-ui)

### Calls
| Description | Url | Call | Params |
| ----------- | --- | ---- | ------ |
| Check Mongo is up and running | / | GET | none |
| Get a single patient record | /getPatient/:patientId` | GET | :patientId |
| Return all records| getAll | GET | none |
| Return limited amount of results | /listPatients/:pageNumber/:perPage | GET | :pageNumber :perPage |
| Update record| /updateAddPatient/ | POST | none |
| Get record count | /count | GET | none |

## Author
PetePlays

## License
This project is licensed under the MIT license.

## Contributions
Forks, Comments, and Upgrades are welcome!
