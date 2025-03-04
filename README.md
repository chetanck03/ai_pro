# AI Assistant Website

A stunning dark-themed landing page with modern animations and minimalistic design for an AI Assistant platform. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- 🌙 Modern dark theme with futuristic design
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive for all devices
- 🎨 Glassmorphism effects
- 🔐 Authentication system with social login
- 💫 Interactive UI elements
- 🎯 Performance optimized

## 🛠️ Tech Stack

- React + TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Shadcn UI components
- Express.js backend
- MongoDB database
- Mongoose ODM

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v20 or higher)
- npm (v10 or higher)
- MongoDB (v6 or higher)
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/chetanck03/code-ai.git

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

1. Install MongoDB on your system if you haven't already:
   - Windows: Download and install from [MongoDB Website](https://www.mongodb.com/try/download/community)
   - Mac: `brew install mongodb-community`
   - Linux: Follow [MongoDB installation guide](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

2. Start MongoDB service:
   - Windows: MongoDB runs as a service automatically
   - Mac/Linux: `sudo systemctl start mongod`

### 4. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB (Required)
MONGODB_URI="mongodb://localhost:27017/ai-assistant"

# Auth (Required for social login)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── styles/        # Global styles
├── server/
│   ├── routes/           # API routes
│   └── storage/          # Database operations
├── shared/
│   └── schema.ts        # Shared type definitions and MongoDB schemas
```

## 🔧 Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode

## 🎨 Customization

### Theme

Modify `theme.json` to customize the appearance:

```json
{
  "variant": "vibrant",
  "primary": "hsl(265, 89%, 78%)",
  "appearance": "dark",
  "radius": 1.0
}
```

### Styling

Global styles are defined in `client/src/index.css`. Customize Tailwind CSS configuration in `tailwind.config.ts`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.