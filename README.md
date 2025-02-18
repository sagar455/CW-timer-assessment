# Timer App Assignment

Welcome to the Timer App Assignment! This project is designed to evaluate your skills in React development, focusing on **UI implementation**, **code quality**, **state management**, and **best practices**. The project uses **React**, **Vite**, **Tailwind CSS**, and **Vitest** for testing.

---

## **Objective**
Your task is to improve and enhance an existing Timer App based on the following requirements. The app currently has a partially implemented timer system, and your goal is to address the listed issues and extend its functionality.

---

## **Tech Stack**
- **Frontend Framework**: React (with Vite for fast development)
- **Styling**: Tailwind CSS
- **Testing Framework**: Vitest (for unit and component testing)

---

## **Completed Objectives**

   1. ✅**Match the UI:**
      - Ensure the app's UI matches the given **screenshots**.
      - <img width="250" alt="Screenshot 2024-12-03 at 8 30 53 PM" src="https://github.com/user-attachments/assets/59782304-c254-4d87-9fac-7f92c15bbc6f">
      - <img width="250" alt="Screenshot 2024-12-03 at 3 29 25 PM" src="https://github.com/user-attachments/assets/9bb429ff-cd78-4411-b222-9d947c3ae79b">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 04 PM" src="https://github.com/user-attachments/assets/a26e8ec7-7e00-4964-8f61-651945f4bbd1">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 30 PM" src="https://github.com/user-attachments/assets/a513a462-540f-45e7-8ac0-0890995ec82d">


   2.  ✅**Simultaneous Timers:**
      - Update the app to allow multiple timers to run simultaneously (currently, only one timer runs at a time).

   3.  **Snack Bar Behavior:**
      - When a timer is completed:
        ✅ - A snack bar notification should display.
        ❌- The notification sound should keep playing until the snack bar is dismissed.

   4. **Fix Snack Bar Console Error:**
       ✅- Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   5. **Extract Common Components:**
       ✅- Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
       ✅- Replace all instances of similar buttons in the app with this component.

   6. **Consolidate Modal Code:**
       ✅- Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   7. **Validation Snack Bars:**
       ✅- Currently, the **Submit button** is disabled when the form is invalid.
       ✅- Show an **error snack bar** or notification when the form is submitted with invalid data.

   8. **Responsive Snack Bar Placement:**
      ✅ - For **desktop devices**: Display snack bars in the **top-right corner**.
       ✅- For **mobile devices**: Display snack bars at the **bottom of the screen**.

   9. **Write Tests:**
       ✅- Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   10. **Timer Persistence:**
        ✅- Use **localStorage** to persist timers across page refreshes.

---

## **Project Setup**

1. Clone the repository:  
   ```bash
   git clone https://github.com/CW-Codewalnut/timer.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

4. Run tests:  
   ```bash
   npm vitest
   ```

---

## **Enhancements Made**
   - Added a confirmation modal at deletion.
   - refactored code previously using 3 different states for maintaining the timer but now it is handled in one singe state.
   - matched UI as per the given screenshots.
   - removed disabling of button in add timer modal and added error messages in snackbar.
   - consolidated the code for add and edit timer modal.
   - no data loss on page refreshing saving it in localStorage.
   - added one CustomButton component which is flexible to be used in nay types of buttons (buttons with text, icons, only icons, etc).
   - fixed functionality of simultaneously working of timers.
