# 💬 Real-Time Chat Application with Socket.io and React
A full-stack real-time chat application built using **React**, **Express**, and **Socket.IO**. This app supports global messaging, private one-on-one chats, typing indicators, and user presence updates — all in real-time!



## 🌐 Project Overview
This chat app allows multiple users to:
- Join a global chat room using a unique username
- Send and receive public or private messages
- View the list of online users
- See when someone is typing
- Experience real-time updates through websockets

It demonstrates the core concepts of a modern web socket-based communication app using `socket.io` for real-time messaging, a custom `AuthContext` for session management, and responsive UI built with TailwindCSS.

---



## 🚀 Features Implemented

- ✅ **User Login with Username**
- ✅ **Real-time Public Messaging**
- ✅ **Private 1-on-1 Chat**
- ✅ **Typing Indicators**
- ✅ **Join/Leave Notifications**
- ✅ **User List Display**
- ✅ **Socket.IO integration**
- ✅ **React Context for Auth & Socket**



## Setup Instructions

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/PLP-MERN-Stack-Development/week-5-web-sockets-assignment-stacy-wk.git
   cd week-5-web-sockets-assignment-stacy-wk
   ```

2. **Install server dependencies**
   ```sh
   cd server
   pnpm install
   ```

3. **Install client dependencies**
   ```sh
   cd ../client
   pnpm install
   ```

### Running the Application

- **Start the server**
  ```sh
  cd server
  pnpm run dev
  ```

- **Start the client**
  ```sh
  cd client
  pnpm run dev
  ```

