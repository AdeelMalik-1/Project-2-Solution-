# CRUD Application with Image Upload

## 📌 Project Overview

This project is a complete CRUD (Create, Read, Update, Delete) application with image upload functionality. Users can add new records along with images, view records, update existing information, and delete records when required.

## 🚀 Features

* Create new records
* Read/View all records
* Update existing records
* Delete records
* Upload images
* Store image paths in the database
* Responsive user interface
* Form validation

## 🛠️ Technologies Used

* Frontend: HTML, CSS, JavaScript / React.js
* Backend: Node.js, Express.js
* Database: MongoDB / MySQL
* Image Upload: Multer
* API Testing: Postman

## 📂 CRUD Operations

### Create

Users can create a new record by filling out a form and uploading an image.

### Read

All records are displayed in a list or table format, including uploaded images.

### Update

Users can edit existing records and replace uploaded images if needed.

### Delete

Users can remove records along with their associated images.

## 🖼️ Image Upload Functionality

* Supports image formats such as JPG, PNG, and JPEG.
* Images are stored on the server.
* Image path is saved in the database.
* Uploaded images are displayed with the corresponding record.

## 📁 Project Structure

```bash
project/
│
├── uploads/
├── models/
├── routes/
├── index.js
└── README.md
```

## ⚙️ Installation

```bash
git clone <repository-url>
cd project-folder
npm install
npm start
```

## 📸 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | /create     | Create new record |
| GET    | /records    | Get all records   |
| PUT    | /update/:id | Update record     |
| DELETE | /delete/:id | Delete record     |
| POST   | /upload     | Upload image      |

## ✅ Conclusion

This project demonstrates complete CRUD functionality integrated with image uploading, making it suitable for learning full-stack development concepts and file handling in web applications.
