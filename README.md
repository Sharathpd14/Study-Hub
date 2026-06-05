# StudyHub - Student Productivity Platform

A full-stack Next.js application for managing study notes and tracking tasks. This project demonstrates key Next.js concepts including file-based routing, server-side rendering, static generation, API routes, and server actions.

## 🎯 Project Overview

StudyHub is a **simple educational demonstration** of Next.js concepts learned in the Web Development Cohort. It's a productivity tool designed for students to centralize their academic workflow. Users can create and manage study notes, organize tasks with priorities and deadlines, and track their progress.

**⚠️ Note:** This is a learning project focused on demonstrating Next.js concepts. **Authentication is NOT implemented** - all features are publicly accessible to showcase routing, rendering strategies, API design, and server actions.


## ⚠️ Important Note

**This is an educational demonstration project** created to showcase Next.js concepts covered in the cohort lessons:
- File-based routing
- Server-side rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- API Routes (GET, POST, PUT, DELETE)
- Server Actions
- Database integration with Prisma

**Authentication is intentionally NOT implemented** to keep the focus on Next.js core concepts. All data is publicly accessible. In a production application, you would add authentication (using Clerk, NextAuth.js, or similar) to protect user data.

---

- **Frontend:** React 18, Next.js 14+ (App Router)
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL with Prisma ORM
- **Database Provider:** Neon (PostgreSQL hosting)
- **Styling:** CSS with custom design system
- **Package Manager:** npm

---

## ✨ Features Implemented

### 1. Study Notes Management
- Create, read, update, and delete study notes
- Rich text content storage
- Timestamp tracking (created/updated dates)
- Notes list view with preview

### 2. Task Management
- Create tasks with title, priority, status, and due date
- Set priority levels (Low, Medium, High)
- Track task status (Pending, Completed)
- Toggle task completion
- Visual priority indicators

### 3. Dashboard
- Real-time statistics (total notes, tasks, completed tasks)
- Quick action buttons
- Overview of user's study progress

### 4. User Experience
- Responsive design for all devices
- Clean, modern UI with hover effects
- Empty states with helpful messages
- Error pages (404, error handling)
- Sticky navigation bar
- Footer with quick links

---

## 📁 Project Structure

```
StudyHub/
├── app/
│   ├── (app)/                    # Authenticated app routes
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Dashboard page
│   │   ├── notes/
│   │   │   ├── page.tsx         # Notes list
│   │   │   ├── new/
│   │   │   │   └── page.tsx     # Create note
│   │   │   └── [id]/
│   │   │       ├── page.tsx     # View note
│   │   │       └── edit/
│   │   │           └── page.tsx # Edit note
│   │   └── tasks/
│   │       ├── page.tsx         # Tasks list
│   │       ├── new/
│   │       │   └── page.tsx     # Create task
│   │       └── [id]/
│   │           └── edit/
│   │               └── page.tsx # Edit task
│   ├── (public)/                 # Public routes
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   └── docs/
│   │       └── [[...slug]]/
│   │           └── page.tsx     # Documentation (catch-all)
│   ├── api/                      # API routes
│   │   ├── notes/
│   │   │   ├── route.ts         # GET all, POST create
│   │   │   └── [id]/
│   │   │       └── route.ts     # GET, PUT, DELETE single
│   │   ├── tasks/
│   │   │   ├── route.ts         # GET all, POST create
│   │   │   └── [id]/
│   │   │       └── route.ts     # GET, PUT, DELETE single
│   ├── layout.tsx               # Root layout
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   └── globals.css              # Global styles
├── components/
│   ├── navbar.tsx               # Navigation header
│   ├── sidebar.tsx              # Sidebar navigation
│   ├── footer.tsx               # Footer
│   ├── page-header.tsx          # Reusable page header
│   ├── note-form.tsx            # Note form component
│   ├── task-form.tsx            # Task form component
│   ├── empty-state.tsx          # Empty state display
│   └── layout.tsx               # App layout wrapper
├── actions/                      # Server Actions
│   ├── note.actions.ts          # Note server actions
│   └── task.actions.ts          # Task server actions
├── services/                     # Data services
│   ├── note.service.ts          # Note database operations
│   └── task.service.ts          # Task database operations
├── lib/
│   ├── db.ts                    # Database connection
│   ├── validators.ts            # Data validation helpers
│   └── api-response.ts          # API response formatting
├── prisma/
│   └── schema.prisma            # Database schema
├── .env.example                 # Example environment variables
├── package.json
└── tsconfig.json
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ and npm installed
- PostgreSQL database (or Neon account)
- Git

### Step 1: Clone the Repository
```bash
git clone (this repo url)
cd StudyHub
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

