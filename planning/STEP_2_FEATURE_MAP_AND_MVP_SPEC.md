# Step 2: Feature Map and MVP Specification

## Project direction

This document defines the feature map and first MVP specification for the upgraded Russia study platform.

The updated app should become a **lesson, guided study and revision platform** for AQA A-Level History: Tsarist and Communist Russia, 1855-1964.

The core product model is:

> One shared platform with two user experiences: a student interface and a teacher interface.

The student and teacher versions should not be separate apps. They should be two role-based interfaces connected through a shared content library and shared progress database.

```text
Teacher assigns lesson or guided study
        ↓
Student completes trackable activities
        ↓
Database stores scores, responses, confidence and completion
        ↓
Teacher dashboard displays progress and intervention needs
        ↓
Teacher sets next study, recap or intervention
```

The current `Russia_revision` app should be treated as the **prototype and content source**, especially for lessons, learning journey, flashcards, quizzes, daily challenge, games and progress logic. The new platform should rebuild those ideas in a modular, database-backed architecture.

---

## 1. Product aims

The app should solve three linked problems.

### 1.1 Student independent study problem

Students often do not know what effective independent study looks like. They may reread notes, highlight, or revise randomly.

The app should give them a structured pathway:

```text
Learn → Retrieve → Apply → Write → Reflect → Improve
```

Students should always know:

- what to do next
- why it matters
- how long it should take
- how it links to the AQA Russia course
- how secure they are
- what they need to improve

### 1.2 Teacher monitoring problem

Teachers often set independent study without being able to see meaningful evidence of learning.

The teacher interface should show:

- who completed the work
- who partially completed the work
- who did not start
- quiz scores
- written responses
- confidence ratings
- topic weaknesses
- skill weaknesses
- suggested interventions

### 1.3 Revision app limitation

The current app has strong student revision features, but it is mainly a single-user revision tool.

The new platform should become:

> Lessons + guided study + revision + exam practice + progress tracking + teacher intervention.

---

## 2. Core platform model

The platform should be built around this hierarchy:

```text
Course
  ↓
Unit
  ↓
Lesson
  ↓
Activity
  ↓
Assignment
  ↓
Student response
  ↓
Teacher insight
```

The reusable content model should be:

```text
Activity Library
     ↓
Lessons
     ↓
Guided Study Pathways
     ↓
Revision Pathways
     ↓
Teacher Assignments
     ↓
Student Progress
```

This is important because the same activity should be reusable in different contexts. For example, a retrieval quiz on the 1905 Revolution could appear in:

- a live lesson
- a catch-up lesson
- teacher-set guided study
- independent revision
- intervention work
- exam week recap

---

## 3. MVP definition

The first reliable MVP should prove one core loop:

```text
Teacher assigns one 1905 Revolution lesson or guided study pathway
        ↓
Student completes lesson, quiz, flashcards, PEEL response and confidence exit ticket
        ↓
App saves completion, quiz score, flashcard confidence, written response and confidence rating
        ↓
Teacher sees accurate progress by student
        ↓
Teacher can identify who needs intervention
```

The MVP should not try to build the entire course. It should build one excellent pilot pathway and prove that the student/teacher data loop works.

---

## 4. Pilot pathway: 1905 Revolution

### 4.1 Why 1905 is the recommended pilot

The 1905 Revolution is the best first pilot because it tests most of the required app logic.

| App requirement | Why 1905 works |
|---|---|
| Chronology | Russo-Japanese War, Bloody Sunday, October Manifesto, Fundamental Laws |
| Causation | War, economic hardship, opposition, Tsarist weakness, repression |
| Significance | Was 1905 a turning point or a missed opportunity? |
| Retrieval | Dates, groups, events, reforms, consequences |
| Conceptual thinking | Cause, consequence, change, continuity, significance |
| Written judgement | PEEL paragraph on the significance/impact of 1905 |
| Confidence tracking | Students often know fragments but confuse key details |
| Teacher insight | Misconceptions are easy to identify from quiz and written work |

