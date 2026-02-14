# Mobile UI Progressive Disclosure Proposal (History Revision App)

## Goal
Reduce homepage clutter after a learner completes their Daily Challenge by collapsing the `Challenge Status` card into a compact horizontal **Success Bar**, so the **25-Mark Essay Plan** and **Next Steps** are visible above the fold.

---

## Proposed Information Hierarchy

### Before daily completion
1. Challenge Status (full card)
2. Topic Quiz
3. 25-Mark Essay Plan
4. Next Steps

### After daily completion
1. Success Bar (compact replacement for Challenge Status)
2. 25-Mark Essay Plan
3. Next Steps
4. Topic Quiz (still visible lower on screen, but concise labeling retained)

This keeps motivational confirmation visible while prioritizing actionable study items.

---

## React Native Component Structure

```tsx
// HomeScreen.tsx
<SafeAreaView style={styles.container}>
  <ScrollView contentContainerStyle={styles.content}>
    <Header />

    <DailyChallengeSection
      isComplete={dailyChallengeComplete}
      challengeProgress={challengeProgress}
      streak={streak}
      onOpenDetails={openChallengeDetails}
    />

    <EssayPlanCard
      title="25-Mark Essay Plan"
      prompt={essayPrompt}
      completion={essayPlanCompletion}
      onContinue={goToEssayPlan}
    />

    <NextStepsCard
      steps={nextSteps}
      onStepPress={handleNextStepPress}
    />

    <TopicQuizCard
      topic={topicName}
      currentScore={quizCurrentScore}
      targetScore={quizTargetScore}
      onStartQuiz={goToQuiz}
    />
  </ScrollView>
</SafeAreaView>
```

```tsx
// DailyChallengeSection.tsx
return isComplete ? (
  <ChallengeSuccessBar
    title="Daily Challenge Complete"
    subtitle={`+${xpEarned} XP today`}
    streak={streak}
    onPress={onOpenDetails}
  />
) : (
  <ChallengeStatusCard
    progress={challengeProgress}
    checklist={challengeChecklist}
    onContinue={onOpenDetails}
  />
);
```

```tsx
// TopicQuizCard.tsx (labeling requirement)
<Text style={styles.metricLabel}>Current Score / Target Score</Text>
<Text style={styles.metricValue}>{currentScore}% / {targetScore}%</Text>
```

---

## Component Responsibilities

### `HomeScreen`
- Owns layout order and responsive spacing.
- Reads completion state and passes it to `DailyChallengeSection`.
- Ensures essay/next-step cards are immediately after the challenge section.

### `DailyChallengeSection`
- Wrapper responsible for progressive disclosure behavior.
- Swaps expanded card ↔ compact success bar based on `isComplete`.
- Keeps challenge context discoverable without occupying vertical space.

### `ChallengeStatusCard` (expanded state)
- Shows checklist, progress ring/bar, and call-to-action while incomplete.

### `ChallengeSuccessBar` (collapsed state)
- Horizontal compact strip with:
  - success icon,
  - “Daily Challenge Complete” label,
  - lightweight streak/XP summary,
  - optional chevron for details.
- Fixed low height (e.g., 56–64px) to preserve above-the-fold space.

### `EssayPlanCard` and `NextStepsCard`
- Prioritized immediately below success bar after completion.
- Maintain larger tap targets and clear single-primary action each.

### `TopicQuizCard`
- Explicitly labels score as:
  - **Current Score / Target Score**
- Example displayed value:
  - **68% / 80%**

---

## State Model (minimal)

```ts
type HomeViewModel = {
  dailyChallengeComplete: boolean;
  challengeProgress: number;
  streak: number;
  quizCurrentScore: number;
  quizTargetScore: number;
};
```

- `dailyChallengeComplete` drives progressive disclosure.
- Score fields directly map to the required quiz label/value presentation.

---

## Interaction + Animation Notes

- Use `LayoutAnimation` or Reanimated shared layout transitions when toggling card → bar.
- Keep transition short (180–240ms) and easing smooth to reduce layout jump.
- Preserve semantic continuity by reusing title text (“Daily Challenge”) in both states.

---

## Quick UX Acceptance Criteria

1. When daily challenge is incomplete, users see the full `Challenge Status` card.
2. When complete, users see a compact horizontal `Success Bar` in the same slot.
3. After completion, **25-Mark Essay Plan** and **Next Steps** appear above the fold on typical phone heights.
4. Topic Quiz always shows score label exactly as:
   - **Current Score / Target Score**
5. Topic Quiz value format is `{current}% / {target}%`.