### Step 4: Configure Database Connection
Update `.env.local` with your PostgreSQL connection string:
```
DATABASE_URL="postgresql://user:password@host:port/database"
```

### Step 5: Setup Database
Run Prisma migrations to create tables:
```bash
npx prisma migrate dev --name init
```

Generate Prisma client:
```bash
npx prisma generate
```



### Step 6: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 7: Build for Production
```bash
npm run build
npm start
```

---

## 🔐 Environment Variables Required

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# Optional: Neon-specific
PGHOST="your-neon-hostname"
PGUSER="your-neon-user"
PGPASSWORD="your-neon-password"
PGDATABASE="neon_db"
```

See `.env.example` for reference.

---

## 🗄 Database Setup

### Database Schema

The project uses three main tables:

#### Notes Table
```sql
CREATE TABLE Note {
  id          Int      @id @default(autoincrement())
  title       String
  content     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

#### Tasks Table
```sql
CREATE TABLE Task {
  id        Int      @id @default(autoincrement())
  title     String
  priority  String   @default("medium")
  status    String   @default("pending")
  dueDate   DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Setup Steps
1. Create a PostgreSQL database (use Neon for free hosting)
2. Get your `DATABASE_URL` connection string
3. Update `.env.local` with the connection string
4. Run `npx prisma migrate dev --name init`
5. Run `npx prisma generate` to generate Prisma client

---

## 📍 Routes & Pages

### Public Routes (No Authentication Required)
| Route | Page | Rendering |
|-------|------|-----------|
| `/` | Home/Landing | SSR |
| `/about` | About StudyHub | SSG |
| `/docs` | Documentation | SSR |
| `/docs/[...slug]` | Nested Documentation | SSR |

### App Routes (Protected)
| Route | Page | Rendering |
|-------|------|-----------|
| `/dashboard` | Dashboard Overview | SSR |
| `/notes` | Notes List | SSR |
| `/notes/new` | Create Note | SSR |
| `/notes/[id]` | View Note | SSR |
| `/notes/[id]/edit` | Edit Note | SSR |
| `/tasks` | Tasks List | SSR |
| `/tasks/new` | Create Task | SSR |
| `/tasks/[id]/edit` | Edit Task | SSR |

---

## 🔗 API Routes

### Notes API
```
GET     /api/notes              - Get all notes
POST    /api/notes              - Create new note
GET     /api/notes/[id]         - Get specific note
PUT     /api/notes/[id]         - Update note
DELETE  /api/notes/[id]         - Delete note
```

### Tasks API
```
GET     /api/tasks              - Get all tasks
POST    /api/tasks              - Create new task
GET     /api/tasks/[id]         - Get specific task
PUT     /api/tasks/[id]         - Update task
DELETE  /api/tasks/[id]         - Delete task
```

### API Response Format
All endpoints return structured JSON responses:

**Success (200 OK):**
```json
{
  "success": true,
  "data": { /* item data */ }
}
```

**Error (4xx/5xx):**
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

---

## ⚙️ Server Actions

Server Actions are used for form submissions that update the database directly from React components.

### Note Server Actions
- **`createNoteAction`** (`actions/note.actions.ts`)
  - Creates a new note from form data
  - Uses `use server` directive
  - Revalidates notes page after creation
  
- **`updateNoteAction`** (`actions/note.actions.ts`)
  - Updates an existing note
  - Bound with note ID
  - Revalidates dashboard and notes list

- **`deleteNoteAction`** (`actions/note.actions.ts`)
  - Deletes a note
  - Revalidates affected pages

### Task Server Actions
- **`createTaskAction`** (`actions/task.actions.ts`)
  - Creates a new task
  - Revalidates dashboard and tasks list

- **`updateTaskAction`** (`actions/task.actions.ts`)
  - Updates task properties
  - Revalidates related pages

- **`toggleTaskAction`** (`actions/task.actions.ts`)
  - Toggles task completion status
  - Quick action for marking complete/incomplete

- **`deleteTaskAction`** (`actions/task.actions.ts`)
  - Deletes a task
  - Revalidates dashboard

### Why Server Actions Here?
- Direct database updates from forms
- No need for separate POST requests
- Automatic revalidation of related pages
- Better security (logic stays on server)
- Simpler than managing fetch calls

---

## 📊 Rendering Strategies Used

### 1. Server-Side Rendering (SSR)
**Pages:** Dashboard, Notes, Tasks, Create/Edit forms

**Why:**
- Data is dynamic and user-specific
- Fresh data needed on each request
- User interactions trigger page updates
- Dashboard shows real-time statistics

**Implementation:**
```tsx
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const data = await fetchData();
  return <Page data={data} />;
}
```

### 2. Static Site Generation (SSG)
**Pages:** About, Documentation (partially)

**Why:**
- Content doesn't change frequently
- Can be cached at CDN
- Fast loading for public pages
- No user-specific data needed

**Implementation:**
```tsx
// No dynamic = "force-dynamic"
// Default behavior is SSG