### 4.2 Pilot enquiry question

> How significant was the 1905 Revolution in weakening Tsarist authority?

Alternative lesson enquiry:

> Was the 1905 Revolution a turning point for Tsarist Russia?

### 4.3 Pilot pathway structure

The first trackable pathway should contain six sections.

| Order | Section | Activity type | Student action | Data captured |
|---:|---|---|---|---|
| 1 | Lesson introduction | Lesson content | Read/view enquiry, context and key narrative | Viewed / started |
| 2 | Retrieval starter | Quiz | Answer 8-10 factual questions | Score, incorrect answers, completion |
| 3 | Flashcard study | Flashcards | Review key terms/events and mark confidence | Known/unknown, cards completed |
| 4 | Knowledge check | Quiz | Complete a short mastery quiz | Score, target met, misconceptions |
| 5 | PEEL response | Written response | Write one paragraph answering the enquiry | Text response, submitted status, autosave |
| 6 | Confidence exit ticket | Confidence/reflection | Rate security and identify one concern | Confidence score, student comment |

### 4.4 Pilot historical content coverage

The 1905 pathway should cover:

- Russo-Japanese War, 1904-05
- Bloody Sunday, January 1905
- Strikes and unrest
- Peasant disturbances
- National minority unrest
- Mutinies, including Potemkin
- St Petersburg Soviet
- October Manifesto
- Duma concessions
- Fundamental Laws, 1906
- Repression and restoration of authority
- Debate: turning point or survival strategy?

### 4.5 Pilot key knowledge list

Students should know:

| Knowledge item | Required detail |
|---|---|
| Russo-Japanese War | Humiliation weakened confidence in Tsarist rule |
| Bloody Sunday | Peaceful protest violently suppressed; damaged image of Tsar as Little Father |
| October Manifesto | Promised civil liberties and elected Duma |
| Duma | Representative assembly, but powers later restricted |
| Fundamental Laws | Reasserted Tsar's autocratic authority in 1906 |
| St Petersburg Soviet | Evidence of organised worker opposition |
| Mutinies | Showed army/navy loyalty could not be assumed |
| Repression | Regime survived through coercion and division of opponents |

### 4.6 Pilot PEEL task

Question:

> Explain one way in which the 1905 Revolution weakened Tsarist authority.

Stretch version:

> How significant was the 1905 Revolution in weakening Tsarist authority?

Expected PEEL structure:

| PEEL stage | Student should do |
|---|---|
| Point | Make a clear judgement about how 1905 weakened authority |
| Evidence | Use precise evidence such as Bloody Sunday, October Manifesto, Duma, Fundamental Laws |
| Explain | Show how this affected legitimacy, opposition, reform or repression |
| Link | Return to significance: turning point, partial weakening, or survival of autocracy |

### 4.7 Pilot confidence exit ticket

Students answer:

1. How confident are you with the 1905 Revolution? 1-5
2. Which part is least secure?
   - Causes
   - Events
   - October Manifesto
   - Duma/Fundamental Laws
   - Significance judgement
3. Write one thing you need to revise or ask about.

---

## 5. Student interface feature map

### 5.1 Student dashboard

Purpose:

The student dashboard should tell students exactly what to do next.

MVP dashboard content:

| Element | Description | MVP? |
|---|---|---|
| Current assignment card | Shows assigned 1905 pathway, due date and progress | Yes |
| Continue button | Takes student to next incomplete section | Yes |
| Progress bar | Shows pathway completion, e.g. 3/6 sections complete | Yes |
| Latest score | Shows quiz score once completed | Yes |
| Confidence reminder | Shows confidence rating after exit ticket | Yes |
| Independent revision shortcut | Takes student to flashcards/quiz | Phase 2 |
| Course journey map | Topic-by-topic progress | Phase 2 |
| Streak/XP | Motivation layer | Later |

