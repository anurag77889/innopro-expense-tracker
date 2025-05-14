# 💸 InnoPro Expense Tracker

**InnoPro Expense Tracker** is a modern, full-stack web application designed to help individuals and teams efficiently manage their expenses. Built with the latest technologies, it offers a seamless user experience for tracking income and expenditures, categorizing transactions, and gaining financial insights.

---

## 🚀 Live Demo

Experience the application live: [innopro.vercel.app](https://innopro.vercel.app)

---

## 🧰 Tech Stack

* **Frontend**: Next.js 13 (App Router), React, Tailwind CSS, JavaScript
* **Backend**: Drizzle ORM, PostgreSQL
* **Authentication**: Clerk
* **Deployment**: Vercel([Hatica][1])

---

## ✨ Features

* User authentication and authorization
* Add, edit, and delete income and expense entries
* Responsive design for mobile and desktop devices
* Real-time data updates and validations
* Secure and scalable architecture

---

## 🛠️ Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anurag77889/innopro-expense-tracker.git
   cd innopro-expense-tracker
   ```



2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```



3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```



4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```



Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

---

## 📁 Project Structure

```bash
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utility libraries and functions
├── public/              # Static assets
├── utils/               # Helper functions
├── .env.local           # Environment variables
├── drizzle.config.js    # Drizzle ORM configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```



---

## 🧪 Testing

*Note: Testing scripts and configurations are to be added in future updates.*

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add your message here'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request detailing your changes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Developed by [Anurag](https://github.com/anurag77889). Feel free to reach out for any queries or collaborations.

---

Feel free to customize this `README.md` further to match any additional features or changes you implement in your project.

[1]: https://www.hatica.io/blog/best-practices-for-github-readme/?utm_source=chatgpt.com "Best Practices For An Eye Catching GitHub Readme - Hatica"
