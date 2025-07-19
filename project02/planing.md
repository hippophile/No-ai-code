#  Mood Tracker — Slime Rancher Style

---

##  Requirements Analysis

###  Concept:
A Slime Rancher-inspired page where:
- The user selects their current mood by clicking on a specific slime
- Each slime has:
  - A unique sound
  - A custom quote
  - A specific background color
- The last selected mood is recorded in history
- Mood history is visible and clickable to revisit previous moods

---

##  Components:

| Component        | Description                                                            |
|------------------|------------------------------------------------------------------------|
| Header           | Message: "How are you feeling today?"                                  |
| Slime Gallery    | All available slimes with hover/click behavior                          |
| Slime Display    | The selected slime in large view + quote + background color change      |
| Sound System     | Hover and click sounds for each slime                                   |
| Mood History     | The last 3–5 selected moods shown in small icons, clickable             |

---

##  Pseudocode

###  On page load:

- Show the header: `"How are you feeling today?"`
- Display all slime icons/images on the screen
- For each slime:
  - On hover:
    - Animate upward movement (lift effect)
    - Play light bubbling sound
  - On click:
    - Hide all other slimes
    - Show the selected slime in large view
    - Show the quote that matches the mood
    - Play a unique mood-specific sound
    - Change the background color accordingly
    - Add the slime to the mood history

---

###  Mood History:

- Display the last 3–5 selected slimes (as small icons)
- Each one is clickable:
  - On click:
    - Re-display the full mood view (slime + quote + sound + background)

---

###  Return to slime gallery:

- After viewing the selected slime:
  - Either after a short delay or by clicking a button (e.g., “Pick another mood”):
    - Re-display all slime options
    - Show the “How are you feeling today?” message again

---

##  Bonus ideas:

- Slime animations (e.g., sparkle, bounce)
- Random quote button
- Dark/light mode toggle
- Use `localStorage` to save mood history between sessions

---