Student dashboard MVP example:

```text
My Guided Study
1905 Revolution: Was 1905 a turning point?
Due: Friday
Progress: 2/6 sections complete
Next step: Flashcard study
[Continue]
```

### 5.2 My Lessons

Purpose:

To preserve and upgrade the current lesson feature as assignable and trackable lesson pathways.

| Feature | Description | MVP? |
|---|---|---|
| Assigned lesson view | Student opens the 1905 lesson pathway | Yes |
| Step-by-step lesson sections | Lesson split into clear sections | Yes |
| Progress indicator | Shows completed sections | Yes |
| Self-study/catch-up mode | Student can work independently | Yes |
| Teacher-led live mode | Full-screen teaching view | Phase 2 |
| Lesson library browsing | Students can choose other lessons | Phase 2 |
| Lesson notes/model answers | Supports revision and catch-up | Phase 2 |

### 5.3 My Guided Study

Purpose:

Teacher-set independent study. This is the upgraded version of the current daily challenge/guided journey idea.

| Feature | Description | MVP? |
|---|---|---|
| Assigned pathway | 1905 Revolution pathway set by teacher | Yes |
| Required activities | Lesson, quiz, flashcards, PEEL, exit ticket | Yes |
| Due date | Shows deadline | Yes |
| Completion status | Not started / in progress / complete | Yes |
| Teacher-set target score | Quiz target, e.g. 80% | Phase 2 |
| Recap Week mode | Older topic retrieval | Phase 2 |
| Exam Week mode | Timed exam-style practice | Phase 2 |
| Intervention Week mode | Targeted weak students | Phase 2 |
| Mastery Week mode | Challenge tasks | Phase 2 |

### 5.4 My Revision

Purpose:

Student-led revision outside teacher-set work.

| Feature | Description | MVP? |
|---|---|---|
| 1905 flashcards | Student can review key cards | Yes, limited |
| 1905 quiz retry | Student can retry quiz | Yes, limited |
| Topic selection | Choose any Russia topic | Phase 2 |
| Spaced review recommendations | App recommends weak cards | Phase 2 |
| Timeline tasks | Chronological recall | Phase 2 |
| Games | Low-stakes recall | Later |

### 5.5 My Exam Practice

Purpose:

To build AQA AO1/AO3 exam skill over time.

| Feature | Description | MVP? |
|---|---|---|
| PEEL response box | Student writes one paragraph | Yes |
| PEEL scaffold | Optional prompt for Point, Evidence, Explain, Link | Yes |
| Autosave | Prevents loss of written work | Yes |
| Teacher view of response | Teacher can read submission | Yes |
| AI diagnostic feedback | Suggests improvement | Later |
| Full 25-mark essay planner | Intro/factor/judgement planning | Phase 2 |
| AO3 interpretation builder | Argument, quote, own knowledge, judgement | Phase 2 |
| Timed essay mode | Timed written responses | Later |

### 5.6 My Progress

Purpose:

To help students see security, not just activity.

| Feature | Description | MVP? |
|---|---|---|
| Assignment completion | Shows 1905 pathway progress | Yes |
| Quiz score | Shows score and target status | Yes |
| Flashcard confidence | Shows cards known/unknown | Yes |
| Confidence rating | Shows self-reported security | Yes |
| Topic journey map | Wider course progress | Phase 2 |
| Skill profile | AO1/AO3/judgement weaknesses | Phase 2 |
| Recommended next task | Suggested recap/intervention | Phase 2 |

---

## 6. Teacher interface feature map

### 6.1 Teacher dashboard

Purpose:

The teacher dashboard should quickly show whether guided study has been completed and who needs support.

MVP dashboard content:

