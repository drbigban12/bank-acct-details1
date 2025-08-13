# Bank Account Management System Backend

A secure and efficient backend for managing user bank accounts and transactions. Built with Node.js, Express, and MongoDB. Designed to be integrated with a Vue 3 frontend.

---

## Features

- **User Authentication:** Registration & JWT-based login
- **Bank Account Management:** Create, view, update, delete accounts
- **Transactions:** Deposit, withdraw, transfer
- **Security:** Password hashing, input validation, authorization
- **RESTful API:** Easy integration with any frontend

---

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token) for authentication
- bcrypt for password hashing
- dotenv for environment variables

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/atlas/database) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and set your values:
     ```env
     MONGO_URI=mongodb://localhost:27017/bankdb
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   - Server will run on `http://localhost:5000` (or your specified PORT).

---

## API Endpoints

| Endpoint                      | Method | Description                     | Auth Required |
|-------------------------------|--------|---------------------------------|--------------|
| `/api/auth/register`          | POST   | User registration               | No           |
| `/api/auth/login`             | POST   | User login                      | No           |
| `/api/accounts`               | POST   | Create a new account            | Yes          |
| `/api/accounts`               | GET    | List user's accounts            | Yes          |
| `/api/accounts/:accountId`    | DELETE | Delete an account               | Yes          |
| `/api/transactions/:accountId/deposit`   | POST   | Deposit money                   | Yes          |
| `/api/transactions/:accountId/withdraw`  | POST   | Withdraw money                  | Yes          |
| `/api/transactions/transfer`  | POST   | Transfer between accounts       | Yes          |

---

## Environment Variables

| Variable     | Description                          |
|--------------|--------------------------------------|
| MONGO_URI    | MongoDB connection URI               |
| JWT_SECRET   | JWT signing secret                   |
| PORT         | Server port (default: 5000)          |

---

## Deployment

### Deploy on Heroku

1. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```

2. Set environment variables:
   ```bash
   heroku config:set MONGO_URI=your_mongo_uri JWT_SECRET=your_jwt_secret
   ```

3. Push code:
   ```bash
   git push heroku main
   ```

### Deploy on Vercel/Render

- Follow their platform guides for Node.js apps.
- Set environment variables in their dashboard.

---

## Integration with Vue 3 Frontend

- Use [Axios](https://axios-http.com/) in Vue components to call backend APIs.
- Store JWT token securely (localStorage or Vuex).
- Pass JWT in `Authorization` header for protected routes:
  ```js
  axios.get('/api/accounts', {
    headers: { Authorization: `Bearer ${token}` }
  });
  ```

---

## Folder Structure

```
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── app.js
 ├── package.json
 ├── .env.example
```

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE)

---

## Contact

- Issues and suggestions: [GitHub Issues](https://github.com/<your-username>/<your-repo>/issues)
- Maintainer: [@your-username](https://github.com/<your-username>)