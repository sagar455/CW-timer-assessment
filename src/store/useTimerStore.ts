import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Timer } from "../types/timer";
import { TimerAudio } from "../utils/audio";

let globalInterval: NodeJS.Timeout | null = null;

const timerAudio = TimerAudio.getInstance();

const loadTimersFromStorage = (): Timer[] => {
  const storedTimers = localStorage.getItem("timers");
  return storedTimers ? JSON.parse(storedTimers) : [];
};

const saveTimersToStorage = (timers: Timer[]) => {
  localStorage.setItem("timers", JSON.stringify(timers));
};

const initialState = {
  timers: loadTimersFromStorage(),
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.timers.push({
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      });
      saveTimersToStorage(state.timers);
    },
    deleteTimer: (state, action) => {
      state.timers = state.timers.filter((timer) => timer.id !== action.payload);
      saveTimersToStorage(state.timers);
    },
    toggleTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.isRunning = !timer.isRunning;
      }
      saveTimersToStorage(state.timers);
    },
    updateTimers: (state) => {
      state.timers.forEach((timer) => {
        if (timer.isRunning && timer.remainingTime > 0) {
          timer.remainingTime -= 1;
        }

        // Logic when the timer finishes
        if (timer.remainingTime <= 0 && timer.isRunning) {
          timer.isRunning = false;

          timerAudio.play().catch(console.error);
          timerAudio.infinitePlay();
          toast.success(`Timer "${timer.title}" has ended!`, {
            duration: 1000,
            action: {
              label: "Dismiss",
              onClick: () => timerAudio.stop(),
            },
          });
        }
      });
      saveTimersToStorage(state.timers);
    },
    restartTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.remainingTime = timer.duration;
        timer.isRunning = false;
      }
      saveTimersToStorage(state.timers);
    },
    editTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload.id);
      if (timer) {
        Object.assign(timer, action.payload.updates);
        if ("duration" in action.payload.updates) {
          timer.remainingTime = action.payload.updates.duration;
        }
        timer.isRunning = false;
      }
      saveTimersToStorage(state.timers);
    },
  },
});

const store = configureStore({
  reducer: timerSlice.reducer,
});

export { store };

export const { addTimer, deleteTimer, toggleTimer, updateTimers, restartTimer, editTimer } =
  timerSlice.actions;

export const useTimerStore = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state: { timers: Timer[] }) => state.timers);

  const startGlobalTimer = () => {
    if (!globalInterval) {
      globalInterval = setInterval(() => {
        dispatch(updateTimers());
      }, 1000);
    }
  };

  return {
    timers,
    addTimer: (timer: Omit<Timer, "id" | "createdAt">) => dispatch(addTimer(timer)),
    deleteTimer: (id: string) => dispatch(deleteTimer(id)),
    toggleTimer: (id: string) => {
      dispatch(toggleTimer(id));
      startGlobalTimer();
    },
    restartTimer: (id: string) => dispatch(restartTimer(id)),
    editTimer: (id: string, updates: Partial<Timer>) => dispatch(editTimer({ id, updates })),
    startGlobalTimer,
  };
};
