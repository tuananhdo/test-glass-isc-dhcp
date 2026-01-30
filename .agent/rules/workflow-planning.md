---
trigger: always_on
---

# AGENT WORKFLOW RULE: PERSISTENT PLANNING
You must use persistent markdown files to track the state of this complex migration project.

## CORE FILES
1. `task_plan.md`: The master checklist. Update status [ ] to [x] as you go.
2. `progress_log.md`: A verbose log of every command run and its result.
3. `findings.md`: Key discoveries (e.g., dependency versions, breaking changes found).

## BEHAVIOR REQUIREMENTS
1. **Initialization:** Before writing any code, check if `task_plan.md` exists. If not, create it based on the user's goal.
2. **Context Saving:** After every 3 steps or a major error, write to `progress_log.md`.
3. **Resumption:** If you are restarted or lose context, READ `task_plan.md` and `progress_log.md` first to know where you left off.
4. **Error Handling:** If a command fails, log the exact error in `findings.md` before attempting a fix.

## FORMATTING
- `task_plan.md` must use hierarchical checklists.
- `progress_log.md` must have timestamps (e.g., [STEP 01]).