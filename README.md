# Employee Dashboard & Directory App (React)

A modern, responsive **Employee Dashboard** application built with **React**, **React Router v7**, and **Bootstrap 5**, fulfilling all requirements with external REST API integration, dynamic view modes, and an interactive Employee Registration Form (Frontend only, no POST request).

---

## Key Features

### 1.  Navigation Bar
- **Home / Dashboard Link (`/` or `/dashboard`)**: Navigates to the employee directory showing live employee metrics and API records.
- **Employee Form Link (`/employee-form`)**: Navigates to the employee form.
- **Active Route Highlighting**: Automatically highlights the active page.
- **Live Counter Badge**: Displays total employees in real time.
- **Mobile Responsive**: Fully responsive navbar with toggler.

### 2. 📊 Live Dashboard & External API Integration
- Fetches employee data from external REST API:
  ```
  https://jsonplaceholder.typicode.com/users
  ```
- Graceful loading state (custom spinner) and error handling with retry capability.
- Real-time search filter by ID, Name, or Email.

### 3.  Multiple View Modes (Tabular / Card / List)
Seamless one-click view toggle displaying the required fields:
- **`id`**
- **`name`**
- **`email`**
- **Tabular View**: Styled Bootstrap table (`table-hover`) with columns for ID, Name, Email, and View action.
- **Card View**: Responsive card grid with avatars, ID badges, Name, and Email.
- **List View**: Compact horizontal list group.
- **Profile Modal**: Click any employee to view their full profile popup.

### 4. Employee Form (No POST Data from Frontend)
A dedicated registration form with strictly the 4 requested fields:
- **`Name`**
- **`Designation`**
- **`Location`**
- **`Salary`**
- **Frontend Only**: Validates required fields, captures the data locally on client-side, and displays a confirmation alert. **No HTTP POST request is dispatched to external servers.**
- Reset button to clear inputs.
- Quick navigation button to return to the Dashboard.

### 5. 🛣️ Routing Architecture
Configured with **React Router**:
| Route Path | Component | Purpose |
|---|---|---|
| `/` | `<Dashboard />` | Main Employee Dashboard / Home |
| `/dashboard` | `<Dashboard />` | Alias route for Dashboard |
| `/home` | `<Dashboard />` | Alias route for Home |
| `/employee-form` | `<EmployeeForm />` | Employee Form |
| `*` | `<NotFound />` | Friendly 404 handler |

### 6.  CSS Library
- **Bootstrap 5.3** for responsive layout, cards, tables, forms, buttons, and navigation.
- **Bootstrap Icons** for clear iconography.
- Custom modern styling in `App.css`.

---

##  Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

### 2. Installation
Navigate to the project directory:
```bash
cd C:\Users\Rose\.gemini\antigravity\scratch\employee-dashboard
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and visit:
```
http://localhost:5173
```

### 4. Build for Production
```bash
npm run build
```