export default async function AboutPage() {
  return <StaticContent />;
}
```

### 3. Incremental Static Regeneration (ISR)
**Pages:** Documentation pages

**Why:**
- Content doesn't change frequently
- Want fast loading for public
- Revalidate periodically as needed
- Balance between freshness and performance

---

## 📚 Concepts Covered from Cohort Lessons

This project demonstrates the following concepts from **Next.js Lesson 1** and **Lesson 2**:

### 1. File-Based Routing ✅
- Dynamic routes with `[id]` folder syntax
- Catch-all routes with `[[...slug]]`
- Route groups using `(groupName)` folders
- Nested layouts and pages
- Automatic route generation without configuration

### 2. Layouts ✅
- Root layout (`app/layout.tsx`) with navbar and footer
- Group layouts for different sections
- Nested layouts with shared components
- Sidebar for app routes
- Clear component hierarchy

### 3. Multiple Pages/Routes ✅
- 15+ pages across app and public sections
- Dynamic route parameters
- Nested routes with multiple levels
- Clear separation of public and protected routes

### 4. Server-Side Rendering (SSR) ✅
- Dashboard with real-time data
- Notes and tasks lists fetch on every request
- Dynamic content fetching
- `export const dynamic = "force-dynamic"`
- Best for user-specific data

### 5. Static Site Generation (SSG) ✅
- About page generated at build time
- Public pages cached statically
- Documentation pages
- Default behavior (no revalidate)
- Fast loading from cache

### 6. Incremental Static Regeneration (ISR) ✅
- Documentation pages revalidated periodically
- `export const revalidate = 3600` (1 hour)
- Balance between static performance and fresh data
- On-demand revalidation

### 7. API Routes ✅
- RESTful endpoints for notes and tasks
- GET, POST, PUT/PATCH, DELETE methods
- Type-safe with TypeScript
- Structured error handling
- Proper HTTP status codes
- Can be called from external clients

### 8. Database Connection ✅
- Prisma ORM with PostgreSQL
- Connection pooling with Neon
- Type-safe database queries
- Schema management with migrations
- Environment-based configuration

### 9. Structured API Responses ✅
- Consistent JSON response format
- Success/error handling patterns
- Proper error codes and messages
- HTTP status codes (200, 400, 404, 500)
- Validation before database operations

### 10. Error Handling ✅
- Error boundary (`app/error.tsx`)
- 404 page (`app/not-found.tsx`)
- Form validation with error messages
- API error responses with meaningful messages
- Try-catch blocks for database operations

### 11. Server Actions ✅
- `use server` directive in action files
- Direct database mutations from forms
- Form submissions without API routes
- Automatic `revalidatePath` and `revalidateTag`
- Type-safe form data handling

### 12. API Routes vs Server Actions (Clear Distinction) ✅
- **API Routes:** Used for explicit REST endpoints
  - Notes and tasks endpoints
  - Can be called from external clients (Postman, curl)
  - Stateless operations
  - Use for public APIs
  
- **Server Actions:** Used for form submissions
  - Direct component-to-database mutations
  - Automatic page revalidation
  - Better for internal app mutations
  - Optimistic updates possible
  - More secure (no network visibility)

---

## 🎯 Key Implementation Highlights

### 1. Clean Routing
- Organized folder structure
- Clear separation of public and app routes
- Route groups for logical grouping
- Easy to navigate and understand

### 2. Correct Rendering Strategy
- Data fetching happens at the right level
- SSR for dynamic user data
- SSG for static content
- ISR for semi-dynamic content

### 3. Proper API Design
- RESTful endpoints (notes and tasks)
- Consistent naming conventions
- Proper HTTP methods (GET, POST, PUT, DELETE)
- Structured error responses

### 4. Database Integration
- Prisma ORM for type safety
- Database operations in services
- Proper connection management
- Schema versioning with migrations

### 5. Server Actions
- Used for meaningful user flows
- Clear separation from API routes
- Automatic revalidation
- Better security (secrets stay on server)

### 6. Code Quality
- Reusable components
- Clean service layer
- Meaningful naming
- Error boundary implementation

---

## ⚠️ Assumptions & Limitations

### Current Assumptions
- **No Authentication** - This is an educational demo to focus on Next.js routing and concepts
- Single-user/public data model (all data is viewable and modifiable)
- No user isolation or data privacy concerns
- Simple text-based storage without file uploads

### Known Limitations ⚠️
   - This is an educational demonstration project
   - All data is publicly accessible
   - Focus is on Next.js concepts, not security
   - Production version would need Clerk, NextAuth.js, or similar

2. **No Rich Text Editor**
   - Notes use plain text/textarea
   - Sufficient for demonstrating CRUD operations
   - Can integrate Tiptap or Monaco editor in production

3. **No File Uploads**
   - Simple text-based storage only
   - Keeps database simple for learning
   - Can add S3/Cloudinary integration for production

4. **No Real-time Updates**
   - Page requires refresh for new data
   - Demonstrates ISR and SSR concepts clearly
   - Can add WebSocket/Supabase realtime for production

6. **No Offline Support**
   - Requires active internet connection
   - Focus on server-side rendering concepts
   - Can add PWA capabilities for production connection
   - Can add PWA capabilities

---

## 📋 Checklist - What's Covered

- ✅ Next.js project setup
- ✅ File-based routing
- ✅ Layouts and nested routes
- ✅ Server-Side Rendering (Production Version)

1. **Add Authentication** (Clerk or NextAuth.js)
   - User login/signup
   - User-specific data isolation
   - Session management
   
- ✅ API Routes (GET, POST, PUT, DELETE)
- ✅ Database connection (PostgreSQL + Prisma)
- ✅ Structured API responses
- ✅ Proper error handling
- ✅ Server Actions with `use server`
- ✅ Clear API Routes vs Server Actions distinction
- ✅ Clean code and organization
- ✅ Meaningful error handling
- ✅ Clear project structure
- ✅ README documentation
- ✅ Environment configuration

---

## 🚀 Future Enhancements

1. Add user authentication (Clerk or NextAuth.js)
2. Implement rich text editor for notes
3. Implement file uploads
4. Real-time collaboration with WebSockets
5. Dark mode support
6. Export notes as PDF
7. Search and filter functionality
8. Sharing notes with other users
9. AI-powered study suggestions
10. Mobile app with React Native

---

## 📞 Support & Questions

For questions about the implementation or concepts:
- Review the code comments in key files
- Check the Prisma schema for data structure
- Examine API routes for REST patterns
- Look at Server Actions for form handling

---

## 📄 License

This project is created for educational purposes as part of a Web Development cohort assignment.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- PortLearning Objectives Achieved

This project successfully demonstrates proficiency in:
- ✅ File-based routing in Next.js App Router
- ✅ Understanding SSR, SSG, and ISR rendering strategies
- ✅ Building RESTful APIs with proper HTTP methods
- ✅ Database integration with Prisma ORM
- ✅ Server Actions vs API Routes distinction
- ✅ Error handling and validation patterns
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Environment configuration best practices
- ✅ Full-stack application development

Perfect portfolio project showcasing
- Environment configuration
- RESTful API principles

Perfect for your portfolio to showcase Next.js expertise! 🚀
