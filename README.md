# AI Lawyer — Frontend (React)

AI Lawyer is an AI-powered legal assistant chatbot. This repository is the **web frontend** — a chat interface where users can ask legal questions and get answers grounded in real legal reference material, with chat history saved per user. It pairs with the [AI Lawyer backend](https://github.com/maferozi/AI-LAWYER-EXPRESS) (Express/PostgreSQL + OpenAI + Pinecone API).

## Overview

Users register/log in, then land on a ChatGPT-style interface: a sidebar listing their past conversations and a main chat panel. Each message is sent to the backend, which retrieves relevant legal text via a vector search and returns an AI-generated answer, which streams back into the same conversation. Conversations are grouped and titled automatically, and can be revisited from the sidebar.

## Features

- **Authentication** — register and login flows with JWT-based sessions, route guarding for public vs. private pages, and an auto "who am I" check on app load.
- **AI legal chat** — a ChatGPT-style interface for asking legal questions and receiving AI-generated answers.
- **Conversation history** — a sidebar listing all past chats by auto-generated title; click to reload that conversation's full message history.
- **New chat / multi-conversation support** — start a fresh conversation at any time without losing previous ones.
- **Loading & feedback states** — skeleton loaders for chat history/messages, a full-screen loader while checking auth, and toast/alert-style success/error notifications.
- **Responsive collapsible sidebar.**

## Tech Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router v6
- **State management:** Redux Toolkit + Redux-Saga (async flows for auth and chat)
- **Styling:** Tailwind CSS + React-Bootstrap
- **Forms:** Formik + Yup
- **HTTP:** Axios
- **UX/feedback:** SweetAlert2, react-loading-skeleton, react-spinners, simplebar-react

## Project Structure

```
src/
├── components/          # AppLayout, AuthLayout, SideBar, Header, ChatMessage, ChatTitle,
│                         # PrivateRoute / UnautherizedRoute (route guards), Loading
├── containers/
│   ├── Chat.jsx          # Main chat screen (message list + input)
│   └── auth/             # Login, Register screens
├── constants/           # API base URL, pagination defaults
├── redux/
│   ├── action/          # auth.action, chat.action (plain action creators)
│   ├── api/              # axiosInstance, authApi, chatApi (HTTP calls)
│   ├── constants/       # Redux action type constants
│   ├── reducers/        # authReducer, chatReducer, root reducer
│   ├── sagas/            # authSaga, chatSaga, root saga (side-effect handling)
│   └── store.js          # Redux store setup
├── App.jsx               # Route definitions, global auth check, global toasts
└── main.jsx              # App entry point
```

## How Chat Works (Frontend Flow)

1. On typing a message and hitting send, `Chat.jsx` dispatches `chatRequest({ text, chatId })`.
2. `chatSaga` calls the backend's semantic search endpoint with the message and current chat ID.
3. The backend responds with the AI-generated answer, the chat's ID (a new one is created if this is the first message), and an auto-generated chat title.
4. The reducer appends both the user's message and the AI response to the visible conversation, and the sidebar list is updated with the new/updated chat title.
5. Clicking a past conversation in the sidebar (`ChatTitle`) fetches that chat's full message history from the backend and loads it into the chat window.
6. "New Chat" clears the active conversation state and returns to a blank chat screen.

## Getting Started

### Prerequisites

- Node.js (recent LTS)
- A running instance of the [AI Lawyer backend](https://github.com/maferozi/AI-LAWYER-EXPRESS)

### Installation

```bash
git clone https://github.com/maferozi/AI-LAWYER-REACT.git
cd AI-LAWYER-REACT
npm install
```

### Environment Variables

Copy `.env_expample` to `.env` and fill in the values:

```env
VITE_NODE_ENV=development
VITE_BASE_URL=http://localhost:3000
VITE_JWT_TOKEN_NAME=token
```

| Variable | Description |
|---|---|
| `VITE_NODE_ENV` | Environment mode |
| `VITE_BASE_URL` | Base URL of the backend (the app appends `/api` itself) |
| `VITE_JWT_TOKEN_NAME` | Key name used to store the JWT (e.g. in local storage) |

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Related Repository

- Backend API: [AI-LAWYER-EXPRESS](https://github.com/maferozi/AI-LAWYER-EXPRESS)

## License

No license specified.