| Element | Description | MVP? |
|---|---|---|
| Class assignment summary | Shows 1905 pathway completion | Yes |
| Completion count | e.g. 18/24 completed | Yes |
| Student table | Shows each student's progress | Yes |
| Quiz score column | Shows score and target status | Yes |
| Flashcard completion column | Shows card confidence/completion | Yes |
| PEEL submission column | Submitted / missing / draft | Yes |
| Confidence column | 1-5 self-rating | Yes |
| Risk flag | Missing / low score / low confidence | Yes, simple |
| Class insight summary | Auto summary of weaknesses | Phase 2 |
| Export | CSV/PDF report | Later |

MVP teacher table example:

| Student | Progress | Quiz | Flashcards | PEEL | Confidence | Risk |
|---|---:|---:|---:|---|---:|---|
| Student A | 6/6 | 8/10 | 10/10 | Submitted | 4 | Secure |
| Student B | 4/6 | 5/10 | 6/10 | Missing | 2 | Intervention |
| Student C | 0/6 | - | - | - | - | Not started |

### 6.2 Classes

Purpose:

Teachers need to organise students into teaching groups.

| Feature | Description | MVP? |
|---|---|---|
| Create class | Teacher creates Year 12 Russia class | Yes |
| Add students | Add/import students | Yes, simple |
| View class list | See students and current assignment status | Yes |
| Multiple classes | More than one class | Phase 2 |
| Student groups | Intervention/mastery groups | Phase 2 |
| CSV import | Bulk add students | Later |

### 6.3 Lessons Library

Purpose:

Teachers should be able to choose lessons to teach live or assign as catch-up/guided study.

| Feature | Description | MVP? |
|---|---|---|
| 1905 lesson card | Shows title, enquiry, activities | Yes |
| Preview lesson | Teacher can view lesson before assigning | Yes |
| Assign lesson | Assign full 1905 pathway | Yes |
| Assign selected sections | Choose only quiz/PEEL/exit ticket | Phase 2 |
| Teach live | Full-screen classroom mode | Phase 2 |
| Search/filter | By topic, period, skill | Phase 2 |

### 6.4 Activity Library

Purpose:

Reusable bank of activities that can appear in lessons, guided study and revision.

| Activity | Current status | MVP? |
|---|---|---|
| Lesson content | Exists conceptually in current app | Yes |
| Quiz | Exists in current app | Yes |
| Flashcards | Exists in current app | Yes |
| PEEL response | Needs structured build | Yes |
| Confidence exit ticket | Needs structured build | Yes |
| Timeline ordering | Needs build/rebuild | Phase 2 |
| Cause ranking | Needs build/rebuild | Phase 2 |
| AO3 extract task | Needs build/rebuild | Phase 2 |
| Games | Exists | Later |

### 6.5 Set Guided Study

Purpose:

Teachers should assign work quickly.

MVP guided study builder:

```text
Class: Year 12 Russia
Pathway: 1905 Revolution
Activities: Lesson + Quiz + Flashcards + PEEL + Exit Ticket
Due date: Friday
Assign
```

| Feature | Description | MVP? |
|---|---|---|
| Select class | Choose teaching group | Yes |
| Select pathway | Choose 1905 Revolution | Yes |
| Set due date | Add deadline | Yes |
| Assign | Creates assignment in database | Yes |
| Select activities | Customise sections | Phase 2 |
| Quick-set modes | Learning Journey / Recap / Exam / Intervention | Phase 2 |
| Duplicate assignment | Reuse previous setup | Later |

### 6.6 Student progress view

Purpose:

A detailed view for individual intervention.

| Feature | Description | MVP? |
|---|---|---|
| Student assignment status | 1905 progress | Yes |
| Quiz answers/score | Shows incorrect questions | Yes |
| Flashcard confidence | Shows weak cards | Yes |
| PEEL response | Teacher reads paragraph | Yes |
| Confidence answer | Shows student concern | Yes |
| Teacher comment | Add feedback | Phase 2 |
| Suggested next task | Recommend intervention | Phase 2 |

### 6.7 Intervention groups

Purpose:

Group students by need.

