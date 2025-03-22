# Project Phase 1 - Definition and Planning  

## 1. User Personas  

- **Emma (Software Developer)**: Works on multiple projects. Needs a task manager that tracks deadlines and overdue tasks.  
- **John (Project Manager)**: Manages a team and assigns tasks. Needs an overview of upcoming deadlines and task status.  
- **Sarah (University Student)**: Juggles assignments and exams. Needs reminders for deadlines and weekly planning.  

## 2. Use Cases and User Flows  

### Use Cases (For Grade 5):  
1. **User can add a new task** with a title, description, and due date.  
2. **User can categorize tasks** as "Upcoming," "Overdue," or "This Week."  
3. **User can mark tasks as completed** and remove them when done.  
4. **User receives automatic updates** on overdue and upcoming tasks.  
5. **User can edit or delete tasks** as needed.  

### User Flow Example: Adding a New Task  
1. User opens the app → Clicks "Add Task" → Enters task details → Sets a due date → Saves task.  
2. The system categorizes the task as "Upcoming," "This Week," or "Overdue" based on the due date.  

---

## 3. UI Prototypes  
https://github.com/roshipathak20/ProjectMate/blob/main/images/Screenshot.png

-  ![Task Management Screenshot](images/Task%20Management.png)

- **Figma Prototype Link**: [ProjectMate Prototype](https://www.figma.com/design/ERDFKCFwL7CNNnyoNSfmSD/Project-Mate?node-id=0-1&p=f&t=fNwJvC5JvrbB2DXa-0)  

---

## 4. Information Architecture and Technical Design  

- **Database Schema:**  
  - `Users (id, name, email, password)`  
  - `Tasks (id, user_id, title, description, due_date, status)`  

- **API Endpoints:**  
  - `POST /tasks` → Add a new task  
  - `GET /tasks` → Retrieve all tasks  
  - `PUT /tasks/:id` → Update task status  
  - `DELETE /tasks/:id` → Remove a task  

- **Task Categorization Logic:**  
  - **Upcoming:** Tasks due in the future  
  - **Overdue:** Tasks past the due date  
  - **This Week:** Tasks due within the next 7 days  

- **System Diagram:** Diagram showing frontend-backend-database interaction  

---

## 5. Project Management and User Testing  

- **Project Timeline:** Gantt Chart showing task deadlines (Attach Screenshot)  
- **Testing Plan:**  
  - Test with 3 users:  
    - Can they add tasks easily?  
    - Do overdue and upcoming notifications work?  
  - Document feedback and improve UI.  

- **Risk Management:**  
  - **Risk:** Users might forget to check tasks. **Solution:** Send reminders.  
  - **Risk:** Overwhelming UI. **Solution:** Keep a clean, minimal layout.  