| Group type | Basis | MVP? |
|---|---|---|
| Non-completers | Not started/incomplete | Yes, simple flag |
| Low quiz score | Below target | Yes, simple flag |
| Low confidence | Confidence 1-2 | Yes, simple flag |
| Missing PEEL | No written response | Yes, simple flag |
| AO1 weakness group | Repeated retrieval issues | Phase 2 |
| Judgement group | Weak written responses | Phase 2 |
| Mastery group | High scores and confidence | Phase 2 |

### 6.8 Reports

Purpose:

Useful for teacher follow-up, independent study evidence and parent/student conversations.

| Report | MVP? |
|---|---|
| Assignment completion report | Phase 2 |
| Class heat map | Phase 2 |
| Student progress summary | Phase 2 |
| CSV export | Later |
| Parent-friendly summary | Later |

---

## 7. Activity type specification

### 7.1 Lesson content activity

Purpose:

Preserve the lessons feature and turn lesson sections into trackable student learning.

MVP requirements:

- lesson title
- enquiry question
- short explanatory content
- key knowledge panel
- next/previous navigation
- progress status
- viewed/completed record

Data captured:

```text
student_id
assignment_id
activity_id
status: started / completed
started_at
completed_at
```

### 7.2 Quiz activity

Purpose:

Track retrieval and misconceptions.

MVP requirements:

- 8-10 questions on 1905
- multiple-choice format
- immediate correct/incorrect feedback
- final score
- target status
- retry option

Data captured:

```text
score
max_score
percentage
answers
incorrect_question_ids
completed_at
attempt_number
```

### 7.3 Flashcard activity

Purpose:

Build key term/event confidence.

MVP requirements:

- 8-12 flashcards on 1905
- front/back card display
- mark as confident / not yet
- completion count
- weak card list

Data captured:

```text
cards_seen
cards_confident
cards_not_yet
completion_percent
last_reviewed_at
```

### 7.4 PEEL written response activity

Purpose:

Build AQA AO1 written argument and judgement.

MVP requirements:

- question prompt
- optional PEEL scaffold
- writing box
- autosave
- submit button
- teacher view

Data captured:

```text
response_text
draft_text
status: draft / submitted
last_saved_at
submitted_at
word_count
```

MVP rubric flags for later/teacher view:

| Flag | Meaning |
|---|---|
| Has point | Student makes clear claim |
| Has evidence | Student uses precise historical knowledge |
| Has explanation | Student explains significance |
| Has link/judgement | Student links back to the question |

These flags can initially be teacher-visible checklist items rather than AI-generated.

### 7.5 Confidence exit ticket

Purpose:

Capture self-reported security and identify hidden concerns.

MVP requirements:

- 1-5 confidence rating
- least secure area dropdown
- short student comment

Data captured:

```text
confidence_score
least_secure_area
student_comment
submitted_at
```

Teacher flags:

| Condition | Flag |
|---|---|
| confidence 1-2 | Low confidence |
| low quiz + low confidence | Intervention needed |
| high quiz + low confidence | Reassurance/check-in |
| low quiz + high confidence | Miscalibration |

---

## 8. Pilot activity content outline: 1905 Revolution

### 8.1 Lesson section outline

| Section | Content |
|---|---|
| Enquiry | Was the 1905 Revolution a turning point for Tsarist Russia? |
| Context | Russia under Nicholas II before 1905 |
| Trigger | Russo-Japanese War and Bloody Sunday |
| Spread | Strikes, peasant unrest, nationalities, mutinies, soviets |
| Response | October Manifesto and Duma concessions |
| Limitation | Fundamental Laws and repression |
| Judgement | 1905 weakened authority but did not destroy autocracy |

### 8.2 Sample retrieval quiz questions

1. In which year did Bloody Sunday take place?
2. Which war exposed the weakness of the Tsarist regime in 1904-05?
3. What was promised in the October Manifesto?
4. What was the Duma?
5. What did the Fundamental Laws reassert in 1906?
6. Which city formed an important Soviet in 1905?
7. What did the Potemkin mutiny suggest about Tsarist authority?
8. Why did Bloody Sunday damage Nicholas II's image?
9. Which groups were involved in unrest during 1905?
10. Why did the Tsarist regime survive the 1905 Revolution?

### 8.3 Sample flashcards

| Front | Back |
|---|---|
| Bloody Sunday | January 1905 event where peaceful protesters were shot by troops, damaging the Tsar's image |
| October Manifesto | Promise of civil liberties and an elected Duma issued to divide opposition and restore order |
| Duma | Elected representative assembly created after 1905, but with limited power |
| Fundamental Laws | 1906 laws that reasserted the Tsar's autocratic authority |
| St Petersburg Soviet | Workers' council showing organised revolutionary activity in 1905 |
| Potemkin Mutiny | Naval mutiny showing unrest could spread to the armed forces |
| Russo-Japanese War | Military defeat that exposed weakness and helped trigger unrest |
| Turning point | A major change; in 1905 this is debatable because autocracy survived |

### 8.4 PEEL model direction

A strong student response might argue:

> The 1905 Revolution significantly weakened Tsarist authority because it forced Nicholas II to make concessions that challenged the principle of autocracy. Bloody Sunday damaged the image of the Tsar as the people's protector, while the October Manifesto promised civil liberties and an elected Duma. This mattered because it showed that pressure from workers, peasants, liberals and parts of the armed forces could force the regime to retreat. However, the weakening was limited because the Fundamental Laws reasserted the Tsar's power in 1906 and the regime survived through repression and division of its opponents. Therefore, 1905 weakened the legitimacy of Tsardom, but it was not a complete turning point because autocracy remained in place.

---

## 9. Data model requirements for MVP

The MVP needs a shared database so student and teacher interfaces can communicate.

### 9.1 Core tables

#### users

```text
id
name
email
role: student / teacher / admin
created_at
```

#### classes

```text
id
class_name
teacher_id
course_id
academic_year
created_at
```

#### class_memberships

```text
id
class_id
student_id
created_at
```

#### courses

```text
id
title
exam_board
specification
```

#### units

```text
id
course_id
title
period
theme
sequence_order
year_group
```

#### lessons

```text
id
unit_id
title
enquiry_question
estimated_minutes
lesson_type
```

#### activities

```text
id
unit_id
lesson_id nullable
activity_type
title
skill_focus
difficulty
estimated_minutes
content_json
```

#### assignments

```text
id
class_id
teacher_id
title
due_date
assignment_type
created_at
```

#### assignment_activities

```text
id
assignment_id
activity_id
required
sequence_order
```

#### student_responses

```text
id
student_id
assignment_id
activity_id
response_type
response_json
score nullable
status
started_at
last_saved_at
submitted_at
```

### 9.2 Derived dashboard data

The teacher dashboard should derive:

```text
completion_percent
quiz_score
flashcard_completion
peel_status
confidence_score
risk_flag
last_activity_at
```

---

## 10. Completion rules

Clear completion rules are essential so the teacher dashboard is trustworthy.

| Activity | Counts as complete when... |
|---|---|
| Lesson content | Student reaches final lesson content section |
| Quiz | Student submits full attempt |
| Flashcards | Student reviews required card set and marks each card |
| PEEL response | Student submits written response |
| Confidence exit ticket | Student submits confidence score and least secure area |
| Assignment | All required activities are complete |

Status values:

```text
not_started
in_progress
submitted
complete
late
missing
```

---

## 11. Risk flag rules for MVP

The MVP should include simple but useful risk flags.

| Condition | Risk flag |
|---|---|
| Assignment not started after due date | Missing |
| Assignment partially complete after due date | Incomplete |
| Quiz below target | Knowledge concern |
| PEEL not submitted | Written work missing |
| Confidence 1-2 | Low confidence |
| Quiz below target and confidence 1-2 | Intervention priority |
| Quiz high but confidence low | Reassurance/check-in |
| Quiz low but confidence high | Miscalibration |

Risk flags should support teacher judgement, not replace it.

---

## 12. First build sequence

### Build 1: Platform skeleton

- New modular app structure
- Student and teacher routes
- Supabase connection or equivalent database setup
- Authentication with student/teacher roles
- Basic layout matching calm Education Upgrade style

### Build 2: Content model

- Course: AQA Russia 1H
- Unit: 1905 Revolution
- Lesson: Was 1905 a turning point?
- Activities: lesson content, quiz, flashcards, PEEL, confidence exit ticket

### Build 3: Student flow

- Student dashboard
- Assigned 1905 pathway card
- Lesson view
- Quiz activity
- Flashcard activity
- PEEL response box with autosave
- Confidence exit ticket
- Completion status

### Build 4: Teacher flow

- Teacher dashboard
- Class creation/view
- Assign 1905 pathway
- View student completion
- View quiz score
- View flashcard progress
- View PEEL response
- View confidence rating
- Simple risk flags

### Build 5: Reliability pass

- Autosave written work
- Prevent lost responses
- Confirm role permissions
- Test completion status accuracy
- Test mobile view
- Test late/missing states

### Build 6: Pilot trial

- Use with one class or test student accounts
- Collect student usability feedback
- Check teacher dashboard usefulness
- Refine before expanding topics

---

## 13. Phase 2 scope

After the MVP loop works, add:

- more 1905 activity types: timeline ordering, cause ranking, significance scale
- full Lessons Library
- guided study modes: Learning Journey, Recap, Exam Week, Intervention, Mastery
- broader course topic map
- more Year 12 units
- AO3 interpretation builder
- 25-mark essay planner
- teacher comments/feedback
- simple intervention group creation
- class heat map
- student progress page

---

## 14. Later scope

Only after the core platform is reliable:

- AI diagnostic feedback on PEEL/AO3 responses
- auto-generated teacher class summaries
- downloadable reports
- parent-friendly summaries
- advanced rewards and teacher-awarded trophies
- games dashboard
- full PWA offline support
- multi-subject expansion

---

## 15. Reliability requirements

The MVP should be judged by reliability, not feature count.

Essential reliability checks:

| Area | Requirement |
|---|---|
| Login | Student and teacher accounts route correctly |
| Permissions | Students see only their own work |
| Assignments | Teacher-set work appears for correct students |
| Saving | Written responses autosave and persist |
| Completion | Dashboard status matches actual completion |
| Quiz score | Scores are accurate and stored |
| Confidence | Ratings are visible to teacher |
| Mobile | Student pathway works on phone/tablet |
| Content | Historical content is accurate |
| Performance | Pages load without delay |

---

## 16. Success criteria for the MVP trial

The MVP is successful if:

### Student success

- Students can access the assigned 1905 pathway easily.
- Students understand what to do next.
- Students complete active retrieval rather than passive reading only.
- Students submit a written PEEL response.
- Students reflect on confidence.
- Students do not lose work.

### Teacher success

- Teacher can assign the pathway quickly.
- Teacher can see who completed it.
- Teacher can see quiz weaknesses.
- Teacher can read written responses.
- Teacher can see low confidence students.
- Teacher can identify intervention needs faster than through manual checking.

### Technical success

- Data saves correctly.
- Dashboard data is accurate.
- Role permissions work.
- The app is stable on mobile and desktop.
- The content model is reusable for the next topic.

---

## 17. Final MVP judgement

The first version of the new platform should not try to be the full Russia app.

It should prove this:

> A teacher can assign a structured 1905 Revolution lesson/pathway; students can complete lesson, quiz, flashcards, PEEL response and confidence exit ticket; the app saves the evidence; the teacher dashboard shows accurate progress and intervention needs.

Once this loop is reliable, the platform can expand topic by topic across the full AQA Russia course.
